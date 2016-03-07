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

#!/usr/bin/env node

var argv = require('yargs').argv,
    criterias = ['country', 'geo', 'gender', 'preferences'],
    ArgumentOptions = ArgumentOptions || {},
    Arguments = Arguments || {},
    Query = Query || {};

//console.log('country: ' + argv.country + ' geo: ' + argv.geo + ' gender: ' + argv.gender + ' preferences: ' + argv.preferences);

/**
 * ArgumentOptions.build() is an options creator with coming arguments
 *
 * @param {string} country
 * @param {array} geo
 * @param {string} gender
 * @param {array} preferences
 * @returns {object}
*/
ArgumentOptions.build = function (country, geo, gender, preferences) {
  return {
     country_code: country_code,
     latitude: geo.split(',')[0],
     longitude: geo.split(',')[1],
     gender: gender,
     preferences: preferences
   }
}

/**
 * Arguments.build() is a db-schema-ready object creator method
 *
 * @param {object} args
 * @returns {object}
*/
Arguments.build = function (args) {
  return {
     id: args.id,
     name: args.name,
     country_code: args.country_code,
     latitude: args.latitude,
     longitude: args.longitude,
     gender: args.gender,
     preferences: args.preferences
   }
}

/**
 * Query.build() is a communicator for the database to query it
 *
 * @param {object} args
 * @param {function} cb
 * @returns {array} result
*/
Query.build = function (args, cb) {
  //make the query for db and get result
  cb(result);
}

//usage
/*
var args = Arguments.build({country_code : argv.country, geo : argv.geo, gender : argv.gender, preferences : argv.preferences});
Query.build(args, function (data) {
   var result = data;
});

//or

Query.build(Arguments.build(ArgumentOptions.build(argv.country, argv.geo, argv.gender, argv.preferences)), function (data) {
   var result = data; 
});
*/

//gulp get-matches --country=nl --geo=52.3650172,4.8375675 --gender=F --preferences=fridge,ironing
