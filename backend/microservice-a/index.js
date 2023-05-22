const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/data', (req, res) => {
    console.log('microservice A hit')
    res.json({ message: 'Hello from Microservice A' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});
