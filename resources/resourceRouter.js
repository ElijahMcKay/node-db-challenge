const express = require('express');

const Resource = require('../data/db-helper'); 

const router = express.Router(); 



router.get('/', (req, res) => {
    Resource.getProjects()
        .then(source => {
            source.map(e => {
                if (!e.task_complete) {
                    return e.task_complete = false
                } else if (e.task_complete) {
                    return e.task_complete = true
                } else {
                    return e;
                }
            })
            res.status(200).json(source); 
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/', (req, res) => {
    const body = req.body; 
    Resource.addProjects(body)
        .then(source => {
            res.status(201).json(source); 
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

module.exports = router; 
