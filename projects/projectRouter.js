const express = require('express');

const Project = require('../data/db-helper'); 

const router = express.Router(); 



router.get('/', (req, res) => {
    Project.getProjects()
        .then(pro => {
            console.log(pro)
            pro.map(e => {
                if (!e.project_complete) {
                    return e.project_complete = false
                } else if (e.project_complete) {
                    return e.project_complete = true
                } else {
                    return e;
                }
            })
            res.status(200).json(pro); 
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/', (req, res) => {
    const body = req.body; 
    Project.addProjects(body)
        .then(pro => {
            res.status(201).json(pro); 
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})


module.exports = router; 


