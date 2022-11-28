//window.alert($.fn.jquery);

$(function(){

	// $('body').append(
	for (let i = 0; i < 256; i++) {
		$('body').append($('<div class="draw-tile">'));
	}
	

	$('.tab-title').hover(
		function()
		{
			var i = $('.tab-title').index(this);
			
			$('.tab-title').eq(i).css('background-color','#004f4f');
			$('.tab-content').css('display','none');
			$('.tab-title').eq(i).next('.tab-content').css('display','flex');
		},
		function()
		{
			var i = $('.tab-title').index(this);
			$('.tab-title').eq(i).css('background-color','#bcff67');

		}	
	);

});