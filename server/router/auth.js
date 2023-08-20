const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World from Home router')
})
require('../db/conn')
const User = require('../models/userSchema')

//post data in User promise
// router.post('/register', (req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body;

//     //verification
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: 'PLZ FILL ALL FIELD' })
//     }
//     User.findOne({ email: email })
//         .then((alreadyexist) => {
//             if (alreadyexist) {
//                 return res.status(422).json({ error: 'ALREADY EXIST' })
//             }

//             //create Entry document 
//             const user = new User({ name, email, phone, work, password, cpassword })

//             //save to mongo
//             user.save().then(() => {
//                 return res.status(201).json({ success: 'DATA ADDED' })
//             }).catch((err) => {
//                 return res.status(500).json({ FAILED: 'FAILED TO ADD' })
//             })
//         } 

//         ).catch((err)=>{
//             console.log(err)
//         })

// })




//post data using await
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    //verify
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: 'PLZ FILL ALL FIELD' })
    }
    try {
        const isExist = await User.findOne({ email: email })
        if (isExist) {
            return res.status(422).json({ error: 'ALREADY EXIST' })
        }
        const user = new User({ name, email, phone, work, password, cpassword })
       
        await user.save();

        return res.status(201).json({ success: 'DATA ADDED' })
    } catch (err) {
        console.log(err)
    }

})

router.post('/signin',async(req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.send('filled')
    }
    try {
        const isExist = await User.findOne({ email: email})
       
        
        if (!isExist) {
            return res.status(422).json({ error: 'NOT EXIST' })
        }
        
        return res.status(422).json({ success: 'sucessfully Login' })
    } catch (err) {
        console.log(err)
    }

})


module.exports = router