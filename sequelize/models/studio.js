import Sequelize from 'sequelize';
export default function(sequelize, DataTypes) {
  return sequelize.define('Studio', {
    idStudio: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    oeffnungszeiten: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    eMailAdresse: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    telfonNummer: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    strasse: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    ort: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    plz: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'studio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idStudio" },
        ]
      },
    ]
  });
};
