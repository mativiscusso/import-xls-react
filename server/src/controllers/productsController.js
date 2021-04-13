const { Product } = require("../database/models");
module.exports = {
    listAll: async (req, res) => {
        const products = await Product.findAll({ limit: 10 });
        return res.send(products);
    },
    bulkImport: async (req, res) => {
        const param = {};
        const result = await Product.bulkCreate(param);
        res.send(result);
    },
};
