const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Define the rewards and their probabilities
const categoryA = {
  column1: [
    { type: 'discount', amount: 100, probability: 0.10 , index: 0},
    { type: 'discount', amount: 200, probability: 0.15, index: 1},
    { type: 'discount', amount: 300, probability: 0.27, index: 2},
    { type: 'discount', amount: 500, probability: 0.45, index: 3},
    { type: 'discount', amount: 750, probability: 0.01 , index: 4},
    { type: 'discount', amount: 1000, probability: 0.02, index: 5},
  ],
  column2: [
    { type: 'none', probability: 0.90, index : 0},
    { type: 'product', item: 'Earbuds', probability: 0.02, index: 1 },
    { type: 'product', item: 'ChargingDockCable', probability: 0.02, index: 2 },
    { type: 'product', item: 'Powerbank', probability: 0.01 , index: 3},
    { type: 'product', item: 'Headphone', probability: 0.01 , index: 4},
    { type: 'product', item: 'Mouse', probability: 0.01 , index: 5},
    { type: 'product', item: 'Speaker', probability: 0.01 , index : 6},
    { type: 'product', item: 'ZeblazeWatch', probability: 0.01 , index: 7},
    { type: 'product', item: 'FitnessBand', probability: 0.01 , index: 8},
    { type: 'product', item: 'CMFSmartWatch', probability: 0.00 , index: 9},
    { type: 'product', item: 'SamsungPhone', probability: 0.00 , index: 10},
  ],
  column3: [
    { type: 'none', probability: 0.995, index: 0},
    { type: 'product', item: 'DjiDrone', probability: 0.00005, index: 1},
    { type: 'product', item: 'Laptop', probability: 0.00005, index: 2},
    { type: 'product', item: 'GoldCoin', probability: 0.00005, index: 3},
    { type: 'product', item: 'GamingPC', probability: 0.00005 , index: 4},
    { type: 'product', item: 'Honor90phone', probability: 0.00005 , index : 5},
    { type: 'product', item: 'SonyPS5', probability: 0.00005, index: 6},
    { type: 'product', item: 'iPhone16', probability: 0.00005 , index: 7},
    { type: 'product', item: 'Samsung4K55QLEDTV', probability: 0.00005 , index: 8},
    { type: 'product', item: 'Scooter', probability: 0.00005 , index: 9},
  ]
};

const categoryB = {
  column1: [
    { type: 'discount', amount: 100, probability: 0.00 , index: 0},
    { type: 'discount', amount: 200, probability: 0.05, index: 1},
    { type: 'discount', amount: 300, probability: 0.15, index: 2},
    { type: 'discount', amount: 500, probability: 0.45, index: 3},
    { type: 'discount', amount: 750, probability: 0.30, index: 4},
    { type: 'discount', amount: 1000, probability: 0.05, index: 5},

  ],
  column2: [
    { type: 'none', probability: 0.80, index : 0},
    { type: 'product', item: 'Earbuds', probability: 0.05, index: 1 },
    { type: 'product', item: 'ChargingDockCable', probability: 0.03, index: 2 },
    { type: 'product', item: 'Powerbank', probability: 0.02 , index: 3},
    { type: 'product', item: 'Headphone', probability: 0.02 , index: 4},
    { type: 'product', item: 'Mouse', probability: 0.02 , index: 5},
    { type: 'product', item: 'Speaker', probability: 0.01 , index : 6},
    { type: 'product', item: 'ZeblazeWatch', probability: 0.02 , index: 7},
    { type: 'product', item: 'FitnessBand', probability: 0.02 , index: 8},
    { type: 'product', item: 'CMFSmartWatch', probability: 0.00 , index: 9},
    { type: 'product', item: 'SamsungPhone', probability: 0.00 , index: 10},
  ],
  column3: [
    { type: 'none', probability: 0.99, index: 0},
    { type: 'product', item: 'DjiDrone', probability: 0.001, index: 1},
    { type: 'product', item: 'Laptop', probability: 0.001, index: 2},
    { type: 'product', item: 'GoldCoin', probability: 0.001, index: 3},
    { type: 'product', item: 'GamingPC', probability: 0.001 , index: 4},
    { type: 'product', item: 'Honor90phone', probability: 0.001 , index : 5},
    { type: 'product', item: 'SonyPS5', probability: 0.001, index: 6},
    { type: 'product', item: 'iPhone16', probability: 0.001 , index: 7},
    { type: 'product', item: 'Samsung4K55QLEDTV', probability: 0.001 , index: 8},
    { type: 'product', item: 'Scooter', probability: 0.001 , index: 9},
  ],

};

const categoryC = {
  column1: [
    { type: 'discount', amount: 100, probability: 0.00 , index: 0},
    { type: 'discount', amount: 200, probability: 0.00, index: 1},
    { type: 'discount', amount: 300, probability: 0.00, index: 2},
    { type: 'discount', amount: 500, probability: 0.50, index: 3},
    { type: 'discount', amount: 750, probability: 0.40, index: 4},
    { type: 'discount', amount: 1000, probability: 0.10, index: 5},
  ],
  column2: [
    { type: 'none', probability: 0.75, index : 0},
    { type: 'product', item: 'Earbuds', probability: 0.07, index: 1 },
    { type: 'product', item: 'ChargingDockCable', probability: 0.06, index: 2 },
    { type: 'product', item: 'Powerbank', probability: 0.02 , index: 3},
    { type: 'product', item: 'Headphone', probability: 0.02 , index: 4},
    { type: 'product', item: 'Mouse', probability: 0.02 , index: 5},
    { type: 'product', item: 'Speaker', probability: 0.02 , index : 6},
    { type: 'product', item: 'ZeblazeWatch', probability: 0.02 , index: 7},
    { type: 'product', item: 'FitnessBand', probability: 0.02 , index: 8},
    { type: 'product', item: 'CMFSmartWatch', probability: 0.00 , index: 9},
    { type: 'product', item: 'SamsungPhone', probability: 0.00 , index: 10},
  ],
  column3: [
    { type: 'none', probability: 0.98, index: 0},
    { type: 'product', item: 'DjiDrone', probability: 0.002, index: 1},
    { type: 'product', item: 'Laptop', probability: 0.002, index: 2},
    { type: 'product', item: 'GoldCoin', probability: 0.002, index: 3},
    { type: 'product', item: 'GamingPC', probability: 0.002 , index: 4},
    { type: 'product', item: 'Honor90phone', probability: 0.002 , index : 5},
    { type: 'product', item: 'SonyPS5', probability: 0.002, index: 6},
    { type: 'product', item: 'iPhone16', probability: 0.002 , index: 7},
    { type: 'product', item: 'Samsung4K55QLEDTV', probability: 0.002 , index: 8},
    { type: 'product', item: 'Scooter', probability: 0.002 , index: 9},
  ],

};
const usedRewards = {
  categoryA: { column3: new Set() },
  categoryB: { column3: new Set() },
  categoryC: { column3: new Set() }
};

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
  const category = req.query.category;
  const column = parseInt(req.query.column, 10) || 0;

  let rewards = [];
  let rewardKey;

  if (category === 'A') {
    rewardKey = 'categoryA';
  } else if (category === 'B') {
    rewardKey = 'categoryB';
  } else if (category === 'C') {
    rewardKey = 'categoryC';
  } else {
    return res.status(400).json({ error: 'Invalid category' });
  }

  if (column === 0) {
    rewards = Object.keys(categoryA).includes(`column${column}`) ? categoryA[`column${column}`] : [];
  } else if (column === 1) {
    rewards = Object.keys(categoryA).includes(`column${column}`) ? categoryA[`column${column}`] : [];
  } else if (column === 2) {
    rewards = Object.keys(categoryA).includes(`column${column}`) ? categoryA[`column${column}`].filter(reward => {
      if (reward.type === 'product') {
        return !usedRewards[rewardKey].column3.has(reward.item);
      }
      return true;
    }) : [];
  } else {
    return res.status(400).json({ error: 'Invalid column number' });
  }

  // Choose a reward from the selected column
  const reward = getReward(rewards);

  // If reward is from column 3 and is a product, mark it as used
  if (category === 'A' && column === 2 && reward.type === 'product') {
    usedRewards.categoryA.column3.add(reward.item);
  } else if (category === 'B' && column === 2 && reward.type === 'product') {
    usedRewards.categoryB.column3.add(reward.item);
  } else if (category === 'C' && column === 2 && reward.type === 'product') {
    usedRewards.categoryC.column3.add(reward.item);
  }

  res.json({ reward });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}