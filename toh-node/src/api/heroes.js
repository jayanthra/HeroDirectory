const express = require('express');
const axios = require('axios')
const router = express.Router();

const BASE_URL = process.env.BASE_URL

router.get('/search/:searchTerm', async (req, res, next) => {
  let searchTerm = req.params.searchTerm
  try {
    const { data } = await axios.get(`${BASE_URL}/search/${searchTerm}`)
    res.json(data)
  } catch (err) {
    next(err)
  }
});

router.get('/details/:id', async (req, res, next) => {
  let heroId = req.params.id
  try {
    const { data } = await axios.get(`${BASE_URL}/${heroId}`)
    res.json(data)
  } catch (err) {
    next(err)
  }
});

module.exports = router;
