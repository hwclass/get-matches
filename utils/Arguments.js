var Arguments = Arguments || {},
    _ = require('lodash');

module.exports = Arguments = {
  
  /**
   * Arguments.build() is a db-schema-ready object creator method
   *
   * @param {object} args
   * @returns {object}
  */
	build : function (args) {
    var builtArguments = {};
    for (var item in args) {
      console.dir(args[item]);
      if (args[item] !== 'undefined' && !_.isUndefined(args[item]) && !_.isNull(args[item]) && args[item] !== [ 'undefined' ] && !_.isEmpty(args[item]) && args[item].indexOf('undefined') !== 0) {
        try {
          
            builtArguments[item] = args[item]
          
        } catch (err) {
          console.error(err);
        }
      }
    } 
    return builtArguments;
  }

} 