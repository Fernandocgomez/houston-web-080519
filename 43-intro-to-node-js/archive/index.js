const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

// Another example of .use
// app.use((request, res, next) => {
//     request.some_arbitrary_value = "poop"
//     next()
// })
// app.get('/arbitrary', (request, response) => {
//     response.send(request.some_arbitrary_value)
// })

let flowers = [
    {
        id: 1,
        name: 'Sunflower',
        color: 'Yellow'
    },
    {
        id: 2,
        name: 'Hibiscus',
        color: 'red'
    }
]

app.get('/echo/:message', (request, response) => {
   response.send(request.params.message)
})

// index 
app.get('/flowers', (request, response) => {
    response.send(flowers)
})

// show
app.get('/flowers/:id', (request, response) => {
    let flower = flowers.find( flower => flower.id === parseInt(request.params.id))
    response.send(flower)
})

let idCounter = 2
app.post('/flowers', (request, response) => {
    let newFlower = { ...request.body, id: idCounter+=1 }
    flowers = [ ...flowers,  newFlower]
    response.send(newFlower)
})

app.listen(9000)
