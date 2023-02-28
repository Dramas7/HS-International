$(function () {
  // 点击新闻/博客等连接，跳转至详情区
  $('[data-article]').click(function () {
    $(window).attr('location', 'news_detail.html');
  })

  // 点击内容区的顶部导航栏，刷新本页的新闻列表
  // 公司资讯
  $('.top-bar .consult button').click(function () {
    // 改变新闻列表头部标题的内容
    let text = $(this).siblings('.title').text();
    $('.info-list > .title').text(text);
  })
  // 行业动态
  $('.top-bar .industry button').click(function () {
    // 改变新闻列表头部标题的内容
    let text = $(this).siblings('.title').text();
    $('.info-list > .title').text(text);
  })
  // 博客转区
  $('.top-bar .blog button').click(function () {
    // 改变新闻列表头部标题的内容
    let text = $(this).siblings('.title').text();
    $('.info-list > .title').text(text);
  })
});