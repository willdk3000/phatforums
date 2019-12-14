const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

require('dotenv').config();

// Serve static files from the React app

//app.use('/assets', express.static('public'))
//app.use(express.static('client/build'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));


  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


require('./api/routes')(app);

// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// For Heroku - port env variable
//const PORT = process.env.PORT || 5000
//app.listen(PORT);
//console.log("Server listening on port", PORT);


module.exports = app;