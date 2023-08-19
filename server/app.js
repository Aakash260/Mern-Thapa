const express=require('express')
const app=express();
const mongoose=require('mongoose')
const DB=`mongodb+srv://akashnirwan26:skrschool26@cluster0.4lyuejn.mongodb.net/mernstack?retryWrites=true&w=majority`
mongoose.connect(DB).then(()=>{
    console.log('connected mongo')
}).catch((err)=>{
    console.log(err)
})
 const middleware=(req,res,next)=>{
    console.log('ok')
    next();
 }


app.get('/',(req,res)=>{
    res.send('Hello World from Home')
})
app.get('/about',middleware,(req,res)=>{
    res.send('Hello World from About Me')
})
app.get('/contact',(req,res)=>{
    res.send('Hello World from Contact')
})
app.get('/login',(req,res)=>{
    res.send('Hello World from Login')
})

app.listen(3000,(req,res)=>{
    console.log('server running')

})