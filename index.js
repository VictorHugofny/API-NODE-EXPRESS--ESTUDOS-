const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./config/routes')

const app = express()

//configurando
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(routes)


//ligando o servidor
app.listen(21262,()=>{
    console.log('Express started at http://localhost:21262')
}) //


