const route = require('express').Router()

const path = require('path')

route.get('/',(req,res)=>res.sendFile(path.join(__dirname,'./../views/index.html')))

route.get('/add-dish',(req,res)=>res.sendFile(path.join(__dirname,'../views/form-dish.html')))

route.get('/delete',(req,res)=>res.sendFile(path.join(__dirname,'../views/delete.html')))

module.exports = route