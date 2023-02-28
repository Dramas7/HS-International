$(function () {
  $('.toggle-bar li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.company-profile .article').hide().eq($(this).index()).show();
  })
});