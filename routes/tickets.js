var express = require('express');
var router = express.Router();
var ticketController = require('../controllers/tickets');

router.post('/tickets/:id', ticketController.create)
router.get('/flights/:id/tickets/new', ticketController.new)

module.exports = router;