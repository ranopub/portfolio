//window.alert($.fn.jquery);



$(function(){

	var baseColor = $('body').css('background-color');
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
				//タイルの縦横を設定
				$('.draw-tile').eq(i).css('width',drawTileSize);
				$('.draw-tile').eq(i).css('height',drawTileSize);

				//描画の基準点設定
				var drawOriginX = windowWidthCenter - (drawTileSize*drawTileColumn/2);
				var drawOriginY = windowHeightCenter - (drawTileSize*drawTileQty/drawTileColumn/2);

				//N列・行目のときNかけるタイル幅だけX・Y方向に移動
				var AlignColumn = (i%drawTileColumn)*drawTileSize;
				var AlignRow = Math.floor(i/drawTileColumn)*drawTileSize;

				//タイルパターン周期のうち何番目に当たるか
				var OrderInCycle = Math.floor(i/drawTileColumn)%drawTileCycle;
				//最上位ビットを取り出し、周期の前半・後半ですべて０・１のビットマスク作成
				var MaskFor2ndHalf = (((Math.floor(i/drawTileColumn))%drawTileCycle)>>(drawTileCycleBit-1))*(drawTileCycle-1);
				//XORで周期前半が１２３４〜、後半で〜４３２１とする
				var drawTileSlide = OrderInCycle ^ MaskFor2ndHalf;
				//描画
				$('.draw-tile').eq(i).css('transform','translate('+(drawOriginX+(AlignColumn)+ (drawTileSlide) *(drawTileXSlide*drawTileSlideIs)) 
					+  'px, '
					+	(drawOriginY + AlignRow	) 
					+ 'px)' );
				 

				// $('.draw-tile').eq(i).css('transform','translate('
				// 	+  
				// 	(
				// 		windowWidthCenter-(drawTileSize*drawTileColumn/2)
				// 		+						
				// 		(
				// 			(i%drawTileColumn
				// 			)*drawTileSize
				// 		) 
				// 		+ 
				// 		( 
				// 			(
				// 				(Math.floor
				// 					(i/drawTileColumn)
				// 				)%drawTileCycle
				// 			) 
				// 			^ 
				// 			(
				// 				(
				// 					(
				// 						(
				// 							Math.floor(i/drawTileColumn)
				// 						)%drawTileCycle
				// 					)>>(drawTileCycleBit-1)
				// 				)*(drawTileCycle-1)	
				// 			)
				// 		) *(drawTileXSlide*drawTileSlideIs)
				// 	) 
				// 	+  'px, '
				// 	+ 
				// 		( 
				// 		windowHeightCenter - drawTileSize*drawTileQty/drawTileColumn/2
				// 		+ Math.floor(i/drawTileColumn)*drawTileSize
				// 		) 
				// 	+ 'px)' );
				 
			}
		},

		interactive: function(){
			if(window.matchMedia("(min-width: 1000px)").matches){
				$('.tab-title').hover(
					function()
					{
						var i = $('.tab-title').index(this);
						$('.tab-title').eq(i).css('background-color',mainColor);
						$('.tab-content').css('display','none');
						$('.tab-title').eq(i).next('.tab-content').css('display','flex');
						drawTileSlideIs = 0;
						$.drawTileRender();
					},
					function()
					{
						var i = $('.tab-title').index(this);
						$('.tab-title').eq(i).css('background-color',baseColor);
						drawTileSlideIs = 1;
						$.drawTileRender();
					}	
				);
				
			}else{
				drawTileSize = 16;
				$('.tab-title').on({
					'touchstart':function(){
						var i = $('.tab-title').index(this);
						$('.tab-title').eq(i).css('background-color',mainColor);
						$('.tab-content').css('display','none');
						$('.tab-title').eq(i).next('.tab-content').css('display','flex');
					},
					'touchend':function(){
						var i = $('.tab-title').index(this);
						$('.tab-title').eq(i).css('background-color',baseColor);
					}
				})
				$('body').on({
					'touchstart':function(){
						drawTileSlideIs = 0;
						$.drawTileRender();
						
					},
					'touchend':function(){
						drawTileSlideIs = 1;
						$.drawTileRender();
					}
				})
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
	
	$.interactive();
	$.drawTileRender();
	
	$(window).resize(function(){
		$.interactive();
	});

});

