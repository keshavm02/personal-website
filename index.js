const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/blog', (req, res) => res.render('pages/blog.ejs'))
  .get('/personalproj', (req, res) => res.render('pages/personalproj.ejs'))
  .get('/teamproj', (req, res) => res.render('pages/teamproj.ejs'))
  .get('/contact', (req, res) => res.render('pages/contact.ejs'))
  .get('/resume', (req, res) => res.render('pages/resume.ejs'))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
