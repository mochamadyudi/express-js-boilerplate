'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    salt: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    isConfirm: DataTypes.BOOLEAN,
    isDeleted: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};