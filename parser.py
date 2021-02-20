import ssl
import wolframalpha

from pprint import pprint
import requests
import os
import urllib.parse

def questionParse(question):
	ssl._create_default_https_context = ssl._create_unverified_context

	appid = os.getenv('WA_APPID', '88EHGH-JKPJPYA263')

	#sample
	# question="Rhonda has 12 marbles more than Douglas. Douglas has 6 marbles more than Bertha. Rhonda has twice as many marbles as Bertha has. How many marbles does Douglas have?"

	query = urllib.parse.quote_plus(f"{question}")
	query_url = f"http://api.wolframalpha.com/v2/query?" \
	            f"appid={appid}" \
	            f"&input={query}" \
	            f"&format=plaintext" \
				f"&podstate=Step-by-step%20solution" \
	            f"&output=json"

	print(query_url)

	r = requests.get(query_url).json()
	# print(r)
	#
	# for i in range(0, r["queryresult"]["numpods"]):
	# 	print( r["queryresult"]["pods"][i]["title"])
	result = r["queryresult"]["pods"]

	print("------------")
	for i in result:
		print(i)
	print("DONE")

questionParse("Rhonda has 12 marbles more than Douglas. Douglas has 6 marbles more than Bertha. Rhonda has twice as many marbles as Bertha has. How many marbles does Douglas have?")
