'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  review.init({
    employeeId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    feedback: DataTypes.TEXT,
    givenBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};