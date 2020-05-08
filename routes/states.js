var express = require('express')
var States = require('../models').States

var router = express.Router()

//use the router to get the information on the state
router.get('/states', function(req, res, next) {
    States.findAll({order: ['name']})
    .then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})

//creates a new route
//uses the States.findOne method to query the database
router.get('/states/:name', function(req, res, next) {
    States.findOne({where: {name: req.params.name}})
    .then(state => {
        if (state) {
            return res.json(state)
        } else {
            return res.status(404).send()
        }
    })
    .catch( err => next.err() )
})

// this connects to the API and will set a state to true or false which is visited or not visited
router.patch('/state/:name', function(req, res, next){
    States.update({ visited: req.body.visited }, { where: {
                name: req.params.name
            }
        })
        .then( rows => {
            if (rows) {
                return res.send('ok')
            } else {
                return res.status(404).send()
            }
        })
        .catch( err => next(err) )
})

module.exports = router