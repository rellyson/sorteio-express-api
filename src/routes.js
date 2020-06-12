const Raffle = require('./Raffle');
modulo.exports = [{
    method: "GET",
    path: "/getRaffle",
    options: {
      handler: Raffle.getRaffle
    }
  },
  {
    method: "POST",
    path: "/makeRaffle",
    options: {
      handler: Raffle.makeRaffle
    }
  },
  {
    method: "PUT",
    path: "/updateRaffle",
    options: {
      handler: Raffle.updateRaffle
    }
  },
  {
    method: "DELETE",
    path: "/deleteRaffle",
    options: {
      handler: Raffle.deleteRaffle
    }
  }]
