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
      console.log("within network post: ", req.body);
      try{
        const newNetwork = new network({
          ID: req.body.ID,
          Name: req.body.Name,
          Fullname: req.body.Fullname,
          Description: req.body.Description,
          Link: req.body.Link,
          DateCreated: req.body.DataCreated
        });

        newNetwork.save().then((doc) => {
          console.log("made network");
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({network: doc}))
        });
      } catch(err) {
        res.sendStatus(500);
      }
    }
  );
}
