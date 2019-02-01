const server = require('./app.js')

server.listen(8000 || process.env.PORT, ()=>{
    console.log('Server is running on port ' + 8000);
});