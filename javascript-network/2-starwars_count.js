#!/usr/bin/node
const request = require('request');
const apiUrl = 'https://swapi-api.alx-tools.com/api/people/18/'; // Wedge Antilles' character ID

if (process.argv.length !== 2) {
    console.log('Usage: node countMoviesWithCharacter.js');
    process.exit(1);
}

// Fetch character data to get a list of films
request.get(apiUrl, { json: true }, (error, response, characterData) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Error:', response.statusCode, characterData.detail);
        process.exit(1);
    }

    // Check if the character has films associated with them
    if (characterData.films.length > 0) {
        // Now, count the films associated with the character
        console.log(`${characterData.films.length}`);
    } else {
        console.log('0'); // Character has no associated films
    }
});

