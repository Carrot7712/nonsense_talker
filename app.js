//include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateNonsense = require('./generate_nonsense')
const app = express()
const port = 3000

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//use static files
app.use(express.static('public'))
//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))
//starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`)
})

//setting routes
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const sentence = generateNonsense(req.body)
  //想保存checked的狀態 (助教..我還看不懂helper怎麼用><似乎用了一個純手工硬幹的方式..能否指點一下優化的方向？感謝><)
  const options = req.body
  const engineer = function () {
    if (options.profession === 'engineer') return options.profession
  }
  const designer = function () {
    if (options.profession === 'designer') return options.profession
  }
  const entrepreneur = function () {
    if (options.profession === 'entrepreneur') return options.profession
  }
  res.render('index', { sentence, options, engineer, designer, entrepreneur })
})

console.log('done')