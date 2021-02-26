const data = [
    {
        id: 1,
        descricao: "L para todas as idades "
    },
    {
        id: 2,
        descricao: "10+ para maiores de 10 anos"
    },
    {
        id: 3,
        descricao: "12+ para maiores de 12 anos"
    },
    {
        id: 4,
        descricao: "14+ para maiores de 14 anos"
    },
    {
        id: 5,
        descricao: "16+ para maiores de 16 anos"
    },
    {
        id: 6,
        descricao: "18+ para maiores de 18 anos"
    }
]

const getById = (id) => {
    const resposta = data.find((item) => {
        return item.id == id
    });
    return resposta
}

const getAllData = () => {
    return data;
}

module.exports = {
    getClassIndById: getById,
    getAllClassInd: getAllData
}