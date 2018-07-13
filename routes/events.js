const events = require("../models/Event");

module.exports = (app) => {
  app.get(
    '/api/get_events',
    (req, res) => {
      events.find({}, (err, data) => {
        res.send({data: data});
      })
    }
  );
}