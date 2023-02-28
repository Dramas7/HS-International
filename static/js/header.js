$(function () {
  /******************* 导航区 start *****************/
  // 页面刷新时，判断页面位置，让对应的导航按钮样式改变
  let { pathname } = location;
  console.log($('.nav > ul > li > a'))
  switch (pathname) {
    case '/html/store.html':
      $('[data-store]').addClass('active');
      break;
    case '/html/store_detail.html':
      $('[data-store]').addClass('active');
      break;
    case '/html/partner.html':
      $('[data-partner').addClass('active');
      break;
    case '/html/environmental.html':
      $('[data-environmental]').addClass('active');
      break;
    case '/html/news.html':
      $('[data-news]').addClass('active');
      break;
    case '/html/news_detail.html':
      $('[data-news]').addClass('active');
      break;
    case '/html/about.html':
      $('[data-about]').addClass('active');
      break;
    case '/html/contact.html':
      $('[data-contact]').addClass('active');
      break;
    case '/html/database.html':
      $('[data-database]').addClass('active');
      break;
    case '/html/home.html':
      $('[data-home]').addClass('active');
      break;
    case '/html/barter.html':
      $('[data-barter]').addClass('active');
      break;
    case '/html/cash.html':
      $('[data-cash]').addClass('active');
      break;
  }

  // 为导航链接添加类名，避免类名undefined，影响后续操作
  $('.operate-column a').addClass('link');
  // 为导航栏绑定点击事件
  $('.operate-column a').on('click', function (e) {
    // 判断是否已选中
    if (!$(this).attr('class').includes('active')) {
      // 设置跳转规则
      switch (Object.keys(this.dataset)[0]) {
        case 'home':
          $(window).attr('location', 'home.html');
          break;
        case 'store':
          $(window).attr('location', 'store.html');
          break;
        case 'partner':
          $(window).attr('location', 'partner.html');
          break;
        case 'environmental':
          $(window).attr('location', 'environmental.html');
          break;
        case 'news':
          $(window).attr('location', 'news.html');
          break;
        case 'about':
          $(window).attr('location', 'about.html');
          break;
        case 'contact':
          $(window).attr('location', 'contact.html');
          break;
        case 'database':
          $(window).attr('location', 'database.html');
          break;
      }
    }
  })

  // 点击“其他”时，展开下拉列表
  $('.header .unfold').on('click', function () {
    $('.unfold-list').slideToggle()
  })

  // 设置菜单栏
  $('.header .menu .icon').on('click', function () {
    // 点击菜单图标时，缓慢弹出菜单列表
    $('.header .menu .list').slideToggle();    //显示语言切换栏
    $('.header .menu .langue').show();
    // 显示导航栏
    $('.header .menu .nav').show();
  })

  /******************* 导航区 end *****************/



  /******************* 语言栏 start **************/

  // 点击滑出语言选择栏
  $('.operate-column .button').on('click', function () {
    $('.langue-list').slideToggle();
  })

  // 在选择列表中选定语言后，初始框的文本跟随变化，且选择栏消失
  $('.langue-list li').on('click', function () {
    $('.langue-name').html($(this).html());
    $('.langue-list').slideUp();
    $(this).addClass('active').siblings().removeClass('active');
  })

  /******************* 语言栏 end **************/
})