const { Product } = require("../database/models");
module.exports = {
    listAll: async (req, res) => {
        try {
            const products = await Product.findAll({
                limit: 10,
                order: "DESC",
            });
            return res.status(200).send(products);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    bulkImport: async (req, res) => {
        try {
            const result = await Product.bulkCreate(req.body);
            return res.status(201).send(result);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
};
