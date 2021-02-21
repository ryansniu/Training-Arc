# import wolframalpha
# from pprint import pprint

from flask import Flask, request
import ssl
import requests
import os
import urllib.parse
import sys

app = Flask(__name__)

@app.route('/wolfram', methods = ['POST'])
def get_wolfram_response():
    print("getting request...")
    print(request.json)
    data=questionParse(request.json)
    print("request GET!")
    return data

def questionTag(solution):
	topics=[]
	#must add more
	keywords={"substitution":"substitution", "substitute":"substitution", "solve for":"solving systems of equations"}

	sysNum=0

	#Finding whether system of equations
	for i in solution:
		if "equations" in i["title"].lower() and int(i["numsubpods"])>1:
			for j in i["subpods"]:
				if j["title"]=="":
					sysNum=sysNum+1
			topics.append({"System of equations":[sysNum]})
			break

	#checking for operations and topics
	for i in solution:
		if i["title"]=="Equations with variables":
			#extract it all
			solveStep=str(i["subpods"][-1]["plaintext"]).lower()
			operators=[]
			keyTopic=[]

			if " - " in solveStep:
				operators.append("-")
			if " + " in solveStep:
				operators.append("+")
			if " = " in solveStep:
				operators.append("=")
			if " * " in solveStep:
				operators.append("*")

			#EXPAND KEYWORD DICTIONARY
			for words in keywords:
				if words in solveStep and keywords.get(words) not in keyTopic:
					keyTopic.append(keywords.get(words))

			# adjacent multiplication case
			solveStep=solveStep.replace(" ","")
			for count in range(0, len(solveStep)-1):
				if solveStep[count].isnumeric() and solveStep[count+1].isalpha():
					operators.append("*")
					break
			if operators:
				topics.append({"operators":operators})
			if keyTopic:
				topics.append({"topics":keyTopic})
			break

	# print("topics found: "+str(topics))
	return topics



def questionParse(question):
	ssl._create_default_https_context = ssl._create_unverified_context

	appid = os.getenv('WA_APPID', '88EHGH-JKPJPYA263')

	query = urllib.parse.quote_plus(f"{question}")
	query_url = f"http://api.wolframalpha.com/v2/query?" \
	            f"appid={appid}" \
	            f"&input={query}" \
	            f"&format=plaintext" \
				f"&podstate=Step-by-step%20solution" \
	            f"&output=json"

	# print(query_url)

	r = requests.get(query_url).json()
	results=[]
	result = r["queryresult"]["pods"]

	eqTopic=questionTag(result)
	r["topics"]=eqTopic
	return r
	#json, parsedJSON, topics



#preset input
# rhondaTest="Rhonda has 12 marbles more than Douglas. Douglas has 6 marbles more than Bertha. Rhonda has twice as many marbles as Bertha has. How many marbles does Douglas have?"
# bobTest="Bob has 34 apples. Quincy has 21 apples. How many apples do they have together?"
# data=questionParse(rhondaTest)
# print(data)

#rawinput input
# question=input("Query:")
# data=questionParse(question)

#cmd line input
# print (str(sys.argv))
# data=questionParse(sys.argv[1])