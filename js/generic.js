$(document).ready(function(){




	$("#logo").hover(
		function() {
			$(this).stop().animate({"opacity": "0.0"}, "slow");
		},
		function() {
			$(this).stop().animate({"opacity": "1.0"}, "slow");
		}
	);
	
	


	$( "#small-menu-button" ).click(function() {


		$( "nav.small" ).slideToggle(function() {

		}, function() {

		});


	});

});




