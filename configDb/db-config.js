let mongoose = require('mongoose');

let db_url = 'mongodb://zainkhan:z6060750@ds219055.mlab.com:19055/users';
mongoose.connect(db_url, { useNewUrlParser: true })

let db =mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });