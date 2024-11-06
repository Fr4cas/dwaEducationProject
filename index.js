//Setup for express and ejs
var express = require('express')
var ejs = require('ejs')

//Create express app
const app = express()
const port = 8000

//Templating using ejs
app.set('view engine', 'ejs');

//Route handlers
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

//Web page listening
app.listen(port, () => console.log(`App is listening on port ${port}!`))