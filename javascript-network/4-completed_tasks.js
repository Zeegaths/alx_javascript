#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, { json: true }, (error, response, todos) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Error:', response.statusCode);
        process.exit(1);
    }

    // Filter the todos to select only completed tasks
    const completedTodos = todos.filter(todo => todo.completed);

    // Create an object to store the completed task count for each user
    const userTasksCount = {};

    // Count the completed tasks for each user
    completedTodos.forEach(todo => {
        if (userTasksCount[todo.userId]) {
            userTasksCount[todo.userId]++;
        } else {
            userTasksCount[todo.userId] = 1;
        }
    });

    // Print the results as specified
    console.log(userTasksCount);
});
