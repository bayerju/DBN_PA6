const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Kunde', {
    idKunde: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    idAccount: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'account',
        key: 'idAccount'
      }
    },
    idVertrag: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'vertrag',
        key: 'idVertrag'
      }
    },
    idTrainingsplan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'trainingsplan',
        key: 'idTrainingsplan'
      }
    }
  }, {
    sequelize,
    tableName: 'kunde',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idKunde" },
        ]
      },
      {
        name: "fk_Kunde_Person1_idx",
        using: "BTREE",
        fields: [
          { name: "idAccount" },
        ]
      },
      {
        name: "fk_Kunde_Vertrag1_idx",
        using: "BTREE",
        fields: [
          { name: "idVertrag" },
        ]
      },
      {
        name: "fk_kunde_Trainingsplan1_idx",
        using: "BTREE",
        fields: [
          { name: "idTrainingsplan" },
        ]
      },
    ]
  });
};
