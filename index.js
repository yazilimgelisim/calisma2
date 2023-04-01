const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
require('dotenv').config()




app.use(express.static('public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')



app.get('/', (req, res)=>{
    res.render('site/index')
})
app.get('*', (req, res)=>{
    res.render('error/404')
})












app.listen(process.env.PORT, ()=>{
    console.log(`http://127.0.0.1:${process.env.PORT}/`)
})