const express = require('express');
// const { } = require('./recipe-middleware');
const Recipes = require('./recipe-model');

const router = express.Router();

// //[GET] /api/recipes
// router.get('/', (req, res, next) => {})

//[GET] /api/recipes/:id
router.get('/:id', (req, res, next) => {})


//error handling
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = router;
