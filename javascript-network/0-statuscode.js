#!/usr/bin/node
// displays the status codode of a GET request
const req = require('request');
const url = `https://intranet.alxswe.com/status`;

req.get(url, { encoding: 'utf-8' })
    .on('response', response => {
        console.log('code:', response.statusCode);
    })
    .on('error', err => {
        console.log('code:', response.statusCode);
    });