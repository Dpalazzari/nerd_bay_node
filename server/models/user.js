var bcrypt = require('bcrypt');

'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    username: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
  // , {
  //   freezeTableName: true
  //   instanceMethods: {
  //     generateHash: function(password) {
  //       return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
  //     },
  //     validPassword: function(password){
  //       return bcrypt.compareSync(password, this.password);
  //     },
  //   }
  // }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};