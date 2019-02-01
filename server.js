const server = require('./app.js')

server.listen(process.env.PORT, ()=>{
    console.log('Server is running on port ' + 8000);
});