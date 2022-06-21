const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Geraet', {
    idGeraet: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    wartungsIntervall: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    positionStudio: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nameGeraet: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'geraet',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idGeraet" },
        ]
      },
    ]
  });
};
