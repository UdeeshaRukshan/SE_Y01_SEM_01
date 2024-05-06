const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require("cookie-parser");
const app = express();
const connection = require('./config/db');
const port = 3000;
const routes = require('./route');
const cors = require('cors');

// Use CORS middleware for handling browser CORS Policy
app.use(cors({
  origin: 'http://localhost:3001' // Allow only this origin to access resources
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connection();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use routes from the 'routes' directory
app.use('/', routes);

// Custom error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
