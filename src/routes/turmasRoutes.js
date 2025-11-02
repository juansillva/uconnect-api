const express = require('express');
const { buscarTurmas } = require('../controllers/turmasController');
const router = express.Router();

router.get('/', buscarTurmas );

module.exports = router;