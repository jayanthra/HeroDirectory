const express = require('express');

const emojis = require('./heroes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'use /hero'
  });
});

router.use('/hero', emojis);

module.exports = router;
