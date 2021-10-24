$(document).ready(function() {

	$.get('https://api.npoint.io/1af4e09636416934aacb', function(json_object) {
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
