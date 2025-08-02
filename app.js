const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

const port = 3000

app.set('view engine', 'ejs')

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "Shut the fuck up",
        user: "edge_troll69",
        added: new Date()
    }
];

app.get('/', (req, res) => {
    res.render('index', {messages: messages})
})

app.post('/', (req, res) => {
    messages.push({
        text: req.body.message,
        user: req.body.name,
        added: new Date()
    })
    res.redirect('/')
})


const newRouter = require('./routes/newRouter')
app.use('/new', newRouter)

app.listen(port)