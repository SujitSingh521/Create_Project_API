// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use('/api/users', userRoutes); // Use user routes

// Connect to MongoDB (update with your MongoDB URI)
mongoose.connect('your_mongo_db_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
