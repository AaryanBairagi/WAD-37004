const express = require('express')

const server = express();
const port = 3000;

//serve the static files
server.use(express.static('public'))

server.listen(port , ()=>{
    console.log(`Server running at ${port}`)
})
