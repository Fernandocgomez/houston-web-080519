const knex = require('knex')(require('./knexfile.js').development)
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http); // <-- Web Socket Server

// .on  like addEventListener
// .emit triggers an event

io.on('connect', socket => {
    console.log('NEW CLIENT CONNECTED')
    socket.on('get-reviews', async () => {
        let reviews = await knex('reviews').select()
        socket.emit('reviews', reviews) // <-- `reviews` is the payload
    })

    socket.on('create-review', async newReview => {
        await knex('reviews').insert(newReview)
        let reviews = await knex('reviews').select()
        io.emit('reviews', reviews)
    })
})


const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser())


http.listen(3001)