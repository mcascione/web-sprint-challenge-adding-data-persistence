const express = require('express');
const resourcesRouter = require('./resource/router');
const tasksRouter = require('./task/router');
const projectsRouter = require('./project/router');
const server = express();

server.use(express.json());

server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);
server.use('/api/projects', projectsRouter);

module.exports = server;