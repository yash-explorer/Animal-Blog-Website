const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const path = require('path')
const Animal = require(path.join(__dirname, 'models', 'animals.js'));
const Specific = require(path.join(__dirname, 'models', 'specific.js'));

mongoose.connect('mongodb+srv://yash1:<password>@cluster0.txq9fum.mongodb.net/blog?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.set('view engine', 'ejs'); 
app.get('/',async(req,res)=>{
    try {
        const animals = await Animal.find();
        
        res.render(path.join(__dirname, 'public', 'easy.ejs'),{animals});
        res.status(200);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    
    
})


app.get('/animal/:id',async (req, res) => {
    try {
        // const title=req.query.title; 
        // console.log('recived Title',title)
        // const specific = await Specific.findOne({ title: title });
        // console.log('Query result:', specific);

        // if (!specific) {
        //     // Handle the case where no data is found for the given title
        //     return res.status(404).send('Specific data not found');
        // }

        let slug = req.params.id;
        const specific = await Specific.findById({_id : slug});

        res.render(path.join(__dirname, 'views', 'animal.ejs'), { specific });
        res.status(200);
        
    } catch (error) {
        
    }
    
});



app.listen(port,()=>{
    console.log(`Example app listerning at http://localhost:${port}`)
})
