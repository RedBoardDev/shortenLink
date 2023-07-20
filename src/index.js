const express = require('express');
const app = express();

app.use(express.json());

const linkRoutes = require('./routes/link');
const redirectRoutes = require('./routes/redirect');

app.use('/link', linkRoutes);
app.use('/redirect', redirectRoutes);

app.get('/', (req, res) => {
    res.send('API online');
});

app.use((req, res) => {
    res.status(404).send('not found');
});

app.listen(4005, () => {
    console.log('Server online at the port 4005');
});
