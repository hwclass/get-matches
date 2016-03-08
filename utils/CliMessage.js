var CliMessage = CliMessage || {};

module.exports = CliMessage = {

	/**
   * CliMessage.build() is a message generator containing the returning result after querying the database
   *
   * @param {object} args
   * @returns {string}
  */
	build : function (args) {
    var outputStr = '';
    for (var resultIndex = 0, len = args.length; resultIndex < len; resultIndex++) {
      outputStr += '- id: ' + args[resultIndex].id + ' - name: ' + args[resultIndex].name + ' - gender: ' + args[resultIndex].gender +' - preferences:' + args[resultIndex].preferences;
    }
    return outputStr;
  }

}