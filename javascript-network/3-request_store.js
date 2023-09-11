#!/usr/bin/node
// gets contents of a webpage and storesit ins file
const request = require('request');
const fs = require('fs');
const apiUrl = process.argv[2];

request.get(apiUrl).pipe(fs.createWriteStream('responnse.json'));
