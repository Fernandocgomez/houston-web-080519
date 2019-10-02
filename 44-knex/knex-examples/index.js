
const databaseSettings = require('./knexfile.js').development
const knex = require('knex')(databaseSettings)
const sqlite3 = require('sqlite3')

const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser())

// post '/create-penguin', to: 'penguin#create'
app.post('/create-penguin', async (req, res) => {
    const penguinAttributes = req.body;

    // SQL: 
    // sqlite3.execute(`
    //     INSERT INTO penguin 
    //     (name, weight, isInLove)
    //     VALUES (
    //         ${penguinAttributes.name},
    //         ${penguinAttributes.weight},
    //         ${penguinAttributes.isInLove},
    //     )
    // `)

    // Rails:
    // Penguin.create({
    //   name: params[:name],
    //   weight: params[:weight], ...
    //})

    // Node: 
    await knex('penguin').insert(penguinAttributes)
})

app.get('/get-penguins', async (req, res) => {
    // knex('penguin').select()
    //     .then( penguins => {
    //         res.json(penguins)
    //     })

    // Rails:
    // Penguin.all

    let penguins = await knex('penguin').select()   
    res.json(penguins)
})

app.listen(3000)