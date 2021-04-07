const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model{}

Comments.init(
   {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      content:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      blog_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'posts',
          key: 'posts_id',
        },
      },
   },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;