const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
// Middleware to serve static files (e.g., CSS, JavaScript) from a 'public' directory
app.use(express.static('public'));

// Middleware to parse JSON requests
app.use(express.json());

// Set a default value for app.locals variable
app.locals.data = { counter: 0 };

// Import and use route files
const indexRoute = require('./routes/index');
const otherRoute = require('./routes/other');

app.use('/', indexRoute);
app.use('/other', otherRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});