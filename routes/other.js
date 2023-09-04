const express = require('express');
const router = express.Router();

router.post('/increment', (req, res) => {
  // Update the app.locals variable
  var counterUpdated = req.app.locals.data.counter++;
//   res.json({ message: 'Counter incremented!' });
  res.render('index', { counter: counterUpdated });

});

module.exports = router;