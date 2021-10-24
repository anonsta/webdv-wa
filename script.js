$(document).ready(function() {

	$.getJSON('https://api.npoint.io/588c784a618918a72553', function(json_object) {
		for (obj of json_object) {

			let div = $('<div class = "post1">');
			let upperdiv = $('<div class = "upper">');
			let middlediv = $('<div class = "inside">');
			let bottomdiv = $('<div class = "text">');
			let pdate = $('<p>').text(obj.time);
			let ptext = $('<p>').text(obj.body);
			let pfp = $('<img src="https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png" alt="user">');
			let image = document.createElement('img');
			if (obj.image !== null) {
				image.src = obj.image;
			}
			let likeimage = $('<img src="https://icon-library.com/images/like-button-icon/like-button-icon-3.jpg">');

			upperdiv.append(pfp);
			upperdiv.append(pdate);
			middlediv.append(image);
			bottomdiv.append(ptext);
			bottomdiv.append(likeimage);

			div.append(upperdiv);
			div.append(middlediv);
			div.append(bottomdiv);

			$('.posts').append(div);
		}
	});
})


	function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}