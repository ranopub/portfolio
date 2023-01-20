//window.alert($.fn.jquery);

$(function(){

	var baseColor = '#ffffff';
	var mainColor = '#deffb3';
	var accentColor = $('body').css('color');

	// ブラウザウィンドウ中心位置

	// タイルDIV要素の数
	var drawTileQty = 1024;
	// X軸タイル数
	var drawTileColumn = 32;
	// タイルサイズ
	var drawTileSize = 16;
	// タイルパターン周期、（2進数桁数表記）
	var drawTileCycle = 8;
	var drawTileCycleBit = 3;
 	// タイルX軸方向ずらし(px)
	var drawTileXSlide = 2;

	for (let i = 0; i < drawTileQty; i++) {
		if(i%2){
			$('body').append($('<div class="draw-tile draw-tile-odd">'));
		}
		else{
			$('body').append($('<div class="draw-tile draw-tile-even">'));
		}
	}

	for (let i = 0; i < drawTileQty; i++) {
		$('.draw-tile').eq(i).css('transform','translate('
			+  
			(
				(
					(i%drawTileColumn
					)*drawTileSize
				) 
				+ 
				( 
					(
						(Math.floor
							(i/drawTileColumn)
						)%drawTileCycle
					) 
					^ 
					(
						(
							(
								(
									Math.floor(i/drawTileColumn)
								)%drawTileCycle
							)>>(drawTileCycleBit-1)
						)*(drawTileCycle-1)	
					)
				) *drawTileXSlide
			) 
			+  'px, '
			+ (Math.floor(i/drawTileColumn)*drawTileSize) 
			+ 'px)' );
		//01234567>01234321 000 001 010 011 100 101 110 111 > 000 001 010 011 100 011 010 001 
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