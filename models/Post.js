const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
}, { _id: true });

const postSchema = new mongoose.Schema({
  title: { type: String, default: 'Untitled' },
  content: { type: String, default: '' },
  coverImage: { type: String, default: '' },
  tags: { type: [String], default: [] },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  comments: { type: [commentSchema], default: [] },
}, { timestamps: true, toJSON: { virtuals: true } });

module.exports = mongoose.model('Post', postSchema);
