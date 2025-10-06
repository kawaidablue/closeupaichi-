$(function () {
  $('.slider-wrap').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,     // 待ち時間ゼロ
    speed: 12000,         // 流れる速さ（長いほどゆっくり）
    cssEase: 'linear',    // 等速
    variableWidth: true,  // 幅はCSSで決める
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    touchMove: false,
    // 速度だけブレークポイントで微調整してもOK
    responsive: [
      { breakpoint: 1024, settings: { speed: 10000 } },
      { breakpoint: 640,  settings: { speed: 9000 } }
    ]
  });
});
