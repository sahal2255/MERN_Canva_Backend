const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const userRoute=require('./routes/userRoutes')

const app = express();
const PORT = process.env.PORT ;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',userRoute)

const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
    console.error('Error: MONGODB_URI is not defined in .env');
    process.exit(1);
}
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
