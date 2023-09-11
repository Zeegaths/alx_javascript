#!/usr/bin/node
const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

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

    // Group the completed tasks by user ID and count the tasks for each user
    const userTasksCount = {};
    completedTodos.forEach(todo => {
        if (userTasksCount[todo.userId]) {
            userTasksCount[todo.userId]++;
        } else {
            userTasksCount[todo.userId] = 1;
        }
    });

    // Print user IDs and the number of tasks completed by each user
    for (const userId in userTasksCount) {
        console.log(`User ID ${userId}: ${userTasksCount[userId]} completed tasks`);
    }
});
