const { error } = require('console');
const express=require('express');
const router=express.Router();

require('../conn/mdb');
const User=require('../model/userdata')

router.get('/',async (req, res)=>{
    res.send ("Router hello");
});

router.post('/signup.html',(req, res)=>{

    const {name, StudentEmail, studentID, password, repassword}= req.body;

    if(!name || !StudentEmail || !studentID || !password || !repassword){
        return res.status(422).json({error:"Fill the required details."});

    }

    const user=new User({name, StudentEmail, studentID, password, repassword});
    try{
        const userExists= User.findOne({StudentEmail:StudentEmail})
        if(userExists)
        return res.status(422).json({error:"Email already registered."});
        else
        if(password!=repassword)
        return res.status(422).json({error:"Passwords not matching."});         
        else
         user.save();
        
        res.status(201).json({message:"Registered successfully.Welcome on board!"});
        
    } catch(err){
        console.log(err); 
    }
});


//Login
router.post('/login', async(req, res)=>{
    try{
        const {StudentEmail,password}=req.body;

        if(!StudentEmail || !password)
        return res.status(400).json({error:"Fill the required details"});

        const userLogin= await User.findOne({StudentEmail:StudentEmail });

        if(userLogin!=null)
        {
            if(password==userLogin.password)
            res.json({message:"Signed-in successfully!"});
            else
            res.json({message:"Invalid credentials!"});            
        }
        else
        res.status(400).json({message:"Invalid credentials!"})

    }catch(error){
        console.log(error);
    }
})

module.exports=router;