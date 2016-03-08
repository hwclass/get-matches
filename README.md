# get-matches
An experimental tool to manage Node.js scripts over Gulp

<img src="http://i63.tinypic.com/o05dgy.png" style="width: 100%;">

###Technical Spec
* [Node.js](www.nodejs.org) / as Javascript Hero
* [Postgresql](http://www.postgresql.org/) / as Storage Monster
* [Gulp](http://docs.sequelizejs.com/en/latest/) / as Task-Ready Commander
* [Sequelize](http://docs.sequelizejs.com/en/latest/) / as Storage ORM
* [gulp-exec](https://www.npmjs.com/package/gulp-exec) / as Command-Initializer for Gulp
* [yargs](https://www.npmjs.com/package/yargs) / as Argument-Carrier between Gulp and node scripts
* [lodash](https://lodash.com/) / as paranoid android

###Setup

####Install gulp
```javascript
npm install --save gulp -g
```
####Install gulp-exec
```javascript
npm install --save pg
npm install --save pg-hstore
```

####Install gulp-exec
```javascript
npm install --save gulp-exec
```

####Install yargs
```javascript
npm install --save yargs
```

####Install Sequelize
```javascript
npm install --save sequelize
npm install --save pg pg-hstore
```

or only write down the following ;)
```javascript
npm install
```

####Download Postgresql
[Link](http://www.postgresql.org/download/) or optionally [Link](http://postgresapp.com/)

###Usage

####Create dummy db and entries
```javascript
gulp prepare-db
```

####Start searching
```javascript
gulp get-matches --country=nl --geo=52.3650172,4.8375675 --gender=F --preferences=fridge,ironing
```

###Technical Story

* gulpfile.js is the wrapper for the commands to query the database.
* getMatches.js is the script that fetches data for the given criterias over gulp get-matches command with some flags like country and etc.
* The returning result is presented in the terminal screen like the sample picture above.
* utils directory contains builder methods to generate some useful things like clean parameter objects and storage queries.

###Possible improvements

* OR statement for preferences

[twitter](https://www.twitter.com/hwclass) / [blog](https://www.hwclass.in)


