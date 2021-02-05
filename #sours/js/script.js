// <script.js>˅=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=˅

// ibg - совместно с .ibg путь картинки делает фоном у родителя
console.log(1);
function ibg() {
  console.log(2);
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}
ibg();

//</script.js>˄=¡=¡=¡=¡=¡=!=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=˄
