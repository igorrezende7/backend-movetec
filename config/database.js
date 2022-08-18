const mongoose = require('mongoose')
require('dotenv').config()
const Mongo_url = process.env.MONGO_URL
mongoose.Promise = global.Promise 

mongoose.connect(Mongo_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('conectado ao banco de dados')).catch((e)=>console.log('erro ao conectar banco de dados'))