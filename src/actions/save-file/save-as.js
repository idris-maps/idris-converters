var saveAs = require('file-saver').saveAs

exports.json = function(name, json) {
	var blob = new Blob([JSON.stringify(json)], {type: "text/plain;charset=utf-8"})
	saveAs(blob, name + '.json')
}

exports.sql = function(name, string) {
	var blob = new Blob([string], {type: "text/plain;charset=utf-8"})
	saveAs(blob, name + '.sql')
}
