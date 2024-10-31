const express = require('express')
const dotenv = require('dotenv')


dotenv.config() // inicia a variavel do .env

const server = express() 



const PORT = process.env.PORT || 5000

server.listen(PORT, ()=>{
    console.log(`server na porta ${PORT}`);
    
})