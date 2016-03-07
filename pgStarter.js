#!/usr/bin/env node

var Database = require('sequelize'),
	config = {
		db : {
			user : '',
			pass : '',
			domain : '',
			port : 5432,
			dbName : ''
		}
	}

var db = new Database('postgres://'+config.db.user+':'+config.db.pass+'@'+config.db.domain+':'+config.db.port+'/'+config.db.dbName);

//create dummy database
var Cleaner = db.define('cleaner', {
  name:  {
    type     : Database.STRING,
    allowNull: false,
    get      : function()  {
      return this.getDataValue('name');
    }
  },
  country_code: {
    type     : Database.STRING,
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
    type     : Database.DOUBLE,
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
    type     : Database.DOUBLE,
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
    type     : Database.STRING,
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
    type     : Database.ENUM('windows', 'owen', 'laundry', 'fridge', 'ironing'),
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
  });

Cleaner
  .create({ name : 'Fuzz Foo', country : 'de', lalitute : 44.56677, longitude : 43.67764, gender : 'F', preferences : ['fridge']})
  .then(function(clieaner) {
    console.log({name : employee.get('name'), country : employee.get('country_code'), lalitute : employee.get('latitude'), longitude : employee.get('longitude'), gender : employee.get('gender'), preferences : employee.get('preferences')});
  })

Cleaner
  .create({ name : 'Dark Wing Duck', country : 'au', lalitute : 55.35546, longitude : 45.667887, gender : 'F', preferences : ['fridge']})
  .then(function(clieaner) {
    console.log({name : employee.get('name'), country : employee.get('country_code'), lalitute : employee.get('latitude'), longitude : employee.get('longitude'), gender : employee.get('gender'), preferences : employee.get('preferences')});
  })

//add dummy data