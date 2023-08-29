const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const path = require('path')
const Animal = require(path.join(__dirname, 'models', 'animals.js'));


mongoose.connect('mongodb+srv://yash1:yash1@cluster0.txq9fum.mongodb.net/blog?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.set('view engine', 'ejs'); 
app.get('/',async(req,res)=>{
    try {
        const animals = await Animal.find();
        console.log(animals)
        res.render(path.join(__dirname, 'public', 'easy.ejs'),{animals});
        res.status(200);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    
    
})
app.get('/:animal',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', req.params.animal));
    res.status(200);
})
app.listen(port,()=>{
    console.log(`Example app listerning at http://localhost:${port}`)
})