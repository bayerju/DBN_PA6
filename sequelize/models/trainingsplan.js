const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Trainingsplan', {
    idTrainingsplan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    beschreibung: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'Beschreibung'
    }
  }, {
    sequelize,
    tableName: 'trainingsplan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTrainingsplan" },
        ]
      },
    ]
  });
};
