#!/usr/bin/env node

var Database = require('sequelize'),
	config = {
		db : {
			user : 'hwclass',
			pass : 'Qwe123!',
			domain : 'localhost',
			port : '5432',
			dbName : 'hwclass'
		}
	}

var db = new Database('postgres://'+config.db.user+':'+config.db.pass+'@'+config.db.domain+':'+config.db.port+'/'+config.db.dbName);

//create model
/*
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
    type     : Database.STRING,
    allowNull: false,
    get: function() {
      return JSON.parse(this.getDataValue('preferences'));
    }, 
    set: function(val) {
      return this.setDataValue('preferences', JSON.stringify(val));
    }
  }
});

Cleaner.sync({force: true}).then(function () {
  return Cleaner.create({ name : 'John Doe', country_code : 'nl', latitude : 43.5677754, longitude : 30.4423445, gender : 'M', preferences : "['fridge', 'ironing']"});
});
*/

/*
db.query('SELECT * FROM cleaners').then(function (result) {
  console.log(result[0]);
});
*/

/*
db.query('DROP TABLE cleaners').then(function (result) {
  console.log(result);
});
*/

//add dummy data
/*
Cleaner
  .create({ name : 'John Doe', country : 'nl', lalitute : 43.5677754, longitude : 30.4423445, gender : 'M', preferences : ['fridge', 'ironing']})
  .then(function(cleaner) {
    console.log({name : cleaner.get('name'), country : cleaner.get('country_code'), lalitute : cleaner.get('latitude'), longitude : cleaner.get('longitude'), gender : cleaner.get('gender'), preferences : cleaner.get('preferences')});
  });
*/
/*
Cleaner
  .create({ name : 'Fuzz Foo', country : 'de', lalitute : 44.56677, longitude : 43.67764, gender : 'F', preferences : ['fridge']})
  .then(function(cleaner) {
    console.log({name : cleaner.get('name'), country : cleaner.get('country_code'), lalitute : cleaner.get('latitude'), longitude : cleaner.get('longitude'), gender : cleaner.get('gender'), preferences : cleaner.get('preferences')});
  })

Cleaner
  .create({ name : 'Dark Wing Duck', country : 'au', lalitute : 55.35546, longitude : 45.667887, gender : 'F', preferences : ['fridge']})
  .then(function(cleaner) {
    console.log({name : cleaner.get('name'), country : cleaner.get('country_code'), lalitute : cleaner.get('latitude'), longitude : cleaner.get('longitude'), gender : cleaner.get('gender'), preferences : employee.get('preferences')});
  })
*/