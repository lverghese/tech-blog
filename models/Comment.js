const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creates Post model
class Comment extends Model {}

Comment.init(
    {
      // columns will go here
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment'
    }
  );
  
  module.exports = Comment;