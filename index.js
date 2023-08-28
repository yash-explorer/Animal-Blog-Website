const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'easy.html'));
    res.status(200);
})
app.get('/:animal',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', req.params.animal));
    res.status(200);
})
app.listen(port,()=>{
    console.log(`Example app listerning at http://localhost:${port}`)
})