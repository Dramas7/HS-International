$(function () {
  // 光标移入最后一楼的图片缓慢显示文字
  $('div.floor-4th > div.pic-area.grid-12-col > div').hover(function () {
    $(this).children('div.cover').fadeIn();
  }, function () {
    $(this).children('div.cover').fadeOut();
  })
});