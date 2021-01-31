console.log(12);
function ibg() {
  console.log(0);
  $.each($(".ibg"), function (index, val) {
    console.log(1);
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}
ibg();
