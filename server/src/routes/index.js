const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/etablissements', controllers.etablissements.get);

module.exports = router;
