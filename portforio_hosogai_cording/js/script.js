
  (function(d) {
    var config = {
      kitId: 'vjt1xyl',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

  (function(d) {
    var config = {
      kitId: 'vjt1xyl',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

  // ヘッダー
  $(function () {
    var $header = $("#header");
    $(window).on("load scroll", function () {
      var value = $(this).scrollTop();
      if (value > 0) {
        $header.addClass("scroll");
      } else {
        $header.removeClass("scroll");
      }
    });
  });

  // works詳細ページ view all
const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// SP
const buttonOpen_sp1 = document.getElementById('modalOpen_sp1');
const modal_sp1 = document.getElementById('easyModal_sp1');
const buttonClose_sp1 = document.getElementsByClassName('modalClose_sp')[0];

// ボタンがクリックされた時
buttonOpen_sp1.addEventListener('click', modalOpen_sp1);
function modalOpen_sp1() {
  modal_sp1.style.display = 'block';
}

// バツ印がクリックされた時
buttonClose_sp1.addEventListener('click', modalClose_sp);
function modalClose_sp() {
  modal_sp1.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal_sp1.style.display = 'none';
  }
}

const buttonOpen_sp2 = document.getElementById('modalOpen_sp2');
const modal_sp2 = document.getElementById('easyModal_sp2');
const buttonClose_sp2 = document.getElementsByClassName('modalClose_sp')[0];

// ボタンがクリックされた時
buttonOpen_sp2.addEventListener('click', modalOpen_sp2);
function modalOpen_sp2() {
  modal_sp2.style.display = 'block';
}

// バツ印がクリックされた時
buttonClose_sp2.addEventListener('click', modalClose_sp);
function modalClose_sp() {
  modal_sp2.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal_sp2.style.display = 'none';
  }
}

// ページネーション
/* 
this javascript is only to change the "actpage" attribut on the .cdp div
*/

window.onload = function(){
  var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
  $('.cdp_i').on('click', function(){
    var go = $(this).attr('href').replace('#!', '');
    if (go === '+1') {
      paginationPage++;
    } else if (go === '-1') {
      paginationPage--;
    }else{
      paginationPage = parseInt(go, 10);
    }
    $('.cdp').attr('actpage', paginationPage);
  });
};

// ハンバーガーメニュー
$(function () {

  $('.sp_btn, .sp_nav li').on('click', function () {
      $('.sp_btn').toggleClass('open');
      $('.sp_nav').fadeToggle();
  });
});


/*
ローディングから画面遷移
================================================ */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  // ローディング中（グレースクリーン）
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中（薄緑スクリーン）
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );  

  // ローディング中テキスト
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8  //80%
      },
      {
        opacity: 0,
        offset: 1  //100%
      },
    ], 
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});
