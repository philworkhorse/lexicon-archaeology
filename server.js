const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3470;

// Load the Gen 1002 snapshot
let snapshot;
try {
  snapshot = require('./data/snapshot.json');
} catch (e) {
  snapshot = null;
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/data', (req, res) => {
  if (!snapshot) return res.json({ error: 'No snapshot' });
  res.json(snapshot);
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Lexicon Archaeology on port ${PORT}`);
});
