const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

//configurando
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

let database = [
    {'1':{nome:'cliente1',idade: '22'}},
    {'2':{nome:'hugo',idade: '21'}}
]

app.get('/',(req,res) =>{ //buscar dados
    return res.json(database)
})

app.post('/add', (req,res) =>{ //inserir dados
    const body = req.body

    if(!body)
    return res.status(400).end()

    database.push(body) //adicionar no banco de dados
    return res.json(body)
}) 


//ligando o servidor
app.listen(21262,()=>{
    console.log('Express started at http://localhost:21262')
})


