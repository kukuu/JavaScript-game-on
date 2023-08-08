## Anagram game implementation.

The player should be given a random set of base letters a to z, e.g. the string "areallylongword". The aim of the game is to make as many words out of the given letters as possible, with each letter scoring one point. Letters cannot be used more than once per submitted word. A list of valid words can be found in the  wordlist.txt file.

For example, when starting with the base string "areallylongword":
* "no" is an acceptable submission, with score 2
* "grow" is an acceptable submission, with score 4
* "bold" is NOT an acceptable submission
* "glly" is NOT an acceptable submission
* "woolly" is an acceptable submission with score 6
* "adder" is NOT an acceptable submission

The game should maintain a list of the top ten highest-scoring submissions (word and score).


The working folder contains two folders: a basic UI for the game and a starter backend project. The logic of the game is  implemented in the Frontend/js/scripts.js file as well as other source files.

The backend project hosts an AWS Lambda function which can be run locally using the serverless command below. By default, after running the command, the function should be available at http://localhost:3000/hello. 

To get up and running with the backend project, run the following commands in its root folder
> npm install
> serverless offline start





