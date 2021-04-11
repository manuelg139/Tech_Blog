const { Model, DataTypes, EmptyResultError } = require('sequelize');
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
      users_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
    /*   posts_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '10', 
        references: {
          model: 'posts',
          key: 'id',
        },
      }, */
      comment_content:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'create',
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