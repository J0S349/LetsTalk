const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

// Models
require('./models/Network');
require('./models/Event');

// Routes
require('./routes/networks')(app);
require('./routes/events')(app);

// Connecting to MongoDB for test database
mongoose.connect('mongodb://localhost:27017/app');
const db = mongoose.connection;

db.on('error', err => {
  console.log(`Error while connecting to DB: ${err.message}`);
});

db.on('open', () => {
  console.log("DB connected successfully");
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// Set up error handdling
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) =>{
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
