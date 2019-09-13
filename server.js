const express = require('express'); 
const helmet = require('helmet'); 

const projectRouter = require('./projects/projectRouter.js'); 
const resourceRouter = require('./resources/resourceRouter.js');
const taskRouter = require('./tasks/taskRouter.js');  

const server = express(); 

server.use(helmet()); 
server.use(express.json()); 

server.use('/projects', projectRouter)
server.use('/projects/resources', resourceRouter)
server.use('/projects/tasks', taskRouter)


module.exports = server; 