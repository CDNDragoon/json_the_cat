const request = require('request');

const breed = process.argv[2] || 'Bengal';

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`

request(url, function (error, response, body) {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Sorry, no cat's found with the breed ${breed}`)
  } else {
  console.log(data);
  }
});
