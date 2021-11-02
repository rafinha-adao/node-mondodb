const Food = require("../model/food");

class FoodController {

    async index(req, res) {
        const data = await Food.find({});

        return res.json(data);
    }  

    async show(req, res) {
        try {
            const data = await Food.findById({ _id: req.params.id });
            res.send(data);

        } catch {
            res.status(404);
            res.send({ error: "Produto não existe" });
        }
    }

    async store(req, res) {
        const data = await Food.create(req.body);

        return res.json(data);
    }

    async update(req, res) {
        if (!req.body) {
            return res.status(400).send({
                message: "Erro na atualização"
            });
        }
        Food.findByIdAndUpdate({ _id: req.params.id }, req.body, { useFindAndModify: false })        
            .then(data => {
            if (!data) {
                res.status(404).send({
                message: `Não foi possível atualizar o produto com id=${id}`
                });
            } else res.send({ message: "Produto atualizado com sucesso" });
            })
            .catch(err => {
            res.status(500).send({
                message: `Não foi possível atualizar o produto com id=${id}`
            });
        });
    }

    async destroy(req, res) {
        try {
            await Food.deleteOne({ _id: req.params.id })
            res.status(204).send();

        } catch {
            res.status(404);
            res.send({ error: "Produto não existe" });
        }
    }
}

module.exports = new FoodController();