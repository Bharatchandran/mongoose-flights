const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

module.exports = {
    new : newTicket,
    create
}
function newTicket(req, res) {
    // const flight = Flight.findById(req.params.id)
    const flight = req.params.id;

    console.log(flight._id,"ping",req.params.id)
    res.render('tickets/new',{
        title:"New Ticket",
        flight
    })
}

async function create(req, res) {
    const ticket = await Ticket.create(req.body)
    // const flight = await Flight.findById(req.params.id)
    const flight_id = req.params.id
    ticket.flight.push(req.params.id); 
    await ticket.save();
    res.redirect(`/flights/${flight_id}`)
}