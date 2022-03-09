const express = require('express');
const app = express();
// Middleware
app.use(express.json({limit: '4gb'})); 
// Routes
require('./routes')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))