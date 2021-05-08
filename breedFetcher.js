const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

  request(url, (err, res, body) => {
    const data = JSON.parse(body);

    if (err || data.length === 0) {
      callback("Didn't work bro", null);
    } else {
      const description = data[0].description;
      callback(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };
