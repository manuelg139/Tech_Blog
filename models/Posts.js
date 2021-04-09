const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model{}

Posts.init(
   {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
      post_content:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_date:{
        type: DataTypes.DATE,
        allowNull: false,
      }, 
      users_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
   },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = Posts;