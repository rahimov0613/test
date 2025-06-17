const express = require('express');
const { addNum, sayHEllo } = require('../controllers/hello.controller');

const router = express.Router();

router.get('/hello', sayHEllo);
router.post('/add', addNum);

module.exports = router;

