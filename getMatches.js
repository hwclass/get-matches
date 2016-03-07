#!/usr/bin/env node

var argv = require('yargs').argv;

var criterias = ['country', 'geo', 'gender', 'preferences'];

console.log('country: ' + argv.country);
console.log('geo: ' + argv.geo);
console.log('gender: ' + argv.gender);
console.log('preferences: ' + argv.preferences);

//--country=nl --geo=52.3650172,4.8375675 --gender=F --preferences=fridge,ironing
