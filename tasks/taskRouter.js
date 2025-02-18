const express = require('express');

const Task = require('../data/db-helper'); 

const router = express.Router(); 



router.get('/', (req, res) => {
    Task.getProjects()
        .then(task => {
            console.log(task); 
            task.map(e => {
                if (!e.task_complete) {
                    return e.task_complete = false
                } else if (e.task_complete) {
                    return e.task_complete = true
                } else {
                    return e;
                }
            })
            res.status(200).json(task); 
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/', (req, res) => {
    const body = req.body; 
    Task.addProjects()
        .then(task => {
            res.status(201).json(task); 
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

module.exports = router; 