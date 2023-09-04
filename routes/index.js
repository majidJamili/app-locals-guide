// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Access the app.locals variable
  const { counter } = req.app.locals.data;
  res.render('index', { counter });

});

module.exports = router;