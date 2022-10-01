'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpotImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SpotImage.belongsTo(models.Spot,{foreignKey:"spotId"})
    }
  }
  SpotImage.init({
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    spotId: {type: DataTypes.INTEGER, onDelete:"CASCADE", references:{model:"Spots", key:"id"}},
    url: {type: DataTypes.STRING,},
    preview: {type: DataTypes.BOOLEAN},
  }, {
    sequelize,
    modelName: 'SpotImage',
  });
  return SpotImage;
};
