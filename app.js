// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(document).ready(function () {
//   jQueryプログラムの内容
// });

//省略形
// $(function(){
//   jQueryプログラムの内容
// });

// jQueryの基本書式
// $( セレクタ ).メソッド ( パラメータ );

//CSSスタイルをjquaryで変更するときはCSSメソッドを使う

//↓複数のプロパティを指定する場合は少し書き方が変わる
// $(function(){
//   $('.box1').css({
//     'background-color':'#0000FF',
//     'height':'100px'
//   });
// });

// $(function (){
//   $('.box1').slideDown(function (){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp();
//   });
// });


// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color':'#0000FF'});
// });

// $(function(){
//   $('.box1').hide();
// });

//$('.セレクタ名')。イベント名（function(){
  //イベント発生時に行われる処理
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
// });

// $(function(){
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

//↓マウスカーソルに合わせてCSSの追加解除をする設定
// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// });


// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

//↓簡略化
//ここでのthisはクリックされた要素を指す
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

$(function(){
   $('button').on('click', function(){
     $('ul').children().css('color', 'red');
   });
});