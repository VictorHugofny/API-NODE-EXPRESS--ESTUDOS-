const { Router } = require('express')
const express = require('express')
const routes = express.Router()

let database = [
    {'1':{nome:'cliente1',idade: '22'}},
    {'2':{nome:'hugo',idade: '21'}}
]

routes.get('/',(req,res) =>{ //buscar dados
    return res.json(database)
})

routes.post('/add', (req,res) =>{ //inserir dados
    const body = req.body

    if(!body)
    return res.status(400).end()

    database.push(body) //adicionar no banco de dados
    return res.json(body)
}) 

routes.delete('/:id',(req,res) =>{
    const id = req.params.id

    let newDB = database.filter(item =>{
        if(!item[id])
        return item
    })
    database = newDB
    return res.send(newDB)
})

module.exports = routes