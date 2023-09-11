#!/usr/bin/node
const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
    console.log('Usage: node getWebPageContents.js <URL> <file path>');
    process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, { encoding: 'utf-8' }, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Error:', response.statusCode);
        process.exit(1);
    }

    fs.writeFile(filePath, body, { encoding: 'utf-8' }, (writeError) => {
        if (writeError) {
            console.error('Error writing to file:', writeError);
            process.exit(1);
        }

        // Read the content from the file and print it
        fs.readFile(filePath, { encoding: 'utf-8' }, (readError, fileContent) => {
            if (readError) {
                console.error('Error reading from file:', readError);
                process.exit(1);
            }

            console.log(fileContent);
        });
    });
});
