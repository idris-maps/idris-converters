exports.onDrop = function(e, callback) {
	e.preventDefault();
	var dt = e.dataTransfer;
	if(dt.items) {
		var item = dt.items[0]
		if(item.kind === 'file') {
			callback(item.getAsFile())
		}
	} else {
		callback(dt.files[0])
	}
}

exports.onDragover = function(e) {
	e.preventDefault()
}

exports.onDragend = function(e) {
	var dt = e.dataTransfer
	if(dt.items) { for(var i=0;i<dt.items.length;i++) { dt.items.remove(i) } }
	else { e.dataTransfer.clearData() }
}
