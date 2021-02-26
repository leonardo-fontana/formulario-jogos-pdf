const fs = require('fs')
const ejs = require('ejs')
const html_to_pdf = require('html-pdf-node')
const generoJogoModel = require('../models/genero-jogo-models')
const classIndModel = require('../models/classificacao-indicativa-model')

const formularioGet = (req, res, next) => {

  //Classificacao indicativa view model
  const resultadoClassIndModel = classIndModel.getAllClassInd();
  const classIndViewModel = resultadoClassIndModel.map((item) => {
    return {
      value: item.id,
      label: item.descricao
    }
  });

  //Genero View Model
  const resultadoGeneroModel = generoJogoModel.getAllGeneros();
  const generoItemsViewModel = resultadoGeneroModel.map((item) => {
    return {
      value: item.id,
      label: `${item.id} - ${item.nome}`
    }
  });

  const getViewModel = {
    genero: generoItemsViewModel,
    classInd: classIndViewModel
  }

  res.render('formulario', getViewModel);

}  

const formularioPost = (req, res, next) => {

  const body = req.body;
  const classIndResultado = classIndModel.getClassIndById(body.classInd);

  //const generoResultado = generoJogoModel.getGeneroById(body.generoJogo)

  /*app.post('/formulario', [
      bodyValidate('nome').isEmpty()
    ], (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      };*/

  

  const viewModel = {
      nome: body.nome,
      desenvolvedora: body.desenvolvedora,
      estudio: body.estudio,
      descricao: body.descricao,
      classInd: classIndResultado.descricao,
      genero1: body.genero1,
      genero2: body.genero2,
      genero3: body.genero3,
      genero4: body.genero4
  }

  var pdf_html = fs.readFileSync('./views/dados-cadastro-jogo-PDF.ejs', 'utf8');
  var html_renderizado = ejs.render(pdf_html, viewModel);

  let file = { content: html_renderizado };
  let options = { format: 'A4', printBackground: true };

  html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
    console.log(body)
    res.contentType("application/pdf");
    res.send(pdfBuffer)
  });
}


module.exports = {
   get: formularioGet,
   post: formularioPost
}