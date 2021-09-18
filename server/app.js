const mongoose= require('mongoose');
const express= require ('express');
const { resourceUsage } = require('process');
const app =express();
const port =process.env.PORT || 5500

require('./conn/mdb')  

app.use(express.json());

//linking routers
app.use(require('./routes/auth'));

app.get('/', (req, res) =>{
    res.send ('Working');
});

app.listen(port,()=>{
    console.log('Working');
})

app.get('/', (req, res) =>{
    res.send ('Working');
});