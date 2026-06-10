require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('./db');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.use('/api/posts', postsRouter);
app.use('/api', postsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', db: mongoose.connection.readyState === 1 });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

connectDB().then((connected) => {
  const mode = connected ? 'with MongoDB' : 'without database';
  console.log(`Server running at http://localhost:${PORT} (${mode})`);
  app.listen(PORT);
}).catch(() => {
  console.log(`Server running at http://localhost:${PORT} (static mode)`);
  app.listen(PORT);
});
