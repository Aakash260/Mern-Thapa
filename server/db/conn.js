
const mongoose=require('mongoose')
const DB=process.env.DATABASE

mongoose.connect(DB).then(()=>{
    console.log('connected mongo')
}).catch((err)=>{
    console.log(err)
})