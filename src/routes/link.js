const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('get /');
});

router.post('/new', (req, res) => {
    try {
        const link = req.body.link;
        if (!link) {
            throw new Error('Error, link not found');
        }
        res.status(200).send({ link: 'link', expired: 5252985 }); // timestamp when redirection link is expired
    } catch (error) {
        res.status(500).send({ error: error.message });
        return;
    }
});

module.exports = router;
