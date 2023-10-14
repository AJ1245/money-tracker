const express = require('express');
const cors=require('cors');
require('dotenv').config();
const Transaction=require('./models/Transaction.js');
const { default: mongoose } = require('mongoose');
const app=express();


app.use(cors());
app.use(express.json());
app.get('/api/test',(req,res)=>{
    res.json('test okay');

});

app.post('/api/transaction',async (req,res)=>{
    MONGO_URL="mongodb+srv://money:qwerty123@cluster0.cgsc7xu.mongodb.net/?retryWrites=true&w=majority";    
    await mongoose.connect(MONGO_URL);
    const {name,description,datetime,price}=req.body;
    const transaction = await Transaction.create({name,description,datetime,price});    
    res.json(transaction);

});

app.get('/api/transactions',async (req,res)=>{
    MONGO_URL="mongodb+srv://money:qwerty123@cluster0.cgsc7xu.mongodb.net/?retryWrites=true&w=majority";    
    await mongoose.connect(MONGO_URL);

    const transactions = await Transaction.find();
    res.json(transactions);

});

app.listen(4040,()=>{
    console.log('server is running on port 4040');
});