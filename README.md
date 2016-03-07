# get-matches
An experimental tool to manage Node.js scripts over Gulp

###Setup

####Install gulp
* npm install --save gulp -g

####Install gulp-exec
* npm install --save gulp-exec

####Install yargs
* npm install --save yargs

####Install Sequelize
* npm install --save sequelize
* npm install --save pg pg-hstore

####Download postgres
[Link](<pg-link>) optionall) [Link](<pgadd-link>)

####Create dummy db and entries
```javascript
gulp prepare-db
```

####Start searching
```javascript
gulp get-matches --country=nl --geo=52.3650172,4.8375675 --gender=F --preferences=fridge,ironing
```

