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
      comment_content:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      posts_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'posts',
          key: 'id',
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