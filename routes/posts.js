const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// GET /api/posts
router.get('/', async (req, res) => {
  try {
    const { status, search } = req.query;
    let filter = {};
    if (status) filter.status = status;
    if (search) {
      const regex = new RegExp(search, 'i');
      filter.$or = [
        { title: regex },
        { tags: regex },
      ];
    }
    const posts = await Post.find(filter).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/posts/:id
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/posts
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/posts/:id
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/posts/:id
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/posts/:id/comments
router.post('/:id/comments', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    post.comments.push({
      name: req.body.name,
      content: req.body.content,
      date: new Date(),
      parentId: req.body.parentId || null,
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/posts/:id/comments/:commentId
router.put('/:id/comments/:commentId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    const comment = post.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    if (req.body.name !== undefined) comment.name = req.body.name;
    if (req.body.content !== undefined) comment.content = req.body.content;
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/posts/:id/comments/:commentId
router.delete('/:id/comments/:commentId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    const comment = post.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    comment.deleteOne();
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/seed
router.post('/seed', async (req, res) => {
  try {
    const count = await Post.countDocuments();
    if (count > 0) {
      return res.json({ message: 'Already seeded' });
    }

    await Post.create([
      {
        title: 'The Art of Writing: Finding Your Voice',
        content: `<h2>Every Writer Has a Unique Voice</h2><p>Writing is one of the most personal forms of expression. Your voice is what sets you apart from every other writer in the world. It's the way you string words together, the rhythm of your sentences, and the perspective you bring to every topic.</p><p>Finding your voice doesn't happen overnight. It's a journey of exploration, experimentation, and ultimately, self-discovery. Here are some thoughts on how to begin that journey.</p><h2>Read Widely and Voraciously</h2><p>The best writers are always avid readers. Expose yourself to different genres, styles, and eras of writing. Notice what resonates with you. What makes you stop and re-read a sentence? What style feels natural to you?</p><blockquote>If you don't have time to read, you don't have the time — or the tools — to write. Simple as that. — Stephen King</blockquote><h2>Write Every Day</h2><p>Like any skill, writing improves with practice. Set aside time each day to write, even if it's just a paragraph. The more you write, the more comfortable you'll become with your own voice.</p><p>Don't worry about perfection. First drafts are meant to be messy. The magic happens in revision, where you refine your raw thoughts into polished prose.</p><h2>Embrace Vulnerability</h2><p>The most powerful writing comes from a place of honesty. Don't be afraid to share your real thoughts, feelings, and experiences. Readers connect with authenticity, not perfection.</p>`,
        tags: ['writing', 'creativity', 'craft'],
        status: 'published',
      },
      {
        title: 'Building a Second Brain: Digital Note-Taking Strategies',
        content: `<h2>Why You Need a Second Brain</h2><p>We live in an age of information overload. Every day, we consume articles, books, podcasts, videos, and conversations that contain valuable insights. But how much of that information do we actually retain and use?</p><p>The concept of a "Second Brain" — a trusted, organized digital repository for your knowledge — can transform how you learn, think, and create.</p><h2>The PARA Method</h2><p>One of the most effective organizational frameworks is PARA:</p><ul><li><strong>Projects</strong> — Short-term efforts with a clear goal</li><li><strong>Areas</strong> — Long-term responsibilities to maintain</li><li><strong>Resources</strong> — Topics of ongoing interest</li><li><strong>Archives</strong> — Inactive items from the other categories</li></ul><h2>Capture Everything</h2><p>The first step is to capture interesting ideas whenever you encounter them. Use a quick-capture tool on your phone or computer. Don't worry about organizing in the moment — just get it down.</p><p>Review your captures weekly and sort them into the appropriate PARA categories. This regular review process is what turns random notes into a powerful knowledge system.</p>`,
        tags: ['productivity', 'knowledge', 'learning'],
        status: 'published',
      },
      {
        title: 'Draft: Ideas for the Next Project',
        content: `<p>Some ideas I've been thinking about for the next big project...</p><ul><li>A series on creative workflows</li><li>Deep dives into design systems</li><li>Interviews with independent creators</li></ul><p>Need to flesh these out more before publishing.</p>`,
        tags: ['ideas'],
        status: 'draft',
      },
    ]);

    res.status(201).json({ message: 'Seeded 3 sample posts' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
