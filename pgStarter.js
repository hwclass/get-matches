#!/usr/bin/env node

/*!
 * pgStarter.js.
 *
 * Copyright (c) 2016 Barış Güler
 * http://hwclass.in
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Launch  : March 2016
 * Version : 1.0.0
 * Released: March 8th, 2016
 *
 *
 * Prepares the current database storage to query
 */

var Database = require('sequelize'),
  _ = require('lodash'),
	config = require('./config/storage')

//create a database instance by connection
var db = new Database('postgres://'+config.user+':'+config.pass+'@'+config.domain+':'+config.port+'/'+config.dbName, {
  dialect: 'postgres'
});

//create data model
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
    get      : function () {
      var preferences = this.getDataValue('preferences');
      return preferences;
    },
    set      : function(val) {
      this.setDataValue('preferences', val);
    }
  }
});


//add a sample record into the storage
Cleaner.sync({force: true}).then(function () {
  return Cleaner.create({ name : 'Donald Duck', country_code : 'nl', latitude : 52.3650172, longitude : 4.8375675, gender : 'F', preferences : 'fridge'});
});

//get all rows from storage
/*
Cleaner.findAll({}).then(function (results) {
  console.dir(results);
}); 
*/

/*
db.query('SELECT * FROM cleaners').then(function (results) {
  console.log('results: ' + results[0]);
  if (_.isEmpty(results[0])) {
    console.log('No results found.')
  } else {
    console.log(results[0]);
  }
});
*/

//delete the table from the storage
/*
db.query('DROP TABLE cleaners').then(function (result) {
  console.log('Dropped table : cleaners');
});
*/

/*
Cleaner.sync({force: true}).then(function () {
  return Cleaner.create({ name : 'John Doe', country_code : 'nl', latitude : 43.5677754, longitude : 30.4423445, gender : 'M', preferences : ['fridge', 'owen']});
});
Cleaner.sync({force: true}).then(function () {
  return Cleaner.create({ name : 'Fuzz Foo', country_code : 'au', latitude : 43.5677754, longitude : 30.4423445, gender : 'M', preferences : ['fridge', 'owen']});
});
Cleaner.sync({force: true}).then(function () {
  return Cleaner.create({ name : 'Dark Wing Duck', country_code : 'de', latitude : 43.5677754, longitude : 30.4423445, gender : 'M', preferences : ['fridge', 'owen']});
});
*/

//add dummy data
/*
Cleaner
  .create({ name : 'John Doe', country : 'nl', lalitute : 43.5677754, longitude : 30.4423445, gender : 'M', preferences : ['fridge', 'ironing']})
  .then(function(cleaner) {
    console.log({name : cleaner.get('name'), country : cleaner.get('country_code'), lalitute : cleaner.get('latitude'), longitude : cleaner.get('longitude'), gender : cleaner.get('gender'), preferences : cleaner.get('preferences')});
  });

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