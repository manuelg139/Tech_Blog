const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model{}

Posts.init(
   {
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
      content:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_date:{
        type: DataTypes.DATE,
        allowNull: false,
      }, 
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
   },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Posts;