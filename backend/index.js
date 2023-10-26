const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

const userRouter = require('./routes/router'); 
const router = require('./routes/router');


// Database connection
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.DB_URI, dbOptions)
  .then(() => console.log('DATABASE CONNECTED SUCCESSFULLY'))
  .catch(err => console.log(err));

// Registration route
app.use('/',router)

// Start the server
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
