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
        try {
            const data = await Food.findOne({ _id: req.params.id });

            if (req.body.img) {
                data.img = req.body.img
            }
            if (req.body.name) {
                data.name = req.body.name
            }
            if (req.body.price) {
                data.price = req.body.price
            }
            if (req.body.amount) {
                data.amount = req.body.amount
            }

            await data.save();
            res.send(data);
            //return res.json(data);

        } catch {
            res.status(404);
            res.send({ error: "Produto não existe" });
        }
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