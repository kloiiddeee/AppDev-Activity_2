const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    const name = req.body.name;
    res.render('about', { name: name });
});

module.exports = router;
