#!/usr/bin/env node

var argv = require('yargs').argv,
    criterias = ['country', 'geo', 'gender', 'preferences'],
    Arguments = Arguments || {},
    Query = Query || {};

console.log('country: ' + argv.country + ' geo: ' + argv.geo + ' gender: ' + argv.gender + ' preferences: ' + argv.preferences);

ArgumentOptions.build = function (country, geo, gender, preferences) {
  return {
     country_code: country_code,
     latitude: geo.split(',')[0],
     longitude: geo.split(',')[1],
     gender: gender,
     preferences: preferences
   }
}

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
