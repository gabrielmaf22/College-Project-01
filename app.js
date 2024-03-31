const express = require('express');
const indexRoute = require('./routes/indexRoutes');
const port = 3000;

const app = express();

// Use Routes
app.use('/', indexRoute);

// Configure Server
app.listen(port, () => {
    console.log(`It's running at http://localhost:${port}`);
});
