# 11 Express.js | Note Taker Application

Build of a back end application that uses express.js, to manage a front end note taking application. The front end application code was already provided.

---

**Table of Contents:**

* [Description](#description)
* [User Story](#user-story)
* [Installation](#installation)
* [Usage](#usage)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Using the code](#using-the-code)
* [Note Taking Application](#note-taking-application)
    * [Link to the deployed application](#link-to-the-deployed-application)
    * [Screenshot of the Note Taking Application](#screenshot-of-the-note-taking-application)
* [License](#license) 
* [Questions](#questions)

--- 

## Description

Generating JavaScript code, that when propmted to run by the user in the terminal a series of questions will be asked, of which the answers to, will auto-generate a an HTML displaying a Team Profile.

## User Story

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Acceptance Criteria

* GIVEN a note-taking application
* WHEN I open the Note Taker
* THEN I am presented with a landing page with a link to a notes page
* WHEN I click on the link to the notes page
* THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
* WHEN I enter a new note title and the note’s text
* THEN a Save icon appears in the navigation at the top of the page
* WHEN I click on the Save icon
* THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
* WHEN I click on an existing note in the list in the left-hand column
* THEN that note appears in the right-hand column
* WHEN I click on the Write icon in the navigation at the top of the page
* THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column


The main challenge i faced with this application, was understanding the GET and POST responses and requests, I am also still getting used to using the node.js fs functionality. However, by putting together the back end for this note taking application I was able to practice these code dev skills and used online resources such as MDN to help better my understanding.


## Installation

Start by downloading the code from the repository, then load in VS code, open a terminal and make sure you are in the project folder.
Initialise the code by typing into the terminal:
```bash
npm init -y
npm i inquirer@8.2.4
npm i jest
```

Then add *"start": "node index.js"* and add *jest* as the test command.


## Using the code

To get the Team profile generator code to run you will need to enter into the terminal:
```bash
node index.js
```
 and you will be prompted with a series of questions, the answers to these questions will fill in the sections of the HTML required to auto generate a Team Profile HTML page. Add the end of the code you should see a 'Team Page Created' message logged and the generated HTML file will be added to the "dist" folder for you.

I have fully commented the JavaScript files, to explain the flow and logic of the code, so that others can work on this and expand on it too.


## Note Taking Application

### Link to the deployed application

<a href="https://enigmawoman.github.io/02-advanced-css/">Deployed Note Taking Application</a>

### Screenshot of the Note Taking Application

![Screenshot of deployed Note taking application](./Assets/localhost_3001_notes.png)


## License

NA

## Questions

If you have any questions, reach out at [@enigmawoman](https://github.com/enigmawoman)</br>
