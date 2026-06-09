require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.use('/api/posts', postsRouter);
app.use('/api', postsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
