const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  console.log('microservice B hit')
  res.json({ message: 'ms B hit' });
})

app.get('/api/call-microservice-a', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/data');
    res.json({ message: `Microservice A says: ${response.data.message}` });
  } catch (error) {
    console.error('Error calling Microservice A:', error.message);
    res.status(500).json({ error: 'Failed to call Microservice A' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});
