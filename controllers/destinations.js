const Flight = require('../models/flight');

module.exports = {
    show
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    try {
        await flight.save()
    } catch (err) {
        console.log(err)
    }
    res.render('flights/show',{title:"test"})

}