const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vertrag', {
    idVertrag: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    vertragsart: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mitgliedbeitrag: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true,
      comment: "Signed, da es zu Gutschriften kommen kann, die dann im System des Studios Negativ anfallen. \n\nAutor: Simon Gilles-Roth"
    }
  }, {
    sequelize,
    tableName: 'vertrag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idVertrag" },
        ]
      },
    ]
  });
};
