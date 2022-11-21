//window.alert($.fn.jquery);

$(function(){

	$('h2').hover(
		function()
		{
			var i = $('h2').index(this);
			//$('h2').eq(i).css({ transform: "rotate(10deg)"});
			$('h2').eq(i).css('background-color','#004f4f');

			$('h2').eq(i).next('p').css('display','block');
		},
		function()
		{
			var i = $('h2').index(this);
			//$('h2').eq(i).css({ transform: "rotate(0deg)" });
			$('h2').eq(i).css('background-color','#bcff67');
			$('h2').eq(i).next('p').css('display','none');
		}	
	);

});