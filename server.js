const express = require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const PORT = process.env.PORT

const app=express()
require('dotenv').config();
app.use(cors({
    origin:'localhosthttp://localhost:5173/',
    credentials:true
}))

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

app.listen(PORT,()=>{
    console.log('server running')
})