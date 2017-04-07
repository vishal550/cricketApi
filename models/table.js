var DBinstance = require('./index.js');
var Sequelize = DBinstance.Sequelize;
var moment = require('moment');
//parsing,manuplation anfd formatting date
moment().format();
//model defination
var model = {
    user: DBinstance.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        uName:{
		   type: Sequelize.STRING,
		},
		email:{
		   type: Sequelize.STRING,
		},
        password:{
		   type: Sequelize.INTEGER,
		}
    })
}
module.export= model;