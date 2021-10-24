$(function(){
	$.get('data.json', function(json_object) {
	for (object of json_object) {
		if (object.image == null) {
			let div = $('<div class = noImagePost>')
			}
		else {
			let div = $('<div class = ImagePost>')
		}
		div += object.body
		div += $('</div>')
		}
	});
	
})
	