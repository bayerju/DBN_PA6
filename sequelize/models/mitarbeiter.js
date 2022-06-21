const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Mitarbeiter', {
    idMitarbeiter: {
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
    steuerNummer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gehalt: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    aktiv: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mitarbeiter',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMitarbeiter" },
        ]
      },
      {
        name: "fk_Mitarbeiter_Person1_idx",
        using: "BTREE",
        fields: [
          { name: "idAccount" },
        ]
      },
    ]
  });
};
