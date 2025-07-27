import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/lyrics', async (req, res) => {
  const { artist, title } = req.query;
  try {
    const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching lyrics:', error.message);
    if (error.response) {
        console.error('Response data:', error.response.data);
        res.status(error.response.status).json({
        error: error.response.data || 'Lyrics API error'
        });
    } else {
        res.status(500).json({ error: 'Unknown server error' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});