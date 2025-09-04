$(document).ready(function(){

  $(".info").modaal({
    overlay_close:true,
    before_open:function(){
      $('html').css('overflow-y','hidden');
    },
    after_close:function(){
      $('html').css('overflow-y','scroll');
    }
  });

  $(".confirm").modaal({
    type:'confirm',
    confirm_title: 'ログイン画面',
    confirm_button_text: 'ログイン',
    confirm_cancel_button_text: 'キャンセル',
    confirm_content: 'ログインが必要です。この画面はボタンを押さなければ閉じません。'
  });

  $(".gallery").modaal({
    type: 'image',
    overlay_close:true,
    before_open:function(){
      $('html').css('overflow-y','hidden');
    },
    after_close:function(){
      $('html').css('overflow-y','scroll');
    }
  });

  $(".video-open").modaal({
    type: 'video',
    overlay_close:true,
    background: '#28BFE7',
    overlay_opacity:0.8,
    before_open:function(){
      $('html').css('overflow-y','hidden');
    },
    after_close:function(){
      $('html').css('overflow-y','scroll');
    }
  });

  $(".iframe-open").modaal({
    type:'iframe',
    width: 800,
    height:800,
    overlay_close:true,
    before_open:function(){
      $('html').css('overflow-y','hidden');
    },
    after_close:function(){
      $('html').css('overflow-y','scroll');
    }
  });

});
