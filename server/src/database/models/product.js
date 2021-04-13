"use strict";

module.exports = (sequelize, DataTypes) => {
    const alias = "Product";
    const cols = {
        activo: DataTypes.INTEGER,
        estado: DataTypes.STRING,
        publica: DataTypes.INTEGER,
        costo: DataTypes.FLOAT,
        descuento_suma: DataTypes.STRING,
        codigo_fabricante: DataTypes.INTEGER,
        codigo_fabrica: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        descripcion_adicional: DataTypes.STRING,
        codigo_familia: DataTypes.INTEGER,
        codigo_grupo: DataTypes.INTEGER,
        codigo_marca: DataTypes.INTEGER,
        codigo_categoria: DataTypes.INTEGER,
        codigo_proveedor: DataTypes.INTEGER,
        stock: DataTypes.INTEGER,
        pais: DataTypes.INTEGER,
        iva: DataTypes.INTEGER,
        talle: DataTypes.INTEGER,
        color: DataTypes.INTEGER,
        foto: DataTypes.STRING,
        codigo_barras: DataTypes.STRING,
        peso: DataTypes.FLOAT,
        alto: DataTypes.INTEGER,
        ancho: DataTypes.INTEGER,
        largo: DataTypes.INTEGER,
        producto: DataTypes.STRING,
        equipamiento: DataTypes.INTEGER,
        posicion: DataTypes.INTEGER,
        alimentacion: DataTypes.INTEGER,
        sku_wg: DataTypes.STRING,
        proveedor_wg: DataTypes.STRING,
        descripcion_wg: DataTypes.STRING,
        marca_wg: DataTypes.INTEGER,
        rubro_wg: DataTypes.INTEGER,
        iva_wg: DataTypes.INTEGER,
        precio_bruto_wg: DataTypes.INTEGER,
        descuento_suma_wg: DataTypes.STRING,
        stock_wg: DataTypes.INTEGER,
        foto_wg: DataTypes.STRING,
        codigo_barras_wg: DataTypes.STRING,
        aplicaciones_wg: DataTypes.STRING,
        equivalencias_wg: DataTypes.STRING,
        filtro_lateral_wg: DataTypes.STRING,
        observaciones_wg: DataTypes.STRING,
        descripcion_breve: DataTypes.STRING,
        estado_fotos: DataTypes.STRING,
        descripcion_ampliada_articulo: DataTypes.STRING,
        observaciones: DataTypes.STRING,
        equivalencias: DataTypes.STRING,
        estado_equivalencias: DataTypes.STRING,
    };
    const config = {
        tableName: "productos",
        timestamps: false,
    };
    const Product = sequelize.define(alias, cols, config);

    return Product;
};
