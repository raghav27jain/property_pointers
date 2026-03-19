// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
// const path = require('path');
// const express = require('express');
// const blogRoutes = require('./routes/blogRoutes');
// const authRoutes = require('./routes/authRoutes');


// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('API running');
// });

// app.use('/api/blogs', blogRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// const PORT = process.env.PORT || 5000;

// console.log('MONGO_URI value:', process.env.MONGO_URI);

// mongoose
//   .connect(process.env.MONGO_URI, { dbName: 'propertypointers' })
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error('Mongo error:', err));


// server/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// server uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
                          
app.get('/', (req, res) => {
  res.send('API running');
});

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, { dbName: 'real_estate_app' })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Mongo error:', err));
