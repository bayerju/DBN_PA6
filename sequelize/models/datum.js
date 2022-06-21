const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Datum', {
    idDatum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    datum: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'datum',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idDatum" },
        ]
      },
    ]
  });
};
