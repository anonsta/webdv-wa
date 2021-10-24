$(document).ready(function() {

	$.get('https://www.npoint.io/docs/588c784a618918a72553', function(json_object) {
		for (obj of json_object) {

			let div = $('<div class = "post1">');
			let upperdiv = $('<div class = "upper">');
			let middlediv = $('<div class = "middle">');
			let bottomdiv = $('<div class = "bottom">');
			let pdate = $('<p>').text(obj.year);
			let ptext = $('<p>').text(obj.body);

			upperdiv.append(pdate);
			middlediv.append(ptext);

			div.append(upperdiv);
			div.append(middlediv);
			div.append(bottomdiv);

			$('body').append(div);
		}
	});
})
