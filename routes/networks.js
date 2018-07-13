const networks = require('../models/Network');

module.exports = (app) => {
  app.get(
    '/api/get_networks',
    (req, res) => {
      networks.find({}, (err, data) => {
        res.send({data: data});
      })
    }
  );

  app.post(
    '/api/create_network',
    (req, res) => {
      try{
        const newNetwork = new networks({
          Name: req.body.Name,
          Fullname: req.body.Fullname,
          Description: req.body.Description,
          Link: req.body.Link,
          DateCreated: req.body.DataCreated,
          Posts: []
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

  app.post(
    '/api/add_post', 
    (req, res) => {
      try {
        console.log("Request body: "+ JSON.stringify(req.body));

        const post = { Content: "Testing", Count: 0};
        // networks.update(
        //   { Name: }, 
        //   {
        //     $push: { Posts: post}
        //   }, (err, count) => {
        //     if(err != null){
        //       console.log("Within here === "+ JSON.stringify(count));
        //       return count;
        //     }
        //     return err;
        //   }
        //   );
      }catch(err) {
        console.log(err);
        res.sendStatus(500);
      }
    });
}
