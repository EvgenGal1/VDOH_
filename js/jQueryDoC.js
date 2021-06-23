// <jQueryDoC.js(справочник jQuery)>˅=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=˅

// подключение -> ===========================================================================================
//  подкл файл ->  сайт https://jquery.com -> конпка download jquery -> ссылка "Загрузите ..... jQuery 3.6.0" -> скачать/сохранить файл -> подкл файл <script src="/js/jQuery.js"></script>
// подкл онлайн -> <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
// в подвал -> просто <script> перед </body>.
// в шапку, пишем так ->
$(document).ready(function () {
  // код //
});
// или
$(function () {
  // код //
});
// $(document).ready(function(){}
// код для примера -> =========================================================================================
// {
/* 
    <div class="DoC1 pc1" id="DoC">
      <div class="DoC1-prob">
        <ul class="DoC1-ul">
          <li>
            <a href="">ссылка 1</a>
            <div><img src="img/minElem/qw1.jpg" alt="" /></div>
            <p class="DoC1-div1">lorem5</p>
            <ul>
              <li>1</li>
            </ul>
          </li>
        </ul>
        <div class="DoC1-status">0</div>
        <button class="DoC1-btn">Задать вопрос</button>
      </div>
    </div>
  */
// }

// выбор эл. -> ===========================================================================================
// $('') или jquery('');

// выборка эл. -> ===========================================================================================
// тег - $('а'), класс - $('.menu'), id - $('#ul'),
// вложеность/порядок - $('menu li'), дочерний - $('menu > li'), ближ.сосед - $('menu li a + img'), перечисление - $('menu, li, img'),
// атрибут - $('img[src]'), атриб.детали - $('img[src=img/img1.jpg]'), атриб.начало - $('img[src^=img/]'), атриб.конец - $('img[src$=.jpg]'), атриб.везде - $('img[src*=3]'),
// чётные - $('menu li:even'), не чётные - $('menu li:odd'),
// первый - $('li:first'), последний - $('li:last'), определённый(7) - $('li:nth-child(7)')
// фильтры: не выбор - $('img:not([src*=3])'), индекс - :eq, больше индекса - :gt,меньше индекса - :lt(index),заголовки - :header, анимированые эл. - :animated
// имеет внутри тег - $('li:has(ul)'), имеет внутри текст - $('p:contains(lorem)'), пустой - :empty, не пустой - :parent
// скрытые - $('img:hidden'), видимые - $('img:visibility').
// формы: выбор всех input, textarea, select, button - :input, :text, пароль - password, флажок - :checkbox, радио - :radio, изо - :image, файл - :file, кнопка - :button, отправка - :submit, сброс - :reset, вкл. - :enabled, откл. - :disabled, проверено - :checked, выбранно - :selected

// переменные -> ===========================================================================================
// var = $('а')

// МЕТОДЫ -> ===============================================================================================

console.log("DoC1.0");

// $(function () {
// цепные функции -> $('p').hide().text('Новые тектс').show(3000);
$(".DoC1-ul li:nth-child(1) a").hide().show();

// взять текст -> .text(); вставить какойто текст -> .text('какойто текст');
$(".DoC1-ul li:nth-child(1) p").hide(1000).text("Нов. текст 1").show(3000);

// взять высоту/ширину -> .height()/.width(); изменить  высоту/ширину -> .height(300)/.width(150);
//  ???не раб - не могу между вставляемого текста добавть еще элемент
function hW1() {
  var hMax = $(".DoC1-ul li img").height(50);
  var h = $(".DoC1-ul li img").height();
  var w = $(".DoC1-ul li img").width();
  $(".DoC1-ul li:nth-child(1) ul li").text("В: " + h + "; Ш: " + w + ";");
  // w.width(150);
  // .html("<p>wert</p>")
  // .text("Ширина: " + w + ";");
}
hW1();

// html код -> .html()
// взять -> $('.ul li ul').html(); вывод -> <li>1</li>
// прописать -> $('.ul li ul').html('<p>Новый текст</p>'); вывод -> <p>Новый текст</p>
$(".DoC1-ul li:nth-child(2) a").html("<p>Нов. текст 2</p>");

// Основые Аргументы
// 1. Не плавно/плавно(duration)(время/умолч.(400)/'fast'(200)/'slow'(600));  -> .hide()/.hide(1500);
// 2. Скорость/кривая Безье(easing)(linear/swing) -> .hide('fast','linear');
// 3. С функцией(complete(callback,this)) -> .hide( 500,"linear",function(){alert(эл.)})
// 4. Очередь(queue)(true(в очереди),false(сразу)) -> .hide( 500,"linear",function(){alert(эл.)},false)
// альтернатива прописать всё:
// p.hide({ // скрывыаем элементы <p> в документе
//   duration: 800, // продолжительность анимации
//   easing: "linear", // скорость анимации
//   complete: function () { // callback. добавляем текстовую информации в элемент с классом status
//     $(".status").text("Элементы исчезли");
//   },
//   queue: false, // не ставим в очередь
// });

// скрыть/показать элем анимировано. -> .hide()/.show(); !основн. аргум.
$(".DoC1-ul li:nth-child(5) p").hide(1000).show(3000);

// скрыть/вкл. прозрачность элем -> .fadeOut()/.fadeIn(); .fadeToggle() - для всего?; !основн. аргум.
$(".DoC1-ul li:nth-child(6) p").fadeOut(1000).fadeIn(3000);

// скрыть/вкл. прозрачность элем -> .fadeTo(); 3 аргум.(время, % прозрачности, функц); .fadeTo(500, 0.5).fadeTo(800, 1)
$(".DoC1-ul li:nth-child(7) p").fadeTo(1000, 0).fadeTo(3000, 1);

// свернуть(вниз)/развернуть(вверх) элем анимировано. -> .slideDown()/.slideUp(); .slideToggle() - для всего?; !основн. аргум.
// $(".DoC1-ul li:nth-child(7) p").

// атрибут - взять/добавить(изменить)/удалить -> .attr('src'); / .attr('title', 'Подсказка'); / .removeAttr('src');
// $("a").attr("href");
// $("a").attr('title', 'xX');
// $("a").attr({
//   class: "link",
//   href: "http://ruseller.com",
//   title: "Руселлер научит!",
// });

// ЦИКЛЫ -> ===============================================================================================

// $(".ul li"); - выбирает весь массив, все дочерние li в .ul

// ФУНКЦИИ -> ===============================================================================================
{
  /*
  в <p> пропис. ширину и высоту переданого класса
  function widthAndHeight(element) { // получаем аргумент в вызове функц(btn)
    var className = "." + element; // в переменную запис. класс с атриб(.btn)
    var w = $("className").width(); // в переменную запис. ширина класса
    var h = $("className").height(); // в переменную запис. высота класса
    $(".ul li p").text("Ширина :" + w + "Высота :" + h); // в <p> пропис. ширину и высоту
  }
  widthAndHeight("btn"); // вызов функц с передачей эл.
  */
}

// <DoC2(таблица jQuery)>˅=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=++=+=+=+=+=+=+=˅
// добав. фон <span> с классом .token
// function addBackgroundToken() {
//   var classToken = $(".DoC3 td span[class*=token]");
//   $(classToken).css("background", "#707070");
// }
// addBackgroundToken();

// <Подсказки(.tooltipOv(.ttO-exemPlus), attr=data-tooltip, #floatTip)>˅=======================================================================================˅

// *** подсказка(data-tooltip) для .token_el(код эл.)
// !!! https://habr.com/ru/post/165805/
function showPopUp() {
  $("[data-tooltip]")
    .mousemove(function (eventObject) {
      $data_tooltip = $(this).attr("data-tooltip");

      $("#tooltip")
        .text($data_tooltip)
        .css({
          top: eventObject.pageY + 20,
          left: eventObject.pageX + 0,
        })
        .show();
    })
    .mouseout(function () {
      $("#tooltip").hide().text("").css({
        top: 0,
        left: 0,
      });
    });
}
// showPopUp(); // ! откл. - нет переносов

// *** подсказка(floatTip) для .token_el(код эл.)
// !!! http://htmlbook.ru/faq/mozhno-li-izmenit-vid-vsplyvayushchey-podskazki
// onmousemove - событие для опред. перемещ. курсора мыши по экрану
document.onmousemove = moveTip;
function moveTip(e) {
  // раб на событиях прописаных в .token__el как атрибуты
  // onmouseover - событие наведения курсора на эл.
  // onmouseout - событие выхода курсора за эл.
  // onMouseOver="toolTip('вернёт предыдущий набор эл. <br> (вернётся назад по набору и у этого эл. ставим класс .kurt)')"
  // onMouseOut="toolTip()"
  floatTipStyle = document.getElementById("floatTip").style;
  w = 250; // Ширина подсказки
  // Для браузера IE6-8
  if (document.all) {
    // clientX - расстояние от Левой границы Экрана до Курсора без учета прокрутки
    // scrollLeft - Получает значение отступа прокрутки СЛева
    x = event.clientX + document.body.scrollLeft;
    // clientY - расстояние от Верхней границы Экрана до Курсора без учета прокрутки
    // Получает значение отступа прокрутки СВерху
    y = event.clientY + document.body.scrollTop;
    // Для остальных браузеров (можно оставить только х= и у=)
  } else {
    // pageX - расстояние от Левой границы Документа до Курсора с учетом прокрутки
    x = e.pageX; // Координата X курсора
    // pageY - расстояние от Начала Документа до Курсора с учетом прокрутки
    y = e.pageY; // Координата Y курсора
  }
  // Показывать слой справа от курсора
  // clientWidth - ширина элемента внутри рамок border
  if (x + w + 10 < document.body.clientWidth) {
    floatTipStyle.left = x + "px";
    // ??? проба покажет в центре
    // } else if (x - w + 10 < document.body.clientWidth / 2) {
    // }
    // else if (x + w + 10 == document.body.clientWidth) {
    //   floatTipStyle.left = x - w / 2 + "px";
    // Показывать слой слева от курсора
  } else {
    floatTipStyle.left = x - w + "px";
  }
  // Положение от  верхнего края окна браузера
  floatTipStyle.top = y + 20 + "px";
}
function toolTip(msg) {
  floatTipStyle = document.getElementById("floatTip").style;
  if (msg) {
    // Выводим текст подсказки
    document.getElementById("floatTip").innerHTML = msg;
    // Показываем подсказку
    floatTipStyle.display = "block";
  } else {
    // Прячем подсказку
    floatTipStyle.display = "none";
  }
}
// раб на событиях прописаных в .token__el как атрибуты // ! откл. - удалены attr в html - пробы другого

// * подсказка(toolTipOv) для .token_el(код эл.)
// !!! http://www.webmasters.by/articles/web-programming/72-create-simple-tooltips-with-css-and-jquery.html
function simple_tooltipov(target_items, name) {
  $(target_items).each(function (i) {
    $(this).after(
      "<div class='" +
        name +
        "' id='" +
        name +
        i + // "'><p>" +
        "'>" +
        $(this).attr("title") + // "</p></div>"
        "</div>"
    );
    var my_tooltipov = $("#" + name + i);
    console.log(this);
    $(this)
      .removeAttr("title")
      .mouseover(function (i) {
        my_tooltipov.css({ opacity: 0.8, display: "block" }); // .fadeIn(50);
      })
      .mousemove(function (e) {
        w = 250; // Ширина подсказки
        x = e.pageX; // Координата X курсора. pageX - расстояние от Левой границы Документа до Курсора с учетом прокрутки
        y = e.pageY; // Координата Y курсора. pageY - расстояние от Начала Документа до Курсора с учетом прокруткиs
        // Показывать слой справа от курсора
        // clientWidth - ширина элемента внутри рамок border
        if (x + w + 10 < document.body.clientWidth) {
          // my_tooltipov.css({ left: x + "px" });
          my_tooltipov.css({ left: x + "px" });
        }
        // Показывать слой слева от курсора
        else {
          my_tooltipov.css({ left: x - w + "px" });
        }
        // Положение от  верхнего края окна браузера
        my_tooltipov.css({ top: y + 15 + "px" });
      })
      .mouseout(function () {
        my_tooltipov.fadeOut(100);
      });
  });
}
// simple_tooltipov(".tokens > .token__el", "tooltipOv"); // ! откл. - не раб - события mouseover и mouseleave(в отл. от hover) прерываются на дочерних эл.(мигает на spanах)

// *** Вывод подсказки(toolTipOv) у кода элемента(.token_el).
// !!! ТРАВНИК(перебор f(simpleTooltip[Ov]))
function simpleTooltipOv(selector) {
  const $targetItems = $(selector); // опцион. (selector, name)
  $targetItems.each(function () {
    // опцион. function (i)
    const $targetItem = $(this); // ? не раб .filter('.token__el');
    const $tooltip = generateTooltip($targetItem); // опцион. ($targetItem, i, name);
    $targetItem.removeAttr("title");
    // Вариант jQuery - закомментить JS. Cобытие hover не прерывается наведением на дочерние элементы, в то время как mouseover и mouseleave прерываются
    $targetItem
      .hover(
        () => handleMouseOver($tooltip),
        () => handleMouseOut($tooltip)
      )
      .mousemove((event) => handleMouseMove(event, $tooltip));
    // Вариант JS - закомментить jQuery
    // this.addEventListener("mouseenter", () => handleMouseOver($tooltip));
    // this.addEventListener("mouseleave", () => handleMouseOut($tooltip));
    // this.addEventListener("mousemove", (event) =>
    //   handleMouseMove(event, $tooltip)
    // );
  });
  // создать div.tooltipOv после .token__el с содержимом его title
  function generateTooltip($targetItem) {
    // опцион. ($targetItem, index, name)
    const title = $targetItem.attr("title");
    const $tooltip = $(
      `<div class="${"tooltipOv"}">${title}</div>` // опцион. <div class="${name}" id="${name}${index}">${title}</div>
    );
    $targetItem.after($tooltip);
    return $tooltip;
  }
  // показать div.tooltipOv
  function handleMouseOver($tooltip) {
    $tooltip.css({ opacity: 0.8 }).fadeIn(50);
  }
  // скрыть div.tooltipOv
  function handleMouseOut($tooltip) {
    $tooltip.fadeOut(100);
  }
  // перемещение на div.tooltipOv
  function handleMouseMove(event, $tooltip) {
    const PAGE_OFFSET_RIGHT = 10;
    const TOOLTIP_OFFSET_TOP = 20;
    const tooltipWidth = $tooltip.width();
    const tooltipIsInPageBounds =
      event.pageX + tooltipWidth + PAGE_OFFSET_RIGHT <
      document.body.clientWidth;
    const nextLeftOffset = tooltipIsInPageBounds
      ? event.pageX
      : event.pageX - tooltipWidth;
    $tooltip.css({
      left: nextLeftOffset + "px",
      top: event.pageY + TOOLTIP_OFFSET_TOP + "px",
    });
  }
}
// simpleTooltip(".tokens"); // ? не раб
simpleTooltipOv(".tokens > .token__el"); // опцион. (".tokens > .token__el", "tooltipOv")

// *** по клику на код эл.(.token__el) показать в подсказке(.tooltipOv) ещё доп. примеры(.ttO-exemPlus)
// * к доп. примерам(.ttO-exemPlus) добавить обозначения(+++ и ⮟ (●))
// $(".ttO-exemPlus:last-child").css({color: 'red'})
function clickTokenElShowExemPl() {
  // $(".ttO-exemPlus:contains(●)").css({color: 'red'})
  const $tokenEls = $(".token__el");
  $tokenEls.each(function () {
    const $tokenEl = $(this);
    const $totipOvs = $(".tooltipOv");
    const $totipOv = $($tokenEl).next($totipOvs);
    const $hasttOePl = $($totipOv).has(".ttO-exemPlus");
    const $exampl = $(".ttO-exemPlus");

    $(".ttO-exemPlus span").css({ color: "white" });

    $($tokenEl).click(function () {
      if ($($totipOv).css("opacity") == 0.8) {
        $($totipOv).fadeTo(150, 1);
      } else {
        $($totipOv).fadeTo(150, 0.8);
      }
    });

    $($hasttOePl).append("<span class='ttPlus'>+++</span>");
    $(".ttPlus").css({
      color: "red",
      opacity: "1",
      position: "absolute",
      right: "0px",
      bottom: "-25px",
      fontSize: "30px",
      fontWeight: "bold",
      textShadow: "black 1px 1px 0px",
    });
    $($hasttOePl).append("<span class='ttArrow'>⮟</span>");
    $(".ttArrow").css({
      color: "red",
      opacity: "1",
      fontSize: "20px",
      fontWeight: "bold",
      textShadow: "black 1px 1px 0px",
      transform: "rotate(-90deg)",
    });

    $($tokenEl).click(function () {
      $($exampl).slideToggle(150, function () {
        if ($(this).is(":hidden")) {
          $(this)
            .hide()
            .next(".ttPlus")
            .slideToggle(100)
            .nextAll(".ttArrow")
            .css({
              color: "red",
              transform: "rotate(-90deg)",
            });
          console.log(2);
          // ??? не раб - transform'rotate(90deg) и .animate()
        } else {
          $(this).show().next(".ttPlus").fadeToggle(100);
          $(".ttArrow").addClass("rotate").css({
            color: "green",
            transform: "rotate(-90deg)",
          });;
          console.log(4);
          // ??? не раб - transform'rotate(90deg) и .animate()
        }
      });
      return false;
    });
  });
}
clickTokenElShowExemPl();

//</Подсказки(.tooltipOv(.ttO-exemPlus), attr=data-tooltip, #floatTip)>˄=======================================================================================˄

// *** при наведении на tokens(строка назв. + код элемента) - .short(формула) исчезает, а .short2(пример) появятся, при отпускании наоборот. Можно обычным CSS через hover.
function shortAnd2Change() {
  var tokens = $(".tokens");
  var short = $(".short");
  var short2 = $(".short2");
  $(tokens).hover(
    function () {
      $(this).find(".short").hide();
      $(this).find(short2).css("display", "flex");
    },
    function () {
      $(this).find(short).show();
      $(this).find(short2).css("display", "none");
    }
  );
  // ??? не раб - при нажатии (варианты - mouseover,mouseenter)
  // .mousedown(function () {
  //   $(".short").css("display", "inline-block");
  // }),
  // .mouseup(function () {
  //   $(".short").css("display", "none");
  // });
  // ??? не раб - each и this
  // $("token__el").each(function () {
  //   this.css("display", "none");
  // });
  // ??? не раб - индекс
  // $("token__el").eq($(this).index());
  // и
  // var i = $(".token__el").index(this);
  // ? не раб - is в f()
  // $(this).is(".short").css("display", "none");
  // ? не раб - is в var
  // var dop2hid = $(".short").is();
  // $(tokens).hover(function () {
  //   if (dop2hid) {
  //     $(".short").hide();
  //   }
  // ? не раб - on hover
  // $(tokens).on("hover", function () {
  //   $(".short").fadeOut();
  // });
  // ? не раб -  if true
  //     var short2= $(".short").hidden();
  // if (($(short2 = true)) {
  //   $(".short").css("display", "none");
  // }
}
shortAnd2Change();

// *** всем span.cont у кого есть текст и текст('|'), сделать padding 0 5px. и убрать .gap(пробел)
function iliPadd() {
  var contSp = $("span.cont:contains()");
  var contSpIli = $("span.cont:contains('|'), span.cont:contains('=')");
  // ? не раб - в связке 2 :contains
  // var contSpBr = $("span.cont:contains('[')");
  $(".gap").css("display", "none");
  $(contSp).css("padding", "0 1px");
  $(".token__el span")
    .filter(contSpIli)
    .css({ "font-weight": "900", "text-shadow": "0px 0px 0px black" });
  // ? не раб .filter с :contains
  // .filter(".cont:contains("||")")
  // ? не раб связка 2 :contains
  // .filter(contSpBr)
  // .css("padding", "0px")
  // ? не раб .is
  // .is(function () {
  //   if ($(this).text() == "[") {
  //     $(this).css("padding", "0");
  //   }
  // });
}
iliPadd();

// *** всем span.cont у кого есть текст('[' или ']'), сделать padding 0px.
function ramk() {
  $("span.cont").is(function () {
    if (
      $(this).text() == "[" ||
      $(this).text() == "]"
      // ? не раб .contains
      // .contains("[") или .contains() == "["
    ) {
      $(this).css("padding", "0");
    }
  });
}
ramk();

// !!!
// *** сделать кр. цвет назв. блоков у которых пока нет в подсказке <p>
// * сделать рамки блокам (строке не получилось), внутри которой у span нет допов.(".short, .short2")
function сolNul() {
  // ! есть 000
  // * находит у кого есть '000' в подсказке и выделяет родителя или потомка
  var datT = $("div:contains(000)"); // var datT = $("span:contains(000)");
  $(".tokens").has(datT).css("outline", "3px solid #000000");
  // $(datT).closest(".tokens").css("color", "#ff0000"); // блоку/родителю
  // $(".tokens").find(datT).css("background", "#100835"); // переменой/потомку
  // ! не в подсказке <p>
  var $hasP = $(".tooltipOv").not(":has(p)");
  $($hasP).closest(".tokens").css("color", "#ff0000"); // блоку/родителю
  // var $hasExPlus = $(".tooltipOv").not(":has(.ttO-exemPlus)");
  // $($hasExPlus).find(".token__el").css({ background: "#000000" }); // ? не раб блоку/родителю
  // !
  // * находит у кого нет в наличии .shortов и выделяет .token__el
  $(".token__el").not(":has(.short, .short2)").css("outline", "1px solid red");
  // .has(".short, .short2") // находит .shortы, выделяет .token__el
  // ? не раб - ч/з f() задавал стили строке .tokens внутри которой у span нет .shortов
  // $(".tokens")
  //   .filter(function (i, e) {
  //     return $(".token__el ")
  //     // ? .find('span').css("outline", "3px solid blue")
  //       .not(":has(.short, .short2)")
  //       // ? .end()
  //       .css("outline", "1px solid red");
  //   })
  //   // ? .end() или add()
  //   .css("outline", "2px solid blue");
  // ? не раб - closest. стили пришли ко всем
  // $(".tokens span").not(".short, .short2").closest(".tokens").css("outline", "1px solid red")
}
сolNul();

// * при клике на назв. группы (.descr) у него переключается класс
function fewClickDescr() {
  var count = 0;
  $(".descr").click(function () {
    $(this).toggleClass("tNp", count++ % 4 == 0);
  });
}
fewClickDescr();
// !!!

//</DoC2(таблица jQuery)>˄=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=˄

console.log("DoC1.1");
// ??? не раб - добавл. класс со стилями срабатывает сразу, не через время
// ??? не раб - хочу добаыть имя класса и позже в f() добавить к нем теги на которые и будет раб f(). пока не получ
// скрываем(делает прозрачным) переданый эл. за 1ое переданое время и возвращаем эл. за 2ое переданное время + добавляем класс со стилям
function elementOut(element, time1, time2, newClass, time3) {
  // получаем аргументы в вызове функц
  if (time1 > 5000 || time1 < 1000 || isNaN(time1) || isNaN(time2)) {
    // е/и время больше 5с или меньш 1с или там не число
    return false; // возвр ложь - не верно
  } else {
    // иначе
    // var className = "." + element; // в переменную запис. класс с аргум
    // var childClass = className + $("li:even");
    var tagName = element;
    $(tagName)
      .fadeOut(
        time1,
        "linear",
        function () {
          console.log("f() elementOut");
        },
        true
      )
      .fadeIn(time2)
      .addClass(newClass, time3);
    // .removeClass(className)
    // .addClass(className)
    // .fadeOut(time1)
    // .fadeIn(time2); // скрываем эл. за время
  }
}
elementOut(".DoC1-ul > li:nth-child(3)", 1000, 3000, "DoC1-cl", 15000); // вызов функц с передачей эл. и времени

// опред. тегу добав. подсказку
function changeAttr1(element, newAttr, newValue) {
  var tagName = element;
  $(tagName).attr(newAttr, newValue);
}
changeAttr1(".DoC1-ul li img:not([src*=2])", "title", "Подсказка 1");

// опред. классу добав. подсказку
function changeAttr2(element, newAttr, newValue) {
  var className = "." + element;
  $(className).attr(newAttr, newValue);
}
changeAttr2("DoC1-div1", "title", "Подсказка 2");

// !!!
//</DoC3>˅=========================================================================˅

// !!

// ??? не раб - не могу прописать чтоб при наведении на (.descr span) или (.tokens .token) выделялся ктото противоположный из них. думаю тут нужен цикл (each или массив).
// добав. рамку кл.token при наведении на кл.descr и убрать.
// добав. фон кл.descr при наведении на кл.token и убрать.
function highlightRelated1() {
  // var getTrHasClBadge = $("tr:has(.descr)");
  // if ($(getTrHasClBadge)) {
  var getClBadge = $(".descr span");
  var getClToken = $(".tokens .token");
  // span:nth-child(1)
  getClBadge.hover(
    function () {
      $(this).css({
        background: "#555555",
        "border-radius": "5px",
        border: "1px solid #333333",
      });
    },
    function () {
      $(this).css({
        background: "none",
        "border-radius": "none",
        border: "none",
      });
      // $(getClToken).css({ border: "1px solid yellow" });
      // $(getClToken).after().css({ border: "1px solid yellow" })
      // }
    }
  );
}
// highlightRelated1();

// function highlightRelated2() {
//   var getClBadge = $(".descr > span:nth-child(1)");
//   var getClToken = $(".token:nth-child(1)");
//   // span:nth-child(1)
//   $(getClBadge).mouseover(function () {
//     // .mouseover(function () {
//     if ($(this)) {
//       $(getClToken).css({ border: "1px solid #555555" });
//       // $(getClToken).after().css({ border: "1px solid #555555" });
//     }
//   });
// }
// highlightRelated2();

// вызов ф. highlightRelated1 которая выделяет .descr span
function highlightRelated3() {
  console.log("DoC.3.1");
  var getTrHasClBadge = $("tr:has(.descr)");
  $(this).mouseover(function () {
    highlightRelated1();
  });
  // $(getTrHasClBadge).mouseout(function () {
  //   highlightRelated2();
  // });
}
// highlightRelated3();
//</DoC3>˄=========================================================================˄
// !!!

// !!!
// $(document).ready(function () {
//   $("button").click(function () {
//     // задаем функцию при нажатиии на элемент <button>
//     $("div").click(); // вызываем событие click на элементе <div>
//   });
//   $("div").click(function () {
//     // задаем функцию при нажатиии на элемент <div>
//     $("div").toggle(); // отображаем, или скрываем элемент
//   });
// });
// !!!
// ->
// ->
// ->
// ->
// ->
// ->
//</<jQueryDoC.js(справочник jQuery)>˄=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=¡=˄