'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users_phone.init({
    phoneType: DataTypes.STRING,
    country: DataTypes.STRING,
    countryCode: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    isPrimary: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'users_phone',
  });
  return users_phone;
};