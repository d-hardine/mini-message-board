const express = require('express')
const app = express()

app.use(express.static('public'))

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
    res.render('index', {text: 'world'})
})

app.listen(port)