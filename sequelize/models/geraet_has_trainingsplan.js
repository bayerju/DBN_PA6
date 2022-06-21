const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GeraetHasTrainingsplan', {
    idGeraet: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'geraet',
        key: 'idGeraet'
      }
    },
    idTrainingsplan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'trainingsplan',
        key: 'idTrainingsplan'
      }
    }
  }, {
    sequelize,
    tableName: 'geraet_has_trainingsplan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idGeraet" },
          { name: "idTrainingsplan" },
        ]
      },
      {
        name: "fk_geraet_has_trainingsplan_trainingsplan1_idx",
        using: "BTREE",
        fields: [
          { name: "idTrainingsplan" },
        ]
      },
      {
        name: "fk_geraet_has_trainingsplan_geraet1_idx",
        using: "BTREE",
        fields: [
          { name: "idGeraet" },
        ]
      },
    ]
  });
};
