const express = require('express')
const mainRoutes = require('./routes/main')
const app = express()

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 

app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(mainRoutes)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)