const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StudioHasKursHasDatum', {
    idStudio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'studio_has_kurs',
        key: 'idStudio'
      }
    },
    idKurs: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'studio_has_kurs',
        key: 'idKurs'
      }
    },
    idDatum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'datum',
        key: 'idDatum'
      }
    }
  }, {
    sequelize,
    tableName: 'studio_has_kurs_has_datum',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idStudio" },
          { name: "idKurs" },
          { name: "idDatum" },
        ]
      },
      {
        name: "fk_studio_has_kurs_has_datum_datum1_idx",
        using: "BTREE",
        fields: [
          { name: "idDatum" },
        ]
      },
      {
        name: "fk_studio_has_kurs_has_datum_studio_has_kurs1_idx",
        using: "BTREE",
        fields: [
          { name: "idStudio" },
          { name: "idKurs" },
        ]
      },
    ]
  });
};
