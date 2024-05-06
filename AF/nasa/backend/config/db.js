const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect("mongodb+srv://rukshan:rukshan123@cluster0.w9lemr4.mongodb.net/AssignmentAF?retryWrites=true&w=majority&appName=Cluster0");
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connection;