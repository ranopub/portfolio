window.alert($.fn.jquery);

// // // キャンバスのコンテキストを取得
// const context = document.getElementById( "canvas" ).getContext( "2d" );

// context.beginPath();   // パスの初期化
// context.fillStyle = "red";  // 塗りつぶしをセット
// context.strokeStyle = "blue"; // 線色をセット
// context.lineWidth = 3;   // 線幅をセット
// context.rect(0 , 0 , 300 , 300); // 矩形の座標をパスにセット
// context.fill();  // パスの情報をもとに塗りつぶし
// context.stroke();  // パスの情報をもとに線を描画

$(function(){

	$('.item').hover(
		function()
		{
			var i = $('.item').index(this);
			$('.item').eq(i).css({ transform: "rotate(280deg)"});
			$('.item').eq(i).css('background-color','#bcff67');
		},
		function()
		{
			var i = $('.item').index(this);
			$('.item').eq(i).css({ transform: "rotate(0deg)" });
			$('.item').eq(i).css('background-color','#004f4f');
		}	
	);

	
	// console.log($.type($('item-canvas').eq(1)));

	// $('.item-canvas').hover(
	// 	function(){

	// 		var i = $('.item-canvas').index(this);

	// 		$('.item-canvas').eq(i).css('left','0vw');
	// 		$('.item-canvas').eq(i).css('width','100vw');
	// 		// var cnt = $('.item-canvas').eq(i).getContext( "2d" );
	// 		$('.item-canvas').eq(i).getContext( "2d" ).beginPath();   // パスの初期化
	// 		$('.item-canvas').eq(i).getContext( "2d" ).fillStyle = "red";  // 塗りつぶしをセット
	// 		$('.item-canvas').eq(i).getContext( "2d" ).strokeStyle = "blue"; // 線色をセット
	// 		$('.item-canvas').eq(i).getContext( "2d" ).lineWidth = 3;
	// 		$('.item-canvas').eq(i).getContext( "2d" ).rect(0 , 0 , 300 , 300);
	// 		$('.item-canvas').eq(i).getContext( "2d" ).fillStyle = "red";
	// 		$('.item-canvas').eq(i).getContext( "2d" ).fill();
			
	// 	},
	// 	function(){
	// 		var i = $('.item-canvas').index(this);
	// 		$('.item-canvas').eq(i).css('left','70%');
	// 		$('.item-canvas').eq(i).css('width','30%');
	// 		// $('.item-canvas').eq(i).getContext( "2d" ).fillStyle = "blue";
	// 		// $('.item-canvas').eq(i).getContext( "2d" ).fill();
	// 	}	
	// );

});