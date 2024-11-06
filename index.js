// Imports
var express = require('express')
var ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')

// Create express app
const app = express()
const port = 8000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Templating Engine
app.use(expressLayouts)
app.set('view engine', 'ejs');

// Navigation
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

// Web page listening
app.listen(port, () => console.log(`App is listening on port ${port}!`))