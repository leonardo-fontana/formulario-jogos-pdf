const express = require('express')
const bodyParse = require('body-parser')

const formularioController = require('./controller/formulario_controller')
const indexController = require('./controller/index_controller')
const { userValidationRules, validate } = require('./validator.js')

const app = express()
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParse.urlencoded())

const port = process.env.PORT || 3001;

app.get('/', indexController.homeView);

app.get('/formulario', formularioController.get);

app.post('/formulario', userValidationRules(), validate, formularioController.post);

app.get('/contato', indexController.contatoView)
app.get('/sobre', indexController.sobreView)

app.listen(port, () => {
  console.log('Servidor rodando na porta ', +port)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
})