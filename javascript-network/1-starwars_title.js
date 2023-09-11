#!/usr/bin/node
// prints the title of a star wars movie to match a given integer
const request = require('request');
const movieId = process.argv[2]; // Get the movie ID from the command line argument
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, function (error, response, body) {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Error:', response.statusCode);
        process.exit(1);
    }

    const responseData = JSON.parse(body);
    console.log(responseData.title);
});

