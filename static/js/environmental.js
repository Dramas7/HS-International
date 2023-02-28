$(function () {
  // 点击查看详情按钮均跳转至新闻/博客的详情页
  $('[data-article').click(function () {
    $(window).attr('location', 'news_detail.html');
  })
});