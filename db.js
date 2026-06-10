const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
  if (!MONGO_URI) {
    console.warn('MONGO_URI not set — running without database');
    return false;
  }
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
    return true;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    console.warn('Running without database — API will return errors, frontend will use localStorage');
    return false;
  }
}

module.exports = connectDB;
