$(document).ready(function() {

	$.get('https://api.npoint.io/588c784a618918a72553', function(json_object) {
		for (obj of json_object) {

			let div = $('<div class = "post1">');
			let upperdiv = $('<div class = "upper">');
			let middlediv = $('<div class = "inside">');
			let bottomdiv = $('<div class = "text">');
			let pdate = $('<p>').text(obj.year);
			let ptext = $('<p>').text(obj.body);

			upperdiv.append(pdate);
			bottomdiv.append(ptext);

			div.append(upperdiv);
			div.append(middlediv);
			div.append(bottomdiv);

			$('body').append(div);
		}
	});
})
