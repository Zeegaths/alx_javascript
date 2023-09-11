#!/usr/bin/node
// displays the status codode of a GET request
const req = require('request');
const url = `https://intranet.alxswe.com/status`;

req.get(url, { encoding: 'utf-8' }, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    console.log('code:', response.statusCode);
});