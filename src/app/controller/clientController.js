const Client = require("../model/client");

class ClientController {

    async index(req, res) {
        const data = await Client.find({});

        return res.json(data);
    }  

    async show(req, res) {
        const data = await Client.findById(req.params.id);

        return res.json(data);
    }

    async store(req, res) {
        const data = await Client.create(req.body);

        return res.json(data);
    }

    async update(req, res) {
        const data = await Client.updateOne(req.body);

        return res.json(data);
    }

    async destroy(req, res) {
        const data = await Client.remove({});

        return res.json(data);
    }
}

module.exports = new ClientController();