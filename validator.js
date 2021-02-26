const { check, validationResult } = require('express-validator')
const userValidationRules = () => {
  return [
    //Os campos precisam estar preenchidos
    check('nome').not().isEmpty().withMessage("Campo vazio. Por favor preencher com o campo."),
    check('desenvolvedora').not().isEmpty().withMessage("Campo vazio. Por favor preencher com o campo."),
    check('estudio').not().isEmpty().withMessage("Campo vazio. Por favor preencher com o campo."),
    check('descricao').not().isEmpty().withMessage("Campo vazio. Por favor preencher o campo."),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
    userValidationRules,
    validate,
}