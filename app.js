const express = require("express");
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3001;
const geocode = require('./geocode');
const forecast = require('./forecast');

app.get('/', (req, res) => {
  geocode('New York', (error, data) => {
    const { latitude, longitude, location } = data;
      if (error) {
        console.log(error);
      } else {
        forecast (latitude, longitude, location, (error, data) => {
          if (error) {
            console.log(error);
          }  
          res.send({ forecast:data });
        });
      }
    });
});

// app.get('/forecast/:latitude/:longitude', (req, res) => {
//   const { latitude, longitude } = req.params;
// });

app.listen(port, function() {
  console.log("Runnning on " + port);
});