#!/usr/bin/node
// prints the title of a star wars movie to match a given integer
const request = require('request');
const url = `https://swapi-api.alx-tools.com/api/films/:id`;

request.get(url, function (error, response, body) {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    const responseData = JSON.parse(body); // Use a different variable name here
    console.log('Title:', responseData.title);
});

