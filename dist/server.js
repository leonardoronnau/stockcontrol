"use strict";
const express = require('express');
const dotenv = require('dotenv');
const mainRoutes = require('./controllers/app.ts');
dotenv.config(); // inicia a variavel do .env
const server = express();
server.use(mainRoutes);
server.use(express.json());
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`server na porta ${PORT}`);
});
