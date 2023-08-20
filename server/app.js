
//initial code
const express=require('express')
const app=express();

//encrypt dotenv 
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const PORT=process.env.PORT


//db connection
require('./db/conn')

//middleware so post req can send json data
  app.use(express.json());

//create route
app.use(require('./router/auth'))

//middleware-example
 const middleware=(req,res,next)=>{
    console.log('ok')
    next();
 }

//routes
app.get('/',(req,res)=>{
    res.send('Hello World from Home ')
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

//listening route
app.listen(PORT,(req,res)=>{
    console.log('server running')

})