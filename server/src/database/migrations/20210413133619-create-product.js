'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activo: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
      publica: {
        type: Sequelize.INTEGER
      },
      costo: {
        type: Sequelize.FLOAT
      },
      descuento_suma: {
        type: Sequelize.STRING
      },
      codigo_fabricante: {
        type: Sequelize.INTEGER
      },
      codigo_fabrica: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      descripcion_adicional: {
        type: Sequelize.STRING
      },
      codigo_familia: {
        type: Sequelize.INTEGER
      },
      codigo_grupo: {
        type: Sequelize.INTEGER
      },
      codigo_marca: {
        type: Sequelize.INTEGER
      },
      codigo_categoria: {
        type: Sequelize.INTEGER
      },
      codigo_proveedor: {
        type: Sequelize.INTEGER
      },
      stock: {
        type: Sequelize.INTEGER
      },
      pais: {
        type: Sequelize.INTEGER
      },
      iva: {
        type: Sequelize.INTEGER
      },
      talle: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.INTEGER
      },
      foto: {
        type: Sequelize.STRING
      },
      codigo_barras: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.FLOAT
      },
      alto: {
        type: Sequelize.INTEGER
      },
      ancho: {
        type: Sequelize.INTEGER
      },
      largo: {
        type: Sequelize.INTEGER
      },
      producto: {
        type: Sequelize.STRING
      },
      equipamiento: {
        type: Sequelize.INTEGER
      },
      posicion: {
        type: Sequelize.INTEGER
      },
      alimentacion: {
        type: Sequelize.INTEGER
      },
      sku_wg: {
        type: Sequelize.STRING
      },
      proveedor_wg: {
        type: Sequelize.STRING
      },
      descripcion_wg: {
        type: Sequelize.STRING
      },
      marca_wg: {
        type: Sequelize.INTEGER
      },
      rubro_wg: {
        type: Sequelize.INTEGER
      },
      iva_wg: {
        type: Sequelize.INTEGER
      },
      precio_bruto_wg: {
        type: Sequelize.INTEGER
      },
      descuento_suma_wg: {
        type: Sequelize.STRING
      },
      stock_wg: {
        type: Sequelize.INTEGER
      },
      foto_wg: {
        type: Sequelize.STRING
      },
      codigo_barras_wg: {
        type: Sequelize.STRING
      },
      aplicaciones_wg: {
        type: Sequelize.STRING
      },
      equivalencias_wg: {
        type: Sequelize.STRING
      },
      filtro_lateral_wg: {
        type: Sequelize.STRING
      },
      observaciones_wg: {
        type: Sequelize.STRING
      },
      descripcion_breve: {
        type: Sequelize.STRING
      },
      estado_fotos: {
        type: Sequelize.STRING
      },
      descripcion_ampliada_articulo: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      },
      equivalencias: {
        type: Sequelize.STRING
      },
      estado_equivalencias: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};