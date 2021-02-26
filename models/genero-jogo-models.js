const data = [
    {
        id: 1,
        nome: "Ação"
    },
    {
        id: 2,
        nome: "Aventura"
    },
    {
        id: 3,
        nome: "Terror"
    },
    {
        id: 4,
        nome: "Plataforma"
    },
    {
        id: 5,
        nome: "RPG"
    }
]

const getById = (id) => {
    const resposta = data.find((item) => {
        return item.id === id
    });

    console.log(resposta)
    return resposta
}

const getAllData = () => {
    return data;
}

module.exports = {
    getGeneroById: getById,
    getAllGeneros: getAllData
}