const express = require('express');
const app = express();

const routes = require('./routes');

// Use the routes in your server
app.use('/', routes);

const port = 3000; // You can use any port you prefer
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
