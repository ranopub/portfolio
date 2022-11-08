window.alert($.fn.jquery);

const cvs = document.getElementById( "canvas" );
    // キャンバスのコンテキストを取得
const context = cvs.getContext( "2d" );

context.beginPath();   // パスの初期化
context.fillStyle = "red";  // 塗りつぶしをセット
context.strokeStyle = "blue"; // 線色をセット
context.lineWidth = 3;   // 線幅をセット
context.rect(0 , 0 , 300 , 300); // 矩形の座標をパスにセット
context.fill();  // パスの情報をもとに塗りつぶし
context.stroke();  // パスの情報をもとに線を描画

// context.clearRect( 0 , 0 , cvs.clientWidth , cvs.clientHeight);

// cvs.addEventListener('mouseover', function() {
// cvs.style.backgroundColor = 'orange';
// cvs.style.width = '100vw';
// });

// const itm = document.getElementsByClassName( "menu-item" );
// itm[3].addEventListener('mouseover', function() {
//     itm[3].style.width = '100vw';
// });

$(function(){

	$('.menu-item').hover(
		function(){
			var i = $('.menu-item').index(this);
			$('.menu-item').eq(i).css('width','100vw');
		},
		function(){
			var i = $('.menu-item').index(this);
			$('.menu-item').eq(i).css('width','30vw');
		}	
	);


	$('.item-canvas').hover(
		function(){

			var i = $('.item-canvas').index(this);
			var cnt = $('.item-canvas').eq(i).getContext( "2d" );
			$('.item-canvas').eq(i).css('left','0%');
			$('.item-canvas').eq(i).css('width','100%');
			cnt.fillStyle = "red";
			cnt.fill();
			
		},
		function(){
			var i = $('.item-canvas').index(this);
			$('.item-canvas').eq(i).css('left','70%');
			$('.item-canvas').eq(i).css('width','30%');
			$('.item-canvas').eq(i).getContext( "2d" ).fillStyle = "blue";
			$('.item-canvas').eq(i).getContext( "2d" ).fill();
		}	
	);
});