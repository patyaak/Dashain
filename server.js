const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Define the rewards and their probabilities
const rewards = [
  // Column 1
  { type: 'discount', amount: 100, probability: 0.50 },
  { type: 'discount', amount: 200, probability: 0.30 },
  { type: 'discount', amount: 500, probability: 0.20 },

  // Column 2
  { type: 'none', probability: 0.95 },
  { type: 'discount', amount: 500, probability: 0.02 },
  { type: 'discount', amount: 750, probability: 0.02 },
  { type: 'product', item: 'Promate Lima Earbuds', probability: 0.01 },

  // Column 3
  { type: 'none', probability: 0.995 },
  { type: 'voucher', amount: 5000, probability: 0.004 },
  { type: 'voucher', amount: 10000, probability: 0.0001 },
  { type: 'item', item: 'Honor 90', probability: 0.000025 },
  { type: 'item', item: 'PS5', probability: 0.000025 },
  { type: 'item', item: '55-inch Samsung QLED TV', probability: 0.000025 },
];

// Function to select a reward based on probabilities
function getReward(rewardSet) {
  const totalProbability = rewardSet.reduce((sum, reward) => sum + (reward.probability || 0), 0);
  const random = Math.random() * totalProbability;

  let cumulativeProbability = 0;
  for (const reward of rewardSet) {
    cumulativeProbability += reward.probability || 0;
    if (random <= cumulativeProbability) {
      return reward;
    }
  }

  return { type: 'none' }; // Fallback in case of an error
}

// Route to get a reward
app.get('/api/spin', (req, res) => {
  const column = parseInt(req.query.column, 10) || 0;
  let columnRewards = [];

  // Define rewards for each column
  if (column === 0) {
    columnRewards = rewards.slice(0, 3);
  } else if (column === 1) {
    columnRewards = rewards.slice(3, 7);
  } else if (column === 2) {
    columnRewards = rewards.slice(7);
  } else {
    return res.status(400).json({ error: 'Invalid column number' });
  }

  // Choose a reward from the selected column
  const reward = getReward(columnRewards);
  res.json({ reward });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
