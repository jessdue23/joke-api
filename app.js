const express = require('express')
const app = express()

const port = 3000;


//joke array
jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "What did the snowlfake say to the road?",
        punchline: "Let's stick together"
    },
    {
        id: 4,
        joke: "What's a firefly's favorite dance?",
        punchline: "The glitterbug"
    },

    {
        id: 5,
        joke: "Where do roses sleep at night?",
        punchline: "In their flowerbed"
    }
]


app.use(express.json())
app.use(express.static('public'))

const path = require('path')
const root = path.join(__dirname, 'public')

app.use(express.static('public'))

//index file
app.get('/', (req, res) => {
    res.sendFile('index.html', {root})
})

//get random joke
app.get('/api/v1/random-joke', (req, res) => {
    const r = Math.floor(Math.random() * 4) + 1
    res.send(jokes[r])
})

app.listen(port, () => console.log(`listening on port: ${port}`))