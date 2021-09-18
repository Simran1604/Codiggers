const mongoose=require('mongoose')

const DB='mongodb+srv://sim:simiscool@cluster0.ijdma.mongodb.net/webdev?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlPaser:true,
    useCreateIndex: true,
    useUnifiedTopology :true,
    useFindAndModify : false
}).then(()=>{
    console.log('connection successful');
}).catch((e)=>console.log('problem'));
