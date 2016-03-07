# get-matches
An experimental tool to manage Node.js scripts over Gulp

###Setup

####Install gulp
```javascript
npm install --save gulp -g
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

####Download postgres
[Link](http://www.postgresql.org/download/) or optionally [Link](http://postgresapp.com/)

####Create dummy db and entries
```javascript
gulp prepare-db
```

####Start searching
```javascript
gulp get-matches --country=nl --geo=52.3650172,4.8375675 --gender=F --preferences=fridge,ironing
```

