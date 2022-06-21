const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Account', {
    idAccount: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    idStudio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'studio',
        key: 'idStudio'
      }
    },
    vorname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nachname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    eMailAdresse: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "e_mail_adresse_UNIQUE"
    },
    mobilNummer: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    passwort: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    strasse: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ort: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    plz: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'account',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAccount" },
        ]
      },
      {
        name: "e_mail_adresse_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eMailAdresse" },
        ]
      },
      {
        name: "fk_account_studio1_idx",
        using: "BTREE",
        fields: [
          { name: "idStudio" },
        ]
      },
    ]
  });
};
