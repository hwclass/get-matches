'use strict';

var CleanOptions = CleanOptions || {};

module.exports = CleanOptions = {

  /**
   * CleanOptions.build() is a clean and undefined-free-keys database query builder 
   *
   * @param {object} options
   * @returns {object}
  */
  build : function (options) {
    for (var idx in options) {
      if (options[idx] === null || options[idx] === undefined || options[idx] === 'undefined' || options[idx] === [ 'undefined' ]) {
        delete options[idx];
      }
    }
    return options;
  }

}