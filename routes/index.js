const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/home_controller');

console.log('router loaded')
// To render all project in homepage 
router.get('/', homeControllers.home);
router.use('/project',require ('./project'));

module.exports = router;