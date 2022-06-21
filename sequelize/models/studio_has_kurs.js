const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StudioHasKurs', {
    idStudio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'studio',
        key: 'idStudio'
      }
    },
    idKurs: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'kurs',
        key: 'idKurs'
      }
    },
    maxTeilnehmer: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true
    },
    istKursVoll: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'studio_has_kurs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idStudio" },
          { name: "idKurs" },
        ]
      },
      {
        name: "fk_studio_has_kurs_kurs1_idx",
        using: "BTREE",
        fields: [
          { name: "idKurs" },
        ]
      },
      {
        name: "fk_studio_has_kurs_studio1_idx",
        using: "BTREE",
        fields: [
          { name: "idStudio" },
        ]
      },
    ]
  });
};
