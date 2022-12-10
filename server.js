//setting the requirements for the this file to run and pull data from other files
const express = require('express');
const path = require('path');
const apiRouter = require('./routes/apiRouter')

// setting the port env for Heroku deployment, with a fall back to 3001
const PORT = process.env.PORT || 3001;

// pulling in the express functionality
const app = express();
// setting up the middleware required
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//the static middleware tells the program to pull files from the public folder
app.use(express.static('public'));
// middleware to point to the apiRouter.js file for the Get & POST routes for api/notes
app.use('/api', apiRouter);



//GET route for notes.hmtl
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET route for index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// listening on port set out as above
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);