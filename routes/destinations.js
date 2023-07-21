const express =  require('express')
const router =  express.Router();
const destinationController = require('../controllers/destinations')

router.post('/flights/:id/destinations',destinationController.create);

module.exports = router;