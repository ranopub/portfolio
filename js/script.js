//window.alert($.fn.jquery);



$(function(){

	var baseColor = '#ffffff';
	var mainColor = '#deffb3';
	var accentColor = $('body').css('color');

	// ブラウザウィンドウ中心位置
	var windowWidthCenter = $(window).width()/2;
	var windowHeightCenter = $(window).height()/2;
	// タイルDIV要素の数
	var drawTileQty = 256;
	// X軸タイル数
	var drawTileColumn = 16;
	// タイルサイズ
	var drawTileSize = 32;
	// タイルパターン周期、（2進数桁数表記）
	var drawTileCycle = 8;
	var drawTileCycleBit = 3;
 	// タイルX軸方向ずらし(px)
	var drawTileXSlide = 4;
	//ずらしオンフラグ
	var drawTileSlideIs = 1;

	$.extend({
		drawTileRender: function(){
			for (let i = 0; i < drawTileQty; i++) {
				$('.draw-tile').eq(i).css('width',drawTileSize);
				$('.draw-tile').eq(i).css('height',drawTileSize);
				$('.draw-tile').eq(i).css('transform','translate('
					+  
					(
						windowWidthCenter-(drawTileSize*drawTileColumn/2)
						+						
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
						) *(drawTileXSlide*drawTileSlideIs)
					) 
					+  'px, '
					+ 
						( 
						windowHeightCenter - drawTileSize*drawTileQty/drawTileColumn/2
						+ Math.floor(i/drawTileColumn)*drawTileSize
						) 
					+ 'px)' );
				 
			}
		}
	})

	for (let i = 0; i < drawTileQty; i++) {
		if(i%2){
			$('body').append($('<div class="draw-tile draw-tile-odd">'));
		}
		else{
			$('body').append($('<div class="draw-tile draw-tile-even">'));
		}
	}

	$.drawTileRender();
	
	$('.tab-title').hover(
		function()
		{
			var i = $('.tab-title').index(this);
			
			$('.tab-title').eq(i).css('background-color',baseColor);
			$('.tab-content').css('display','none');
			$('.tab-title').eq(i).next('.tab-content').css('display','flex');
			drawTileSlideIs = 0;
			$.drawTileRender();
		},
		function()
		{
			var i = $('.tab-title').index(this);
			$('.tab-title').eq(i).css('background-color',mainColor);
			drawTileSlideIs = 1;
			$.drawTileRender();
		}	
	);

});

