const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')


require('./models/User');

// const authRoutes = require('./routes/authRoutes') check underneath it is used and called the method directly
// const passportConfig = require('./services/passport') because we are not really using it we can condence it 
require('./services/passport');

mongoose.connect(keys.mongoURI)

const app = express();
require('./routes/authRoutes')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT);

