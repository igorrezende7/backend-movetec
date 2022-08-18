require('dotenv').config();

const secret = process.env.JWT_TOKEN;

const jwt = require('jsonwebtoken')

const User = require('../models/user')

const WithAuth = (req, res, next) =>{
    const token = rew.headers['x-token'];
    if(!token)
        res.status(401).json({error:'no token provided'})
    else{
        jwt.verify(token, secret, (err, decode)=>{
            if(err)
            res.status(401).json({error:'token invalid'})
            else{
                req.name = decoded.name;
                User.findOne({name: decoded.name})
                .then(user=>{
                    req.user = user;
                    next();
                })
                .catch(err=>{
                    res.status(401).json({error:err})

                })
            }

        })
    }    
}

module.exports = WithAuth;