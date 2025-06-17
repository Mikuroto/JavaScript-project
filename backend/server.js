import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { nanoid } from 'nanoid';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const adapter = new JSONFile('db.json');
const db = new Low(adapter, { reviews: [] });

await db.read();
await db.write();

app.get('/reviews', async (req, res) => {
  await db.read();
  res.json(db.data.reviews);
});

app.post('/reviews', async (req, res) => {
  const { roomNumber, email, body } = req.body;
  const newReview = { id: nanoid(), roomNumber, email, body };
  await db.read();
  db.data.reviews.push(newReview);
  await db.write();
  res.json({ message: 'Review added.', review: newReview });
});

app.put('/reviews/:id', async (req, res) => {
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

// DELETE remove a review by id
app.delete('/reviews/:id', async (req, res) => {
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
