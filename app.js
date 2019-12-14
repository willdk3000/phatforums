const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Serve static files from the React app

//app.use('/assets', express.static('public'))
//app.use(express.static('client/build'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

require('dotenv').config();

require('./api/routes')(app);




// For Heroku - port env variable
const PORT = process.env.PORT || 5000
app.listen(PORT);
console.log("Server listening on port", PORT);


