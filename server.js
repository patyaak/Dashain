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

    const weights = [80, 1, 1, 1, 1, 1, 1];
    const totalWeight = weights.reduce((acc, weight) => acc + weight , 0);

    //generating random number from 0 and total wt
    const random = Math.random() * totalWeight;

    let cumulativeWeight = 0;
  let selectedDiscount;

  for (let i = 0; i < discounts.length; i++) {
    cumulativeWeight += weights[i];
    if (random <= cumulativeWeight) {
      selectedDiscount = discounts[i];
      break;
    }
  }

  res.json({ discount: selectedDiscount });

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
