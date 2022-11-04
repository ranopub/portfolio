window.alert($.fn.jquery);

const cvs = document.getElementById( "canvas" );
    // キャンバスのコンテキストを取得
const context = cvs.getContext( "2d" );

// context.beginPath();   // パスの初期化
// context.fillStyle = "red";  // 塗りつぶしをセット
// context.strokeStyle = "blue"; // 線色をセット
// context.lineWidth = 3;   // 線幅をセット
// context.rect(10 , 10 , 300 , 100); // 矩形の座標をパスにセット
// context.fill();  // パスの情報をもとに塗りつぶし
// context.stroke();  // パスの情報をもとに線を描画

// context.clearRect( 0 , 0 , cvs.clientWidth , cvs.clientHeight);

cvs.addEventListener('mouseover', function() {
cvs.style.backgroundColor = 'orange';
cvs.style.width = '200vw';
});

const itm = document.getElementsByClassName( "menu-item" );
itm[3].addEventListener('mouseover', function() {
    itm[3].style.width = '100vw';
});