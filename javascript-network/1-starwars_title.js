#!/usr/bin/node
// prints the title of a star wa movie to match a given integer
const request = require('request');
const url = `https://swapi-api.alx-tools.com/api/films/:id`;

request.get(url, function (error, response, body) {
    const response = JSON.parse(data);
    console.log('Title:', body.title)
});

