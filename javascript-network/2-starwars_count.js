#!/usr/bin/node
// prints movies where " Star wars Wedge Antilles" is present.
const request = require('request');
const apiUrl = process.argv[2];

if (process.argv.length !== 3) {
    console.log('Usage: node countMoviesWithCharacter.js <API URL>');
    process.exit(1);
}

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
        movie.characters.some(characterUrl =>
            characterUrl === `https://swapi.co/api/people/${characterId}/`
        )
    );

    console.log(`${moviesWithCharacter.length}`);

});

