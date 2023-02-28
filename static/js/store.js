$(function () {
  // 引入第三方轮播图
  $(".banner").HappyImage({
    arrow: false,
    autoplay: 3000
  });
  // 点击一级列表下拉按钮，弹出二级列表
  $('.store .side-bar .icon').on('click', function () {
    $(this).parent().next().slideToggle();
    $(this).toggleClass('active');
  });

  // 点击二级导航的项目，隐藏热门推荐标题，显示三级列表,并添加active后的样式
  $('.category-2').click(function () {
    // 若有active样式，则不发生动作
    if (!$(this).attr('class').includes('active')) {
      $('.product-list > .title').hide();
      $('.product-list > .top-bar').show();

      // 添加active样式
      $('.category-2').removeClass('active');
      $(this).addClass('active');
    }

    // 三级导航的处理程序
    $('.category-3').click(function () {
      if (!$(this).attr('class').includes('active')) {
        // 添加active样式
        $('.category-3').removeClass('active');
        $(this).addClass('active');
      }
    });
  });

  // 点击商品图片跳转到详情页
  $('[data-sku]').click(function () {
    $(window).attr('location', 'store_detail.html');
    console.log(1)
  });

  // 分页器
  $('.store .pagination .page').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
});