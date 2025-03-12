const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./backend/routes/userRoutes');
const contactRoutes = require('./backend/routes/contactRoutes');

dotenv.config();
const app = express();


app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Rotes
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
