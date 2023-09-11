#!/usr/bin/node
// prints the number of completed tasks by user id
const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request.get(apiUrl, { json: true }, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Error:', response.statusCode);
        process.exit(1);
    }

    // Create a map to store the count of completed tasks for each user ID
    const completedTasksByUser = new Map();

    // Filter tasks that are completed (completed = true)
    const completedTasks = body.filter(task => task.completed);

    // Count completed tasks for each user
    completedTasks.forEach(task => {
        const userId = task.userId;
        if (completedTasksByUser.has(userId)) {
            completedTasksByUser.set(userId, completedTasksByUser.get(userId) + 1);
        } else {
            completedTasksByUser.set(userId, 1);
        }
    });

    // Print the number of completed tasks for each user
    completedTasksByUser.forEach((count, userId) => {
        console.log(`User ID ${userId}: ${count} completed tasks`);
    });
});
