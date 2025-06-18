import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { authMiddleware } from './authMiddleware.js';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const adapter = new JSONFile('db.json');
const db = new Low(adapter, { reviews: [], users: [] });

await db.read();
await db.write();

app.get('/reviews', async (req, res) => {
  await db.read();
  res.json(db.data.reviews);
});

// User signup with password hashing
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  await db.read();
  const exists = db.data.users.find(u => u.username === username);
  if (exists) {
    return res.status(400).json({ message: 'User already exists.' });
  }
  const hash = bcrypt.hashSync(password, 10);
  const user = { username, password: hash };
  db.data.users.push(user);
  await db.write();
  // Generate JWT token upon signup
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
  res.json({ token });
});

// User login with password verification
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  await db.read();
  const user = db.data.users.find(u => u.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
  res.json({ token });
});

// POST a new review (protected)
app.post('/reviews', authMiddleware, async (req, res) => {
  const { roomNumber, email, body } = req.body;
  const newReview = { id: nanoid(), roomNumber, email, body };
  await db.read();
  db.data.reviews.push(newReview);
  await db.write();
  res.json({ message: 'Review added.', review: newReview });
});

// PUT update an existing review (protected)
app.put('/reviews/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { roomNumber, email, body } = req.body;
  await db.read();
  const review = db.data.reviews.find(r => r.id === id);
  if (!review) {
    return res.status(404).json({ message: 'Review not found.' });
  }
  review.roomNumber = roomNumber;
  review.email = email;
  review.body = body;
  await db.write();
  res.json({ message: 'Review updated.', review });
});

// DELETE remove a review by id (protected)
app.delete('/reviews/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  await db.read();
  const idx = db.data.reviews.findIndex(r => r.id === id);
  if (idx === -1) {
    return res.status(404).json({ message: 'Review not found.' });
  }
  db.data.reviews.splice(idx, 1);
  await db.write();
  res.json({ message: 'Review deleted.' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
