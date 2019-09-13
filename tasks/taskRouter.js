const express = require('express');

const Task = require('../data/db-helper'); 

const router = express.Router(); 



router.get('/', (req, res) => {
    Task.getProjects()
        .then(task => {
            res.status(200).json(task); 
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/', (req, res) => {
    const id = req.params.id
    const body = req.body; 
    Task.addProjects(id)
        .then(task => {
            res.status(201).json(task); 
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

module.exports = router; 