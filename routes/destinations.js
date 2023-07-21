const express =  require('express')
const router =  express.Router();
const destinationController = require('../controllers/destinations')

router.get('/flights/:id/show',destinationController.show);

module.exports = router;