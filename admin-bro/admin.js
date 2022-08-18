const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')

const User = require('../models/user')

AdminBro.registerAdapter(require('admin-bro-mongoose'))

const adminBro = new AdminBro({
    resources:[
        {resource: User, options:{properties:{
            _id:{isVisible:{list:false, filter:false, show:false, edit:false}},
            password:{isVisible:{list:false, filter:false, show:false, edit:true}}
        }}
    }
    ], 
    branding:{
        companyName:'Movetec',
    }
})

const router = AdminBroExpressjs.buildRouter(adminBro)

module.exports = router