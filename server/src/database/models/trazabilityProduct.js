"use strict";
module.exports = (sequelize, DataTypes) => {
    const alias = "TrazabilityProduct";
    const cols = {
        id_producto: DataTypes.INTEGER,
        accion: DataTypes.STRING,
        fecha: DataTypes.DATE,
        usuario: DataTypes.STRING,
    };
    const config = {
        tableName: "trazabilidadproductos",
        timestamps: false,
    };
    const TrazabilityProduct = sequelize.define(alias, cols, config);
    return TrazabilityProduct;
};
