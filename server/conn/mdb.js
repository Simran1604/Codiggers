const mongoose=require('mongoose')

const DB='mongodb://localhost:5500/'

mongoose.connect(DB,{
    useNewUrlPaser:true,
    useCreateIndex: true,
    useUnifiedTopology :true,
    useFindAndModify : false
}).then(()=>{
    console.log('connection successful');
}).catch((e)=>console.log('problem'));
const middleware=(req, rws, next) =>{
    console.log('MiddleWare');
    next();
}