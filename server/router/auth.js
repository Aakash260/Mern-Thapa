const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World from Home router')
})
 require('../db/conn')
const User = require('../models/userSchema')
// router.post('/register',(req,res)=>{
//     console.log(req.body)
//     res.json({message:req.body})
// })

//post data in User
router.post('/register', (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    //verification
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: 'PLZ FILL ALL FIELD' })
    }
    User.findOne({ email: email })
        .then((alreadyexist) => {
            if (alreadyexist) {
                return res.status(422).json({ error: 'ALREADY EXIST' })
            }

            //create Entry document 
            const user = new User({ name, email, phone, work, password, cpassword })
          
            //save to mongo
            user.save().then(() => {
                return res.status(201).json({ success: 'DATA ADDED' })
            }).catch((err) => {
                return res.status(500).json({ FAILED: 'FAILED TO ADD' })
            })
        } 

        ).catch((err)=>{
            console.log(err)
        })

})


module.exports = router