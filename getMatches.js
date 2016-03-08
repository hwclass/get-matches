#!/usr/bin/env node

/*!
 * getMatches.js.
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
 * Manages the tasks as creating a dummy db and querying it over get-matches method
 */

var Database = require('sequelize'),
    argv = require('yargs').argv,
    criterias = ['country', 'geo', 'gender', 'preferences'],
    ArgumentOptions = ArgumentOptions || {},
    Arguments = require('./utils/Arguments'),
    CliMessage = require('./utils/CliMessage'),
    CleanOptions = require('./utils/CleanOptions'),
    _ = require('lodash'),
    colors = require('colors/safe'),
    config = require('./config/storage'),
    DbQuery = require('./utils/DbQuery');

//create a database instance by connection
var db = new Database(DbQuery.build(config.user, config.pass, config.domain, config.port, config.dbName, config.dialect), {
  dialect: config.dialect
});

/**
 * Cleaner : Object Relational Mapping wrapper for 'cleaners' table
 *
 * @noparam
 * @noreturn
*/
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

//generated the refined parameters for our select query
builtArguments = Arguments.build(CleanOptions.build({
  country_code : argv.country, 
  latitude : (!_.isUndefined(argv.geo.split(',')[0])?argv.geo.split(',')[0]:undefined),
  longitude : (!_.isUndefined(argv.geo.split(',')[0])?argv.geo.split(',')[1]:undefined),
  gender : argv.gender,
  preferences : argv.preferences
}));

//get all the data you need from cleaners table
Cleaner.findAll({
  where: builtArguments
}).then(function (results) {
  if (_.isEmpty(results)) {
    console.log(colors.underline.red('\nNo results found.'));
  } else {
    console.log('\n' + CliMessage.build(results));
  }
});
