const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}

async function index (req,res) {
    const flights = await Flight.find({});
    res.render('flights/index',{
        flights,
        title:"Flights"
    })
}

function newFlight(req, res) {
    const nFlight = new Flight();
    const dt = nFlight.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new',{
        title: "create new flight",
        departsDate,
        errorMsg : ""
    })
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    try{
        await Flight.create(req.body)
        res.redirect('/flights');
    } catch (err){
        console.log(err);
        res.redirect('/flights/new')
    }
}