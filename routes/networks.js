const network = require('../models/Network');

module.exports = (app) => {
  app.get(
    '/api/get_networks',
    (req, res) => {
      console.log(req);
      network.find({}, (err, data) => {
        res.send({data: data});
      })
    }
  );

  app.post(
    '/api/create_network',
    (req, res) => {
      try{
        const newNetwork = new network({
          Name: req.body.Name,
          Fullname: req.body.Fullname,
          Description: req.body.Description,
          Link: req.body.Link,
          DateCreated: req.body.DataCreated
        });

        newNetwork.save().then((doc) => {
          console.log("Successfully inserted a new entry into network");
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({network: doc}))
        });
      } catch(err) {
        res.sendStatus(500);
      }
    }
  );
}
