$(function () {
  // 为商品详情信息显示的折叠按钮绑定click事件
  $('div.detail-info > div.title > div.btn').click(function () {
    // 为按钮本身添加类名，切换形状
    $(this).toggleClass('active');
    // 为内容区设置缓动上拉和下拉
    $(this).parent().siblings().slideToggle();
  });

  // 选定码数
  $('.size-list > li').click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  // 图片边框处理程序
  // 定义各图片基础索引值
  let imgIndex = 0;

  // 初始化图片展示框处理程序
  function initImg() {
    // 添加选中框
    $('.small-pic-area .pic-list > li').eq(imgIndex).addClass('is-selected').siblings().removeClass('is-selected');
    $('.product-attr .pic-list > li').eq(imgIndex).addClass('is-selected').siblings().removeClass('is-selected');
    // 更新大图区域
    let imgSrc = $('.small-pic-area .pic-list > li').eq(imgIndex).children().attr('src');
    $('.big-pic-area > img').attr('src', `${imgSrc}`);
  }

  // 定义点击大小图片的处理函数
  $('.small-pic-area .pic-list > li').click(function () {
    // 添加选中框
    $(this).siblings().removeClass('is-selected');
    $(this).addClass('is-selected');
    imgIndex = $(this).index();
    initImg();
  });

  $('.product-attr .pic-list > li').click(function () {
    // 添加选中框
    $(this).siblings().removeClass('is-selected');
    $(this).addClass('is-selected');
    imgIndex = $(this).index();
    initImg();
  });

  // 放大镜区域
  $('.big-pic-area').click(function () {
    $('.overlay').show();
    $('.large-pic-area').show();
  });

  // 定义图片轮播区域
  (function () {
    const picList = $('.small-pic-area .pic-list');
    // 定义包裹图片列表的宽度
    let picListWidth = picList.width();
    // 定义外层约束容器的宽度
    let wrapperWidth = $('.small-pic-area').width();
    // 定义上述二者相差的结果
    let differ = wrapperWidth - picListWidth;
    // 定义每张图片所占的空间，为图片本身的宽度 + 图片的右边距
    let picSpaceUnit = picList.children().eq(0).outerWidth(true);
    // 定义左右点击次数之差
    let n = 0;
    // 定义图片数量
    let picsNum = picList.children().length;
    // 点击向左按钮让图片选择列表向右走,以使内容区向左显示
    $('.right-column > img:first-child').click(function (e) {
      e.stopPropagation();
      if (differ >= 0) {
        // if (imgIndex + 1 )
        return;
      } else {
        if (parseInt(picList.css('left')) >= 0) {
          if (imgIndex > 0) {
            imgIndex--;
            initImg(); 
          }
          return
        } else {
          n--;
          imgIndex--;
          picList.css({ 'left': `${-n * picSpaceUnit}px` });
          initImg();
        }
      }
    });

    // 点击向右按钮让图片选择列表向左走,以使内容区向右显示
    $('.right-column > img:last-child').click(function (e) {
      e.stopPropagation();
      if (differ >= 0) {
        return;
      } else {
        if (parseInt(picList.css('left')) <= differ) {
          if (imgIndex + 1 < picsNum) {
            imgIndex++;
            initImg();
          } else {
            return;
          }
          return;
        } else {
          n++;
          imgIndex++;
          picList.css({ 'left': `${-n * picSpaceUnit}px` });
          initImg();
        }
      }
    });
  })();

  // 图片放大后的关闭按钮
  $('.large-pic-area .close-btn > span').click(function () {
    $(this).parent().parent().hide();
    $('.overlay').hide();
  });

  // 点击原始图片后打开遮罩层以及弹出大图
  $('.operate-column .left-column img:last-child').click(function (e) {
    e.stopPropagation();
    $('.overlay').show();
    $('.large-pic-area').show();
  });

  // 阻止最左侧按钮事件冒泡
  $('.operate-column .left-column img:first-child').click(function (e) {
    return false;
  });
});