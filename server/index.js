const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/basic-auth', {
})

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
