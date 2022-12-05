//window.alert($.fn.jquery);

$(function(){

	var baseColor = '#ffffff';
	var mainColor = '#deffb3';

	var drawTileQty = 512;

	for (let i = 0; i < drawTileQty; i++) {
		$('body').append($('<div class="draw-tile">'));
	}
	for (let i = 0; i < drawTileQty; i++) {
		$('.draw-tile').eq(i).css('transform','translate(' + ( (i*10)%160 + ((Math.floor(i/16)%4)*2) ) + 'px, ' + (Math.floor(i/16)*5) + 'px)');
	}
	
	$('.tab-title').hover(
		function()
		{
			var i = $('.tab-title').index(this);
			
			$('.tab-title').eq(i).css('background-color',baseColor);
			$('.tab-content').css('display','none');
			$('.tab-title').eq(i).next('.tab-content').css('display','flex');
		},
		function()
		{
			var i = $('.tab-title').index(this);
			$('.tab-title').eq(i).css('background-color',mainColor);

		}	
	);

});