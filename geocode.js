const axios = require("axios");

const geocode = (address, callback) => {
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYWxleHQwMyIsImEiOiJjazdyNWw1NnQwYXZoM25ucmZxbzE0cjNzIn0.C6jBI_XFMLFVhpIkibt5bA`
  let data = axios.get(url).then((response, error) => {
    if (error) {
      callback('there is an error', null);
    }
    callback(null,
      { longitude: response.data.features[0].center[1],
        latitude: response.data.features[0].center[0],
        location: response.data.features[0].place_name
      });
    });
  return data;
};



module.exports = geocode;