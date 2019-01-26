const server = require('./app.js')

server.listen(8000, ()=>{
    console.log('Server is running on port ' + 8000);
});