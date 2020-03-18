const axios = require('axios');

const forecast = (lat, lng, location, callback) => {
    let data = axios.get(`https://api.darksky.net/forecast/08c499015c2e5c3cb4e458b0c0d75fdc/${lat},${lng}`).then((response, error) => {
      if (error) {
        console.log(error);
      }
      callback(null, response.data.hourly.summary + "for" + location);
    });
  return data;
};

module.exports = forecast;