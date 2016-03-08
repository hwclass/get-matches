var CLI = CLI || {};

module.exports = CLI = {
	build : function (args) {
    var outputStr = '';
    for (var resultIndex = 0, len = args.length; resultIndex < len; resultIndex++) {
      outputStr += '- id: ' + args[resultIndex].id + ' - name: ' + args[resultIndex].name + ' - gender: ' + args[resultIndex].gender +' - preferences:' + args[resultIndex].preferences;
    }
    return outputStr;
  }
}