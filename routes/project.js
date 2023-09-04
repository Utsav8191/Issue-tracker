const express = require('express');
const router = express.Router();


const projectControllers = require('../controllers/project_controller');

router.get('/:id', projectControllers.renderProject);
router.post('/createIssue/:id', projectControllers.createIssue);
router.post('/create', projectControllers.create);

module.exports = router;