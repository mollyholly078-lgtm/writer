const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

let cachedClient = null;

async function connectDB() {
  if (cachedClient && mongoose.connection.readyState === 1) {
    return true;
  }

  if (!MONGO_URI) {
    console.warn('MONGO_URI not set — running without database');
    return false;
  }

  try {
    mongoose.connection.on('connected', () => {
      cachedClient = mongoose.connection;
    });
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('MongoDB connected');
    return true;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    console.warn('Running without database — API will return errors, frontend will use localStorage');
    return false;
  }
}

module.exports = connectDB;
