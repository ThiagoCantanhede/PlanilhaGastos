
const express = require('express')
const port = process.env.PORT || 3000
require('./db/conexaoBD')
const contaRouter = require('./routes/contas_a_pagar')
const usuariosRouter = require('./routes/usuariosRota')


const app = express()

app.use(function (req, res, next) {

    // Define os sites com permissão. ‘*’ para todos
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Métodos Request permitidos
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Cabeçalhos Request permitidos
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


app.use(express.json())
app.use(contaRouter)
app.use(usuariosRouter)


app.listen(port, () => {
    console.log(`Servidor no ar na porta ${port}`)
})