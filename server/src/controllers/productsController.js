const { Product, TrazabilityProduct } = require("../database/models");

function generateTimestamps() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toISOString();
}

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
        const dataInject = {
            publica: 2,
            activo: 1,
            estado: "Importado por RY via XLS",
            codigo_fabricante: 551,
            pais: 40,
            iva: 41,
            estado_fotos: "Sin fotos",
            estado_equivalencias: "SKU pendientes de cargar",
        };
        const products = req.body.map((product) => {
            const finalData = { ...product, ...dataInject };
            return finalData;
        });
        try {
            const result = await Product.bulkCreate(products);
            const trazabilityProducts = await result.map((productCreated) => ({
                id_producto: productCreated.id,
                accion: "Creado",
                fecha: generateTimestamps(),
                usuario: "mativiscusso",
            }));
            await TrazabilityProduct.bulkCreate(trazabilityProducts);
            return res.status(201).send(result);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    bulkUpdate: (req, res) => {
        const products = req.body;
        products.forEach((product) => {
            Product.update(product, {
                where: { id: product.id },
            })
                .then((result) => {
                    if (!result) {
                        return res.status(401).send(result);
                    }
                    const trazabilityProducts = {
                        id_producto: product.id,
                        accion: "Modificado",
                        fecha: generateTimestamps(),
                        usuario: "mativiscusso",
                    };
                    TrazabilityProduct.update(trazabilityProducts, {
                        where: {
                            id: product.id,
                        },
                    })
                        .then((result) => {
                            return res.status(201).send(result);
                        })
                        .catch((err) => {
                            return res.status(500).send(err);
                        });
                })
                .catch((error) => {
                    return res.status(500).send(error);
                });
        });
    },
};
