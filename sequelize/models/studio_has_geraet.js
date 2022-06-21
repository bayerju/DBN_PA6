const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StudioHasGeraet', {
    idStudio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'studio',
        key: 'idStudio'
      }
    },
    idGeraet: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'geraet',
        key: 'idGeraet'
      }
    },
    anzahlGeraet: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'studio_has_geraet',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idStudio" },
          { name: "idGeraet" },
        ]
      },
      {
        name: "fk_studio_has_gerät_gerät1_idx",
        using: "BTREE",
        fields: [
          { name: "idGeraet" },
        ]
      },
      {
        name: "fk_studio_has_gerät_studio1_idx",
        using: "BTREE",
        fields: [
          { name: "idStudio" },
        ]
      },
    ]
  });
};
