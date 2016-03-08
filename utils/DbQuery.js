'use strict';

var DbQuery = DbQuery || {};

module.exports = DbQuery = {

  /**
   * DbQuery.build() is a database connection string object builder
   *
   * @param {string} args
   * @param {string} pass
   * @param {string} domain
   * @param {string} port
   * @param {string} dbName
   * @param {string} dialect
   * @returns {string}
  */
  build : function (user, pass, domain, port, dbName, dialect) {
    return dialect +'://'+user+':'+pass+'@'+domain+':'+port+'/'+dbName;
  }

}