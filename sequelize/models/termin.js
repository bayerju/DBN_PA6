const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Termin', {
    idTermin: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    idMitarbeiter: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'mitarbeiter',
        key: 'idMitarbeiter'
      }
    },
    idKunde: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'kunde',
        key: 'idKunde'
      }
    },
    idStudio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    terminBeschreibung: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    datum: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'termin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTermin" },
        ]
      },
      {
        name: "fk_Termin_Mitarbeiter1_idx",
        using: "BTREE",
        fields: [
          { name: "idMitarbeiter" },
        ]
      },
      {
        name: "fk_Termin_Kunde1_idx",
        using: "BTREE",
        fields: [
          { name: "idKunde" },
        ]
      },
    ]
  });
};
