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

$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});


// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color':'#0000FF'});
// });

// $(function(){
//   $('.box1').hide();
// });
