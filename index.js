const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2] || 'Bengal';

fetchBreedDescription(breed, (err, res) => {
    if (err) {
        console.log(`Sorry, no cat's found with the breed ${breed}`)
    } else {
        console.log(res)
    }
})
