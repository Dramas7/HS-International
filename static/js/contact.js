$(function () {
  $('#message').bind('input', function () {
    let wordCount = $(this).val().length;
    $('div.message-board > div.form > ul > li.message > div > span').text(wordCount);
  })
});