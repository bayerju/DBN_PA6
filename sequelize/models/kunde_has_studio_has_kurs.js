const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KundeHasStudioHasKurs', {
    idKunde: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'kunde',
        key: 'idKunde'
      }
    },
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
    }
  }, {
    sequelize,
    tableName: 'kunde_has_studio_has_kurs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idKunde" },
          { name: "idStudio" },
          { name: "idKurs" },
        ]
      },
      {
        name: "fk_kunde_has_studio_has_kurs_studio_has_kurs1_idx",
        using: "BTREE",
        fields: [
          { name: "idStudio" },
          { name: "idKurs" },
        ]
      },
      {
        name: "fk_kunde_has_studio_has_kurs_kunde1_idx",
        using: "BTREE",
        fields: [
          { name: "idKunde" },
        ]
      },
    ]
  });
};
