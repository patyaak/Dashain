const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const discounts = [0, 5, 10, 15, 20, 25, 30];

// Route to get a discount
app.get('/api/spin', (req, res) => {
  const discount = discounts[Math.floor(Math.random() * discounts.length)];
  res.json({ discount });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
