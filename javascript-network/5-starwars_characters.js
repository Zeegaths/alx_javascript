#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
    console.log('Usage: node getCharactersInMovie.js <Movie ID>');
    process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request.get(apiUrl, { json: true }, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Error:', response.statusCode, body.detail);
        process.exit(1);
    }

    console.log(`Characters in "${body.title}":`);

    body.characters.forEach(characterUrl => {
        request.get(characterUrl, { json: true }, (charError, charResponse, charBody) => {
            if (charError) {
                console.error('Error:', charError);
                return;
            }

            if (charResponse.statusCode === 200) {
                console.log(charBody.name);
            }
        });
    });
});
