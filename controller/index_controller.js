const homeView = (req, res, next) => {
    res.render('home');
}
const contatoView = (req, res, next) => {
    res.render('contato');
}
const sobreView = (req, res, next) => {
    res.render('sobre');
}

module.exports = {
    homeView: homeView,
    contatoView: contatoView,
    sobreView: sobreView
}