// <script.js>˅=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=˅

// <.ibg()>˅=======================================================================================˅
// ibg - совместно с .ibg - путь картинки делает фоном у родителя
// на JQuery
function ibg() {
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

// на JS
// function ibg() {
//   let ibg = document.querySelectorAll(".ibg");
//   for (var i = 0; i < ibg.length; i++) {
//     if (
//       ibg[i].querySelector("img") &&
//       ibg[i].querySelector("img").getAttribute("src") != null
//     ) {
//       ibg[i].style.backgroundImage =
//         "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
//     }
//   }
// }
// ibg();

// не доделан на JS
// попытка на JS
// function ibg() {
//   console.log(1);
//   var privClass = document.getElementsByClassName("block-img__link");
//   privClass[0].style.backgroundImage = "url('../../img/head.jpg')";
//   // if (getPrivClass) {
//   //   var getImgTag = document.body.getElementsByTagName("img");
//   //   var getIbg = document.body.getElementsByClassName("ibg");
//   // }
// }
// ibg();
//</.ibg()>˄=======================================================================================˄

// <.slideThree()>˅=======================================================================================˅
// Converted to SCSS. If you want to grab just the CSS, click the `View Compiled` button on the css window over there <-- . That will list out the compiled css for you to use. Grab all the css between the comments and the html between the comments and it should work like a champ anywhere you place it.

// All this jquery is just used for presentation. Not required at all for the radio buttons to work.
// $(document).ready(function () {
//   //   Hide the border by commenting out the variable below
//   var $on = "section";
//   $($on).css({
//     background: "none",
//     border: "none",
//     "box-shadow": "none",
//   });
// });
//</.slideThree()>˄=======================================================================================˄

//</script.js>˄=¡=¡=¡=¡=¡=!=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=˄
