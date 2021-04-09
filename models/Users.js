const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
     // set up method to run on instance data (per user) to check password
     checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
      users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      github: {
        type: DataTypes.STRING,
        allowNull: true
    },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
    },
    {
     
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'users',
    }
  );
  
  module.exports = Users;