#!/usr/bin/env node

var Database = require('sequelize'),
	config = {
		db : {
			user : '',
			pass : '',
			domain : '',
			port : '',
			dbName : ''
		}
	}

var db = new Database('postgres://'+config.db.user+':'+config.db.pass+'@'+config.db.domain+':'+config.db.port+'/'+config.db.dbName);

//create dummy database
var Cleaner = db.define('cleaner', {
  name:  {
    type     : Sequelize.STRING,
    allowNull: false,
    get      : function()  {
      //var title = this.getDataValue('title');
      // 'this' allows you to access attributes of the instance
      return this.getDataValue('name');
    }
  },
  country_code: {
    type     : Sequelize.STRING,
    allowNull: false,
    get      : function () {
    	var country_code = this.getDataValue('country_code');
    	return country_code;
    },
    set      : function(val) {
      this.setDataValue('country_code', val);
    }
  },
  latitude: {
    type     : Sequelize.DOUBLE,
    allowNull: false,
    get      : function () {
    	var latitude = this.getDataValue('latitude');
    	return latitude;
    },
    set      : function(val) {
      this.setDataValue('latitude', val);
    }
  },
  longitude: {
    type     : Sequelize.DOUBLE,
    allowNull: false,
    get      : function () {
    	var longitude = this.getDataValue('longitude');
    	return longitude;
    },
    set      : function(val) {
      this.setDataValue('longitude', val);
    }
  },
  gender: {
    type     : Sequelize.STRING,
    allowNull: false,
    get      : function () {
    	var gender = this.getDataValue('gender');
    	return gender;
    },
    set      : function(val) {
      this.setDataValue('gender', val);
    }
  },
  preferences: {
    type     : Sequelize.ENUM,
    allowNull: false,
    get      : function () {
    	var preferences = this.getDataValue('preferences');
    	return preferences;
    },
    set      : function(val) {
      this.setDataValue('preferences', val);
    }
  }
});

Cleaner
  .create({ name : 'John Doe', country : 'nl', lalitute : 43.5677754, longitude : 30.4423445, gender : 'M', preferences : ['fridge', 'ironing']})
  .then(function(clieaner) {
    console.log({name : employee.get('name'), country : employee.get('country_code'), lalitute : employee.get('latitude'), longitude : employee.get('longitude'), gender : employee.get('gender'), preferences : employee.get('preferences')});
  })

//add dummy data