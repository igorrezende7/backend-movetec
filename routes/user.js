const express = require('express')
const router = express.Router()
const jwt = require ('jsonwebtoken');
const User = require('../models/user')
require('dotenv').config();
const secret = process.env.JWT_TOKEN
router.get('/', async(req, res)=>{
    try {
        let user = await User.find()
        res.json(user)
    } catch (error) {
        console.log('error')
    }
})

router.post('/', async(req, res)=>{
    const {name, password} = req.body

    try {
        let user = await User.findOne({name});
       if(!user)
            res.status(401).json({error:'usuario ou senha invalidos'})
        else{
            if(password != user.password)
                res.status(401).json({error:'senha invalida'})
            else{
                const token = jwt.sign({name}, secret, {expiresIn:'10d'})
                res.json({user:user, token:token})
            }    
        }    
        
    } catch (error) {
        console.log('erro ao postar usuario')
    }

})

module.exports = router