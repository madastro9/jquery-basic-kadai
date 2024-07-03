$(document).ready(function() {
  // ボタンクリック時のイベントハンドラを設定
  $('.btn').on('click', function() {
      // テキストボックスの値を設定
      $('.text-box').val('クリックしました！').show();
  });
});
