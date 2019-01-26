const express = require('express');
var bodyParser = require("body-parser");




let app = express();


app.use(express.static('./build'))
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());



require('./configDb/db-config')
require('./routes/users-routes')(app);




module.exports = app;