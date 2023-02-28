$(function () {

  /**************home区 start***********/
  // 侦听resize事件，并对resize进行改进，避免侦听频率过高，改进性能。
  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        actualResizeHandler();

        // The actualResizeHandler will execute at a rate of 15fps
      }, 66);
    }
  }

  // 初始化主体区域高度的函数
  function setHeight() {
    // 设置主体内容区高度占满除导航栏外的视口高度，并适应多种设备
    let contentHeight = window.innerHeight - $('.header').outerHeight();
    $('.home').height(contentHeight);
  
    // 设置992px后展示的banner的高度
    $('.swiper').height(contentHeight);
  }

  setHeight();
  // 改进后的resize监听器
  function actualResizeHandler() {
    setHeight();
  }

  // 定义切换栏目的处理程序
  $('.home > div.pc').mouseenter(function () {
    // 为鼠标enter的栏目提高层级，并增大改变宽度
    $(this).css({ "z-index": "2", "width": "65.21%" });
    // 淡入所在区的文本信息
    $(this).children('.content').fadeIn();
    // 淡出所在区的按钮本身
    $(this).children('.toggle-btn').fadeOut();

    // 为敌对栏目降低层级，并减小其宽度
    $(this).siblings().css({ "z-index": "1", "width": "34.79%" });
    // 隐藏敌对栏目的文本信息
    $(this).siblings().children('.content').hide();
    // 显示敌对栏的按钮
    $(this).siblings().children('.toggle-btn').show();
  });

  // 定义跳转按钮处理程序
  $('.barter-nav .nav-btn').click(function () {
    $(window).attr('location', 'barter.html');
  });

  $('.cash-nav .nav-btn').click(function () {
    $(window).attr('location', 'cash.html');
  });

  $('[data-barter').click(function () {
    $(window).attr('location', 'barter.html')
  })

  $('[data-cash').click(function () {
    $(window).attr('location', 'cash.html')
  })

  // 引入第三方轮播图
  $(".banner").HappyImage({
    arrow: false,
    autoplay: 3000
  });
  /**************home区 end*************/
})