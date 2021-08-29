const Food = require("../model/food");

class FoodController {

    async index(req, res) {
        const data = await Food.find({});

        return res.json(data);
    }  

    async show(req, res) {
        const data = await Food.findById(req.params.id);

        return res.json(data);
    }

    async store(req, res) {
        const data = await Food.create(req.body);

        return res.json(data);
    }

    async update(req, res) {
        const data = await Food.updateOne(req.body);

        return res.json(data);
    }

    async destroy(req, res) {
        const data = await Food.remove({});

        return res.json(data);
    }
}

module.exports = new FoodController();