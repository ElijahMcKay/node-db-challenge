const db = require('./db-config'); 

module.exports = {
    getResources,
    addResources,
    getProjects,
    addProjects,
    getTasks,
    addTasks
}


function getResources() {
    return db('resources'); 
}

function addResources(resource) {
    return db('resources').insert(resource)
}

function getProjects() {
    return db('projects'); 
}

function addProjects(project) {
    return db('projects').insert(project)
}


// The list of tasks should include the project name and project description
function getTasks(id) {
    return db('tasks as t')
        .join("projects as p", "project_id", "p.id")
        .where({project_id: id})
        .select("p.project_name", "p.project_description")
}

function addTasks(task) {
    return db('tasks').insert(task); 
}