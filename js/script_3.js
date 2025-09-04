// script_3.js
// DOMが準備されたらモーダルを初期化
$(document).ready(function() {

  // 1. infoモーダル
  $(".info").modaal({
    overlay_close: true,
    before_open: function() {
      $('html').css('overflow-y', 'hidden'); // 縦スクロールを非表示
    },
    after_close: function() {
      $('html').css('overflow-y', 'scroll'); // 縦スクロールを表示
    }
  });

  // 2. 確認モーダル
  $(".confirm").modaal({
    type: 'confirm',
    confirm_title: 'ログイン画面',
    confirm_button_text: 'ログイン',
    confirm_cancel_button_text: 'キャンセル',
    confirm_content: 'ログインが必要です。この画面はボタンを押さなければ閉じません。'
  });

  // 3. 画像モーダル
  $(".gallery").modaal({
    type: 'image',
    overlay_close: true,
    before_open: function() {
      $('html').css('overflow-y', 'hidden');
    },
    after_close: function() {
      $('html').css('overflow-y', 'scroll');
    }
  });

  // 4. 動画モーダル
  $(".video-open").modaal({
    type: 'video',
    overlay_close: true,
    background: '#28BFE7',
    overlay_opacity: 0.8,
    before_open: function() {
      $('html').css('overflow-y', 'hidden');
    },
    after_close: function() {
      $('html').css('overflow-y', 'scroll');
    }
  });

  // 5. iframeモーダル
  $(".iframe-open").modaal({
    type: 'iframe',
    width: 800,
    height: 800,
    overlay_close: true,
    before_open: function() {
      $('html').css('overflow-y', 'hidden');
    },
    after_close: function() {
      $('html').css('overflow-y', 'scroll');
    }
  });

});
