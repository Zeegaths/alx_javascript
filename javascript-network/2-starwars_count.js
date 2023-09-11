#!/usr/bin/node
// prints movies where " Star wars Wedge Antilles" is present.
const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, { json: true }, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Error:', response.statusCode, body.detail);
        process.exit(1);
    }

    const characterId = 18; // Wedge Antilles' character ID
    const moviesWithCharacter = body.results.filter(movie =>
        movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    console.log(`Number of movies with Wedge Antilles: ${moviesWithCharacter.length}`);
});
