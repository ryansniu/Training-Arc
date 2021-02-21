# Training Arc
Time to solve some word problems!

## Inspiration
Many students struggle to translate math word problems to their respective equations that the students are more familiar with. Furthermore, with online learning, it is hard to give personalized feedback to the students to help familiarize them with the proper steps to take to solve word problems. Because of this, we wanted to develop a web application that could assess a student's abilities to solve a variety of word problems, and then provide step-by-step solutions as to how to solve word problems that they may be having trouble with.
## What it does
Our project takes a word problem submitted by the user as input and runs it through the Wolfram Alpha Full Result API to generate a JSON with the solution and step-by-step process if available. The website then takes the JSON and parses it, printing the results and the step-by-step solution to the page. We also have a separate page with a diagnostic quiz so that the user can assess themselves by solving tagged word problems and seeing what their score is, as well as what percentage of each type of problem they got correct.

## What's next for Word Problem Solver
We hope to expand the functionality of our word problem solver to be able accept a larger variety of questions. Furthermore, we would like to generate word problem questions and tag them using an online word problem API to use for the quiz questions. We would like to make an automatic topic detection for all kinds of word problems to tag each of the randomly generated word problems.

DEMO:
https://training-arc.herokuapp.com
