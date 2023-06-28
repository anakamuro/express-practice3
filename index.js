const path = require('path')
const express = require('express');
const app = express();
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
         res.render('home')
 })

 app.get('/r/:subreddit', (req, res) => {
   const {subreddit} = req.params
   const data = redditData[subreddit]
   if(data){
    res.render('subreddit', {...data})
   } else {
    res.render('notfound', { subreddit})
   }
})

 app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { num})
})

app.get('/cats', (req, res) => {
  const cats = ['tama', 'tora', 'kuro', 'momo', 'jiji']
  res.render('cats', { cats})
})


// app.use((req, res) => {
//     console.log('I received the request')
//     res.send('<h1>The first webpage</h1>')
// })

// app.get('/cats', (req, res) => {
//     res.send('Nyaaa')
// })

// app.post('/cats', (req, res) => {
//     res.send('/post request came to cats')
// })

// app.get('/dogs', (req, res) => {
//     res.send('wan wan')
// })
// app.get('/', (req, res) => {
//     res.send('This is home page')
// })

// app.get('/search', (req, res) => {
//   const {q} = req.query
//   if(!q) {
//     res.send('there is no search result')
//   } else {
//     res.send(`<h1>${q}'s serach result</h1>`)
//   }
// })

// app.get('*', (req, res) => {
//     res.send('I do not know your pass')
// })

app.listen(3000, () => {
  console.log('port 3000 waiting')
})