//! если в файле только один класс то его имя пишут с большой буквы (хорошая практика  - один файл - один класс)
class Board {
  //! this. везде (почти) указывает на объект в котом находиться. здесь Board
  constructor() {
    // получаем доступ к таблице table id="game"
    this.boardEl = document.getElementById("game");
  }

  /**
   * Метод получает другие игровые объекты, которые нужны ему для работы.
   * @param {Settings} settings объект настроек.
   * @param {Snake} snake объект змейки.
   */
  //! через метод init мы будем передовать в какойто объект сылки на др объекты.
  //! 1 Мы так конролим от чего зависит наш файл. Видно в самом init
  //! 2 Более низкая связаность файлов, благодаря собственым свойствам (this.settings,this.board и пр.)
  // игровому полю передаем рамеры игров поля и змейку чтоб по кордин. отрисовать её
  init(settings, snake) {
    this.settings = settings;
    this.snake = snake;
  }

  /**
   * Метод отрисовывает игровое поле.
   */
  // внешний цикл отрисует строку, а внутрений ячейки в ней. потом опять строка и ячейки
  renderBoard() {
    //* рефакторинг. чтоб не наруш принц един. отвеств. убрали очистку.
    // очищаем игр.поле
    // this.boardEl.innerHTML = "";
    // перебираем кол-во строк из настроек (21)
    for (let row = 0; row < this.settings.rowsCount; row++) {
      // создаем тег "tr"
      let tr = document.createElement("tr");
      // обращаемся таблице и добавляем  тег "tr"
      this.boardEl.appendChild(tr);

      // смотрим сколько колонок (21)
      for (let col = 0; col < this.settings.colsCount; col++) {
        // создаем тег "td"
        let td = document.createElement("td");
        // в tr добавляем td
        tr.appendChild(td);
        // по кругу создаем и добавляем теги td до 21 включительно
        // идем второй раз на внешний цикл. и так до 21
      }
    }
  }

  /**
   * Метод отрисовывает змейку на доске.
   */
  // метод getSnakeBodyElems будет возращить теги "td" которые соответствуют координатам змейки (snake.body) и отрисовывать их присваивая класс snakeBody
  renderSnake() {
    // перемен. snakeBodyElems = у Board, В МЕТОД getSnakeBodyElems (получить элементы тела змейки) передаем массив с координатами из snake.body. Делаем это по сылке (this.snake) на объект Snake
    const snakeBodyElems = this.getSnakeBodyElems(this.snake.body);
    //* рефакторинг -. убираем проверку на ноль
    // если в snakeBodyElems чтото есть
    // if (snakeBodyElems) {
    // перебираем snakeBodyElems
    snakeBodyElems.forEach(function (tdEl) {
      // и каждому тегу "td" добавляем класс snakeBody. класс раскрашивает змейку
      tdEl.classList.add("snakeBody");
    });
    // }
  }

  //* рефакторинг -.  не нужно постояно очищать поле, только змейку и еду. заместо + нов. методы
  /**
   * Метод очищает игровое поле.
   */
  // clearBoard() {
  // константа tdElems = получаем все теги "td",
  //   const tdElems = document.querySelectorAll("td");
  // перебираем циклом forEach все теги td
  //   tdElems.forEach(function (td) {
  // выставляем класс как пустую строку
  //     td.className = "";
  //   });
  // }

  //* рефакторинг +.
  /** Метод очищает игровое поле от еды. */
  clearFood() {
    document.querySelector(".food").classList.remove("food");
  }

  addBoard() {
    const gameTbl = document.querySelector(".gameTbl");
    gameTbl.classList.add("gameBoard");
  }

  addBoardSup() {
    const gameTbl = document.querySelector(".gameTbl");
    gameTbl.classList.add("gameBoardSup");
  }

  //* рефакторинг +.
  /** Метод очищает игровое поле от змейки. */
  clearSnake() {
    const tdElems = document.querySelectorAll(".snakeBody");
    tdElems.forEach(function (td) {
      td.classList.remove("snakeBody");
    });
  }

  /**
   * Получаем набор тегов td, представляющих тело змейки.
   * @param {Array} bodyCoords массив объектов с координатами
   ** рефакторинг +.
   * @throws {Error} если координаты не будут переданы, то будет выброшена ошибка
   * @returns {HTMLTableCellElement[]}
   ** рефакторинг -.
  // @returns {HTMLTableCellElement[]|null} возвращается массив тегов td (HTMLTableCellElement - тег td) если были переданы координаты, иначе null.
   */
  getSnakeBodyElems(bodyCoords) {
    // если в массиве длина равна 0, он пуст
    if (bodyCoords.length === 0) {
      //* рефакторинг +.
      // выдаст ошибку
      throw new Error("Не переданы координаты тела змейки.");
    }

    // если прошли проверку выше, создаем массив, в который поместим теги
    let bodyElems = [];
    //* рефакторинг ~.
    // перебираем массив
    for (let coordinate of bodyCoords) {
      // перемен. td = в метод getCellEl (получить элемент ячейки) передаем коорд Х и Y. получаем теги "td"
      let td = this.getCellEl(coordinate.x, coordinate.y);
      // в массив , в конец, добавляем
      bodyElems.push(td);
    }
    // возращаем массив из тегов "td"
    return bodyElems;
  }
  //* рефакторинг -. не надо лишнего null т.к. есть проверка выше
  // иначе ничего
  // return null;
  // }

  /**
   * Получаем ячейку таблицы.
   * @param {number} x координата по оси х.
   * @param {number} y координата по оси y.
   * @returns {HTMLTableCellElement} тег td
   */
  getCellEl(x, y) {
    // возвращаем Nный  (переданый) элемент  "tr" и "td" (в виде ссылки). таким образом мы будем получать эту ячейку (тег)
    // скажем первый тег "tr" в нем первый тег "td"
    return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
  }

  //! ??? Настройки - скорость, бортик, супер бортик, препятствия, голод, обманки, отрава, время еды

  /**
   * Метод проверяет съела ли змейка еду.
   * @returns {boolean} true если змейка находится на еде, иначе false.
   */
  // `голова на еде`
  //* рефакторинг +. переименовка метода isHeadOnFood(`это голова на еде`) в более понятный didSnakeEatFood (`ела ли змея еду`)
  didSnakeEatFood() {
    // у еды (таблица(тег td) с классом .food) проверим класслист содержит (contains) ли он змейку (класс snakeBody)
    // если змейка зашла на еду, тогда будут 2 класса (food, snakeBody)
    return this.boardEl.querySelector(".food").classList.contains("snakeBody");
  }

  //* рефакторинг -. нет изза удален класса Food.js
  /**
   * Метод рисует еду на игровом поле.
   * @param {Object} coords будущее расположение еды на поле
   * @param {number} coords.x координата x
   * @param {number} coords.y координата y
   */
  // принимает рандомные координаты от setNewFood() {}, и дает им класс food
  // renderFood(coords) {
  // перемен. foodCell = получаем ячейку таблицы (getCellEl) по принятым коорд
  //   const foodCell = this.getCellEl(coords.x, coords.y);
  // приписываем класс
  //   foodCell.classList.add("food");
  // }

  //* рефакторинг +. случайные генер. заместо generateRandomCoordinates() из Food.js(брали случ коорд в цикле, из них брали тег td, провер нет ли в нём змейки - не оптим изза циклов).
  /**
   * Метод возвращает тег td у которого нет класса snakeBody или food
   * @returns {HTMLTableCellElement}
   */
  getRandomEmptyTd() {
    // в перем = получ все теги td у которых нет .snakeBody и .food. получ изначально пустые классы
    const emptyTdElements = document.querySelectorAll(
      "td:not(.snakeBody):not(.food)"
    );
    // в перем = у пуст. тегов берем случ. число * на ограничитель(длинна массива - 1) и обрас. дробн. часть. получим случ. индекс тега td
    const randomEmptyTd =
      emptyTdElements[Math.floor(Math.random() * (emptyTdElements.length - 1))];
    return randomEmptyTd;
  }

  //* рефакторинг +. весь функ-ал еды. Удален целый класс Food.js т.к. на каждом ходе теперь уже не надо очищать игр поле и снова ставить еду на место, то и нет необходимости хранить объект с состоянием координат еды. еда очищаеться только если её ест змейка. тогда какому нить тегу td присвоим класс food
  /**
   * Метод устанавливает новое случайное положение еды на игровом
   * поле.
   */
  renderNewFood() {
    // получ случайный пустой тег td
    const emptyTd = this.getRandomEmptyTd();
    // даём .food. класс удалится если змейка его съест. если съест, снова выз renderNewFood()
    emptyTd.classList.add("food");
  }

  /**
  //  // *@deprecated Метод больше не используется, т.к. теперь змейка может проходить через стены.
   *
   * Является ли следующий шаг, шагом в стену.
   * @param {Object} nextCellCoords - координаты ячейки, куда змейка собирается сделать шаг.
   * @param {number} nextCellCoords.x
   * @param {number} nextCellCoords.y
   * @returns {boolean}
   */
  // в таблице нумерация идет с 1. с правого верхнего края. по гориз Х, по вертик Y
  isNextStepToWall(nextCellCoords) {
    // переменная nextCell = получаем ячейку таблицы по коорд
    let nextCell = this.getCellEl(nextCellCoords.x, nextCellCoords.y);
    return nextCell === null;
    // если коорд идентичны null
    // if (nextCell === null) {
    //   // возврат истина
    //   return true;
    // }
    // // иначе ложь
    // return false;
  }
}

//* рефакторинг -. удален целый класс
// т.к. на каждом ходе теперь уже не надо очищать игр поле и снова ставить еду на место, то и нет необходимости хранить объект с состоянием координат еды. еда очищаеться только если её ест змейка. тогда какому нить тегу td присвоим класс food
// class Food {
//   constructor() {
//     // коорд где храниться еда
//     this.x = null;
//     this.y = null;
//   }

//   /**
//    *! Метод init получает другие игровые объекты, которые нужны ему для работы.
//    * @param {Settings} settings объект настроек
//    * @param {Snake} snake объект змейки
//    * @param {Board} board объект игрового поля
//    */
//   //! через метод init мы будем передовать в какойто объект сылки на др объекты.
//   //! 1 Мы так конролим от чего зависит наш файл. Видно в самом init
//   //! 2 Более низкая связаность файлов, благодаря собственым свойствам (this.settings,this.board и пр.)
//   // настройки - чтоб знала размеры игрвого поля и не появилась за его пределами; змейка - чтоб еда не появилась на ней; игровое поле - чтоб отрисовала еду
//   init(settings, snake, board) {
//     this.settings = settings;
//     this.snake = snake;
//     this.board = board;
//   }

//   /**
//    *! Метод устанавливает новое случайное положение еды на игровом поле.
//    */
//   setNewFood() {
//     // перемен. coords = генерируем случайные коорд с едой
//     const coords = this.generateRandomCoordinates();
//     // игровому полю передает коорд для отрисовки
//     this.board.renderFood(coords);
//   }

//   /**
//    *! Метод устанавливает на игровом поле еду по текущим координатам.
//    */
//   setFood() {
//     // в метод renderFood предает коорд еды
//     this.board.renderFood(this);
//   }

//   /**
//    *! Метод генерирует новый объект еды со случайным положением на игровом поле
//    * @returns {Food}
//    */
//   generateRandomCoordinates() {
//     while (true) {
//       //! получаем коорд Х
//       // this.x = случайное число (Math.random()(случайное число от 0 до 1, 1 не включая)) умножаем на число колонок (this.settings.colsCount)(чтоб не выходило за пределы поля), прибавляем 1 (для начала - нумерация начинаеться с 1, нет нулевого элемента, и для конца(захватить последнию колонку)) и отбрасываем дробную часть (Math.floor)
//       this.x = Math.floor(Math.random() * this.settings.colsCount + 1);
//       //! получаем коорд Y
//       this.y = Math.floor(Math.random() * this.settings.rowsCount + 1);
//       // по этим коорд получим ячейку
//       let cell = this.board.getCellEl(this.x, this.y);
//       // проверяем ячейку на присутствие значений
//       if (cell === null) {
//         // если их нет, цикл запускается заново
//         continue;
//       }
//       // проверяем не явлеется ли она телом змейки
//       if (cell.classList.contains("snakeBody")) {
//         continue;
//       }
//       // возрашает рандом. коорд. еды
//       return this;
//     }
//   }
// }

class Game {
  //! this везде (почти) указывает на объект в котом находиться. здесь Game
  constructor() {
    // возвращаемый идентефикатор функции SetInterval
    this.tickIdentifier = null;
    // ссылка на div id=message
    this.messageEl = document.getElementById("message");
  }

  /**
   * Метод получает другие игровые объекты, которые нужны ему для работы.
   * @param {Settings} settings
   * @param {Status} status
   * @param {Board} board
   * @param {Snake} snake
   * @param {Menu} menu
   * @param {Score} score
   //* рефакторинг -. класс удалён
   //  @param {Food} food
   */
  //! через метод init мы будем передовать в какойто объект сылки на др объекты.
  //! 1 Мы так конролим от чего зависит наш файл. Видно в самом init
  //! 2 Более низкая связаность файлов, благодаря собственым свойствам (this.settings,this.board и пр.)
  init(settings, status, board, snake, menu, score) {
    this.settings = settings;
    this.status = status;
    this.board = board;
    this.snake = snake;
    this.menu = menu;
    this.score = score;
  }

  //* рефакторинг -. частичный перенос метода в Controls.js, чтоб не было растянутости метода
  /**
   * Метод назначает обработчики на события клика на кнопки "Старт", "Пауза", а также на стрелки на клавиатуре.
   */
  // run() {
  //  this.score.setToWin(this.settings.winLength);
  // у объекта game по ссылке на menu вызываем метод addButtonsClickListeners, которая передает туда функции
  //   this.menu.addButtonsClickListeners(
  // ссылка на функцию старт
  // метод bind (привязывать) создает такую же функц что перед ним(сейчас start), но для того что передаем в нём(сейчас объект Game)
  // в результате вернёться функция "f bound start()".bound -связаный. привязаный this
  //(bind(this)жестко привязывает к Game и тут же передаеться в метод addButtonsClickListeners)
  // this указывает на то кто вызывает функцию
  //это нужно для дальнейшего использования в Game, потому что функцию start вызывает кнопка startBtnEl из объекта Menu.
  //     this.start.bind(this),
  // ссылка на  функц пауза
  //     this.pause.bind(this)
  //   );
  // слушаем событие keydown (нажатие "на кнопку вниз") - выполн функц pressKeyHandler(направляет змейку по кнопкам), bind(this)(привязанную к Game)
  //   document.addEventListener("keydown", this.pressKeyHandler.bind(this));
  // }

  /**
   * Метод запускает игру.
   */
  start() {
    // если статус "на паузе"
    if (this.status.isPaused()) {
      // ставим статус что "играть"
      this.status.setPlaying();
      console.log("start");
      // перемен tickIdentifier = вызов метода setInterval (вызов функц через интервал), для фун.doTick, через 1 сек деленую на скорость змейки.
      this.tickIdentifier = setInterval(
        // метод setInterval будет вызывать объект windows, но для дальнейшей работы, методом bind, создаем новую функцию doTick, в самом Game
        this.doTick.bind(this),
        // вызываем через каждую секунду делённую на скорость. чем больше скорость змейки, тем чаше обновляеться изменения на поле
        1000 / this.settings.speed
      );
    }
  }

  /**
   * Метод ставит игру на паузу.
   */
  // императивный код(говорим как делать, по шагам)
  pause() {
    //если статус "играем"
    if (this.status.isPlaying()) {
      // ставим статус "пауза"
      this.status.setPaused();
      console.log("paus");
      //* рефакторинг +. более понятное назв функции(вызов зациклиного обновления)
      this.stopGame();
      //* рефакторинг -. оборачиваем вызов зациклиного обновления в отдельную функц stopGame
      // останавливаем игру (остановл вызов фун tickIdentifier)
      // clearInterval(this.tickIdentifier);
    }
  }

  /**
   * Метод устанавливает границы поля
   */
  speeding() {
    // for (let x = 0; x < 100; x++) {
    // if (start()) {
    // if (this.status.isPaused() || this.status.setPaused()) {
    // if ((this.status.condition = "paused")) {
    // ??? не раб изменен стиля после повтор нажатия
    if (this.status.condition === "paused") {
      this.board.addBoard();
      console.log("вкл борт");
      // ??? не раб вкл метода при нажат на кнопку
      this.snake.stepZero();
    }
    // if (pause()) {
    // if (this.status.isPlaying() || this.status.setPlaying()) {
    // if ((this.status.condition = "playing")) {
    if (this.status.condition === "playing") {
      this.board.addBoardSup();
      console.log("вкл суп");
      this.snake.stepZero();
    }
    // }
    // if (this.status.setSpeed()) {
    // this.status.setSpeed();
    // this.board.addBoard();
    // this.snake.stepZero();
    // }
  }

  /**
   * Этот метод запускается каждую секунду и осуществляет:
   * 1. перемещение змейки
   * 2. проверяет проиграна/выиграна ли игра
   * 3. увеличивает размер змейки если она ест еду
   * 4. заново отрисовывает положение змейки и еды
   *  Двигает всё игру
   */
  // только декларативный код(говорим что делать, а не как делать )
  doTick() {
    // метод меняет координаты змейки(делает шаг)
    this.snake.performStep();

    // ??? не раб вкл метода при нажат на кнопку
    // this.snake.stepZero();

    //??? не раб , перебивает паузу, не раб кнопка проверка на вхождение в стенку
    // if (this.board.addBoard() || this.board.addBoardSup()) {
    // if (this.status.isSpeed()) {
    // if (this.status.setSpeed()) {
    //   // this.isGameLost();
    //   // this.snake.stepZero();
    // this.snake.stepZero();
    // }

    // if (this.isGameLost()) {
    //   return;
    // }

    // if (this.status.isSpeed()) {
    //   this.snake.stepZero();
    // }

    //! ??? не раб - голод, ограничить время без еды (таймер, кол-во)

    //! ??? Настройки - скорость, бортик, супер бортик(появл. проходы), препятствия, голод, обманки, отрава, время еды

    //* рефакторинг -.на каждом шаге вывод текущего счёта. нет смысла т.к. счёт меняется когда змейка ест
    // this.score.setCurrent(this.snake.body.length);
    //* рефакторинг +. проверка наступания на себя, если да то, остановка игры, вывод смс проигрыша, возвр. результ
    if (this.isSnakeSteppedOntoItself()) {
      this.stopGame();
      this.setMessage("Вы врезались в себя");
      return;
    }
    //* рефакторинг +. е/и змейка съела еду, то увели. тело, отрисов. текущ. счёт
    if (this.board.didSnakeEatFood()) {
      this.snake.increaseBody();
      this.score.renderCurrentScore(this.snake.body.length);
      //* рефакторинг +. проверка идет в цикле, где змейка уже съела еду
      // если вернулась истина из метода isGameWon(выйгрышная длина), то остановка игры, вывод смс победы, возвр. результ
      if (this.isGameWon()) {
        this.stopGame();
        this.setMessage("Вы выиграли");
        return;
      }
      //* рефакторинг +. проверка идет в цикле, где змейка уже съела еду
      // текущ. еду очищаем, ставим новую еду
      this.board.clearFood();
      this.board.renderNewFood();
      //* рефакторинг -.
      // в board проверяем `находить голова на еде`
      // if (this.board.didSnakeEatFood()) {
      // увеличиваем тело змейки
      // this.snake.increaseBody();
      // ставим новую еду
      // this.food.setNewFood();
    }
    //* рефакторинг +. на каждом шагу очищаем змейку, отрисовыем по новой т.к. коорд. поменялись
    this.board.clearSnake();
    this.board.renderSnake();
    //* рефакторинг -.
    // очищает игровое поле
    // this.board.clearBoard();
    // выставляет еду
    // this.food.setFood();
  }

  //* рефакторинг +. ввели принцип единой ответствености
  /**
   * Метод проверяет выиграна ли игра.
  // юлоше не нужно - останавливает игру, выводит сообщение о выигрыше.
   * @returns {boolean} если длина змейки достигла длины нужной для выигрыша, тогда true, иначе false.
   */
  isGameWon() {
    //* рефакторинг +. теперь только проверка победы
    return this.snake.body.length == this.settings.winLength;
    //* рефакторинг -.
    // если у змейки длина координат равна победной длине из настроек
    // if (this.snake.body.length == this.settings.winLength) {
    // останавливает обновления всего, игру
    // clearInterval(this.tickIdentifier);
    // в div с id=message выводит смс
    // this.setMessage("Вы выиграли");
    //   return true;
    // }
    // return false;
  }

  /**
   * Метод проверяет съела ли змейка сама себя.
   * @returns {boolean}
   */
  isSnakeSteppedOntoItself() {
    // есть альтернативное решение гдет в дз уроках
    let cellArr = this.snake.body.map(function (cellCoords) {
      return cellCoords.x.toString() + cellCoords.y.toString();
    });
    let head = cellArr.shift();
    //* рефакторинг +. проверяем наступили ли на себя
    return cellArr.includes(head);
    //* рефакторинг -.
    // е/и наступили на себя
    // if (cellArr.includes(head)) {
    // тогда останов игру
    //   clearInterval(this.tickIdentifier);
    // вывод смс
    //   this.setMessage("Вы проиграли");
    //   return true;
    // }
    // return false;

    /*
        [
            {x: 1, y: 1}
            {x: 1, y: 2}
            {x: 1, y: 3}
        ]
        [
            "11", "12", "13"
        ]
        */
  }

  stopGame() {
    clearInterval(this.tickIdentifier);
  }

  //* рефакторинг -. Устаревший метод
  /**
  // // * @deprecated Метод больше не используется, т.к. теперь змейка может проходить через стены.
   *
   * Метод проверяет врезались ли в стену, останавливает игру, выводит смс о проигрыше.
   * @returns {boolean} если мы шагнули в стену, тогда true, иначе false.
   */
  isGameLost() {
    // если мы шагнули в стену
    // в board в метод isNextStepToWall передаём коорд тела змейки равные [0]
    if (this.board.isNextStepToWall(this.snake.body[0])) {
      // if (this.board.isNextStepToWall === this.snake.body[0]) {
      // return this.snake.body.length == this.settings.winLength;
      // clearInterval(this.tickIdentifier);
      this.stopGame();
      // вывод сообщения через метод setMessage
      this.setMessage("Вы врезались в стену");
      return true;
    }
    // if (this.isGameWon()) {
    //   this.stopGame();
    //   this.setMessage("Вы выиграли");
    //   return;
    // }
    // иначе ложь
    return false;
  }

  /**
   * В зависимости от нажатой кнопки (вверх, вниз, влево, вправо) будет вызываться соответствующий метод.
   * @param {KeyboardEvent} event
   */
  pressKeyHandler(event) {
    // переключаеться (switch) при событии (event) на клавише (key)
    switch (event.key) {
      // если "стрелка вверх"
      case "ArrowUp":
        // у змейкм вызываем метод changeDirection и передаём направление
        this.snake.changeDirection("up");
        break;
      case "ArrowDown":
        this.snake.changeDirection("down");
        break;
      case "ArrowLeft":
        this.snake.changeDirection("left");
        break;
      case "ArrowRight":
        this.snake.changeDirection("right");
        break;
    }
  }

  /**
   * Метод выводит сообщение на странице.
   * @param {string} text
   */
  // принимает параметр
  setMessage(text) {
    // обращаеться к div id=message и вписывает принятый текст
    this.messageEl.innerText = text;
  }
}

// ждем когда всё загрузится и потом выполняем
window.addEventListener("load", () => {
  // создание объектов классов
  // объект(класс) настроек
  const settings = new Settings();
  // статус
  const status = new Status();
  // объект змейки
  const snake = new Snake();
  // объект (класс) игрового поля
  const board = new Board();
  // объект контроль, элементы управления(бывший меню). отвечает за работу кнопок(старт, пауза), счётчика и пр.
  const controls = new Controls();
  // еда. класс удален
  // const food = new Food();
  // объект игры
  const game = new Game();
  // счёт игры
  const score = new Score();

  // Передача настроек
  //* рефакторинг +. свои настр. в перемен
  const initialSettings = { speed: 5, winLength: 7 };

  //  в классе settings метод init (установка начальных значений). в виде объекта передаем настройки для нашей игры(скорость, длина для выйгрыша)
  settings.init(initialSettings);
  //* рефакторинг -. терь передае через переменную
  // settings.init({ speed: 5, winLength: 5 });
  // змейке перед настройки
  snake.init(settings);
  // передаем в board через init, настройки и змейку
  board.init(settings, snake);
  //* рефакторинг -. класс удалён. в food передаем настройки,змейку и игр поле
  // food.init(settings, snake, board);
  // в game передаем ссылки на объекты
  game.init(settings, status, board, snake, controls, score);
  //
  score.init(settings);
  //* рефакторинг +. в контрол передаем класс game
  controls.init(game);

  //* рефакторинг +. запуск
  // отрисовываем игровое поле
  board.renderBoard();
  //* рефакторинг +. отрисов. змейку
  board.renderSnake(snake);
  // board.renderSnake();
  //* рефакторинг +.
  score.renderPointsForWin(initialSettings.winLength);
  //* рефакторинг +. создаем новую еду
  board.renderNewFood();
  // food.setNewFood();
  //* рефакторинг +.
  score.renderCurrentScore(snake.body.length);
  //* рефакторинг +. в классе controls(эл. управл.), вызов слуш.событ.
  controls.addControlsEventListeners();
  //* рефакторинг -. была часть запусков, расбросаное управление
  // метод обработчика сотытия клика
  // game.run();

  // score.renderCurrentSpeed(initialSettings.winLength);
  score.renderCurrentSpeed(initialSettings.speed);
});

// изучить принципы SOLID

// Принцип единственной ответственности (Single Responsibility Principle)
// Существует лишь одна причина, приводящая к изменению класса.
// Один класс должен решать только какую-то одну задачу.

// Принцип открытости/закрытости (Open-closed Principle)
// Программные сущности должны быть открыты для расширения, но закрыты для модификации.
// Программные сущности (классы, модули, функции и прочее) должны быть расширяемыми без изменения своего содержимого.

// Принцип подстановки Барбары Лисков (Liskov Substitution Principle)
// Функции, использующие указатели ссылок на базовые классы, должны уметь использовать объекты производных классов, даже не зная об этом.
// Попросту говоря: подкласс/производный класс должен быть взаимозаменяем с базовым/родительским классом.

// Принцип разделения интерфейса (Interface Segregation Principle)
// Нельзя заставлять клиента реализовать интерфейс, которым он не пользуется.
// Это означает, что нужно разбивать интерфейсы на более мелкие, лучше удовлетворяющие конкретным потребностям клиентов.

// Принцип инверсии зависимостей (Dependency Inversion Principle)
// Высокоуровневые модули не должны зависеть от низкоуровневых. Оба вида модулей должны зависеть от абстракций.
// Абстракции не должны зависеть от подробностей. Подробности должны зависеть от абстракций.
// Проще говоря: зависьте от абстракций, а не от чего-то конкретного.

// Инкапсуляция - размещение в одном компоненте/классе/файле/структуре данных/методов/функций/свойств, которые с ними работают(в Board размещать только то относится к полу(таблица, игровое поле, отрисовка и очистка его, отрисовка змейки и еды, проверка на аварию с полем))

//! если в файле только один класс то его имя пишут с большой буквы (хорошая практика  - один файл - один класс)

//! this. везде (почти) указывает на объект в котом находиться. здесь Board

//! через метод init мы будем передовать в какойто объект сылки на др объекты.
//! 1 Мы так конролим от чего зависит наш файл. Видно в самом init
//! 2 Более низкая связаность файлов, благодаря собственым свойствам (например в Board.js - this.settings,this.board)

//! ??? Настройки - скорость, бортик, супер бортик(появл. проходы), препятствия, голод, обманки, отрава, время еды

//! ещё одна змейка. файлы в папке змейка.www.
//??? не раб - не проверял что и как. взять различ. цвет головы и тела
// https://itproger.com/news/sozdanie-igri-zmeyka-na-chistom-javascript-i-html5
// https://www.youtube.com/watch?v=hM2vvcXBV84

//* рефакторинг +. переимен Menu. терь здесь элементы управления
class Controls {
  constructor() {
    // получаем button id=startBtn
    this.startBtnEl = document.getElementById("startBtn");
    // получаем button id=pauseBtn
    this.pauseBtnEl = document.getElementById("pauseBtn");

    this.speedBtnEl = document.getElementById("speedBtn");
  }

  //* рефакторинг +. перед. объ Game со start и pause
  /**
   * @param {Game} game
   */
  init(game) {
    this.game = game;
  }

  /**
   //* рефакторинг +. назнач. слуш.соб. для эл. управл.
   * Метод устанавливает обработчики событий на клики по кнопкам "старт" и "пауза", а также на стрелки перемещения змейки.
   //* рефакторинг -.
   // // Метод назначает переданные функции в качестве обработчиков событий клика на кнопки "Старт" и "Пауза".
   // // @param {Function} startBtnClickHandler
   // // @param {Function} pauseBtnClickHandler
   */
  //* рефакторинг +. не приним. функц. из вне, т.к. передали сюда объ. game с этими функциями(старт,пауза)
  addControlsEventListeners() {
    //* рефакторинг -. растянутая логикс на 2 класса
    // // принимает в два аргумента (start- и pause- BtnClickHandler(обработчики клика кнопок старт и пауза)), параметра из game (в виде функций) и запускает их при клике
    // addButtonsClickListeners(startBtnClickHandler, pauseBtnClickHandler)

    //* рефакторинг +. у кнп. старт слуш. клик, у получен. функц старт из объ game с жёстко привязаным this к game
    this.startBtnEl.addEventListener("click", this.game.start.bind(this.game));
    //* рефакторинг -.
    // // кнопке старт говорим что при клике вызывай эту функцию startBtnClickHandler
    // this.startBtnEl.addEventListener("click", startBtnClickHandler);
    //* рефакторинг +. рефакторинг +. у кнп. пауза слуш. клик, у получен. функц старт из объ game с жёстко привязаным this к game
    this.pauseBtnEl.addEventListener("click", this.game.pause.bind(this.game));
    //* рефакторинг -.
    // // кнопке пауза назнач. обработку клика для запуска функции pauseBtnClickHandler
    // this.pauseBtnEl.addEventListener("click", pauseBtnClickHandler);

    // ??? не раб кнопка
    this.speedBtnEl.addEventListener(
      "click",
      this.game.speeding.bind(this.game)
    );

    //* рефакторинг +.
    // слушаем событие keydown (нажатие "на кнопку вниз") - выполн функц pressKeyHandler(направляет змейку по кнопкам), bind(this)(привязанную к Game)
    // document.addEventListener("keydown", this.pressKeyHandler.bind(this));
    document.addEventListener(
      "keydown",
      this.game.pressKeyHandler.bind(this.game)
    );
  }
}

class Score {
  constructor() {
    this.currentEl = document.querySelector(".current");
    this.toWinEl = document.querySelector(".toWin");
    this.speedEl = document.querySelector(".curSpeed");
  }

  /**
   * @param {Settings} settings настройки игры
   */
  init(settings) {
    this.settings = settings;
  }

  /**
   * Метод устанавливает текущий счет игрока.
   ** рефакторинг +.передаём счёт
   * @param {string} score
   ** рефакторинг -.
   * @param {string} text
   */
  //* рефакторинг +. более информативное имя - `отрисовать текущий счёт`
  renderCurrentScore(score) {
    //* рефакторинг -.
    // setCurrent(text) {
    //* рефакторинг +. передаём счёт в div с кл. .current
    this.currentEl.textContent = score;
    //* рефакторинг -.
    // this.currentEl.textContent = text;
  }

  /**
   * Метод устанавливает количество очков, необходимых
   * для выигрыша.
   ** рефакторинг +. передаём очки
   * @param {string} points
   ** рефакторинг -.
   * @param {string} points
   */
  //* рефакторинг +. более информативное имя - `отрисовать очки за победу`
  renderPointsForWin(points) {
    //* рефакторинг -.
    // setToWin(text) {
    //* рефакторинг +. передаём очки div с кл. .toWin
    this.toWinEl.textContent = points;
    //* рефакторинг -.
    // this.toWinEl.textContent = text;
  }

  renderCurrentSpeed(speed) {
    this.speedEl.textContent = speed;
  }
}

//! если в файле только один класс то его имя пишут с большой буквы (хорошая практика  - один файл - один класс)
class Settings {
  //! this. везде (почти) указывает на объект в котором находиться. здесь Settings
  /**
   * @param {Object} params - Парметры игры.
   * @param {number} params.rowsCount - количество строк игрового поля.
   * @param {number} params.colsCount - количество колонок игрового поля.
   * @param {number} params.speed - скорость перемещения змейки.
   * @param {number} params.winLength - какую длину надо наесть, чтобы выиграть.
   * @throws {Error} если переданы не верные настройки выбрасывается
   * соответствующая ошибка.
   */
  // один метод на весь класс. объект settings.init({}) будет передоваться в param
  // в метод init(инициализация) принимаем параметры из main
  //! через метод init мы будем передовать в какойто объект сылки на др объекты.
  //! 1 Мы так конролим от чего зависит наш файл. Видно в самом init
  //! 2 Более низкая связаность файлов, благодаря собственым свойствам (здесь param)
  //* рефакторинг +. синтаксис деструкторизации - позвол вызывать метод без передачи парам(иначе undefined)
  // {... .....} = переданые сво-ва объ., формируются в параметры функции. эти значения по умолч. перзапишут то что есть в объ которому передаём
  // (= {} если ничего не передано будет пустой объект)
  init({ rowsCount = 21, colsCount = 21, speed = 1, winLength = 50 } = {}) {
    //* рефакторинг -.
    // init(params) {
    // объект настроек игры по умолчанию
    // rows и cols - строки и колонки табл
    // speed - скорость
    // winLength - длина для победы
    // let defaultParams = {
    //   rowsCount: 21,
    //   colsCount: 21,
    //   speed: 2,
    //   winLength: 50,
    // };
    // в настройки по умолчанию заменяем передаными настройками.
    //  метод Object.assign (копирует с заменой(с право на лево)) из params в defaultParams
    // speed по умолч: было 2 стало 5, winLength по умолч: было 50 стало 5
    // Object.assign(defaultParams, params);

    // Проверки строк на соответствие тем что нужно
    // проверка на строки
    //* рефакторинг +. т.к.переданые параметры стали параметрами функции, то к ним нет необходимости обращаться через объект (defaultParams.rowsCount). более локанично
    if (rowsCount < 10 || rowsCount > 30) {
      throw new Error(
        "Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30]."
      );
    }
    //* рефакторинг -.
    // если кол-во строк  меньше 10 или больше 30 выбрасываем ощибку
    // if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 30) {
    // если прошли проверку, то количество строк, сохраняем в свойство (rowsCount) объекта (settings) настроек
    // this.rowsCount = defaultParams.rowsCount;

    // проверка на колонки
    //* рефакторинг +.
    if (colsCount < 10 || colsCount > 30) {
      throw new Error(
        "Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30]."
      );
    }
    //* рефакторинг -.
    // if (defaultParams.colsCount < 10 || defaultParams.colsCount > 30) {
    // this.colsCount = defaultParams.colsCount;

    // проверка на скорость
    //* рефакторинг +.
    if (speed < 1 || speed > 10) {
      throw new Error(
        "Неверные настройки, значение speed должно быть в диапазоне [1, 10]."
      );
    }
    //* рефакторинг -.
    // if (defaultParams.speed < 1 || defaultParams.speed > 10) {
    // this.speed = defaultParams.speed;

    // проверка на выйгрышную длину
    //* рефакторинг +.
    if (winLength < 2 || winLength > 50) {
      throw new Error(
        "Неверные настройки, значение winLength должно быть в диапазоне [5, 50]."
      );
    }
    //* рефакторинг -.
    // if (defaultParams.winLength < 5 || defaultParams.winLength > 50) {
    // this.winLength = defaultParams.winLength;

    // основная логика, присваивание
    this.rowsCount = rowsCount;
    this.colsCount = colsCount;
    this.speed = speed;
    this.winLength = winLength;
  }
}

class Snake {
  //! this. везде (почти) указывает на объект в котом находиться. здесь Snake
  constructor() {
    // массив с возможными направлениями змейки
    this.possibleDirections = ["down", "up", "left", "right"];

    // массив с координ. змейки (верхн. левый угол х0, у0)
    this.body = [
      {
        x: 1,
        y: 1,
      },
    ];

    // направл. по умолчанию - вниз
    this.direction = "down";
  }

  /**
   * @param {Settings} settings настройки игры
   */
  init(settings) {
    this.settings = settings;
  }

  /**
   * Меняем направление движения.
   ** рефакторинг ~. direction на newDirection
   * @param {string} newDirection направление может быть down, up, left, right.
   * @throws {Error} при передаче не корректного направления выбрасывается ошибка.
   */
  // принимает направления от pressKeyHandler из Game
  changeDirection(newDirection) {
    // если переданое направление нет среди possibleDirections, не includes (не включает в себя)
    if (!this.possibleDirections.includes(newDirection)) {
      // выбрасываем (throw) новую ошибку
      throw new Error(
        "Передано не верное направление. Вы передали: " + newDirection
      );
    }
    // в метод isPassedOppositeDirection передаем (переданое направление). если переданое направ. являеться противоположным, возрашаеться истина
    if (this.isPassedOppositeDirection(newDirection)) {
      // return (вернуть) не позволит выполнится коду ниже
      return;
    }
    // в свойство direction (направление) записываем новое направление(то что передали)
    this.direction = newDirection;
  }

  /**
   * Метод проверяет, является ли переданное направление, противоположным тому куда сейчас движется змейка.
   * @param {string} newDirection новое направление, может быть up, down, right, left.
   * @returns {boolean} true если новое направление противоположно текущему, иначе false.
   */
  // `передано в противоположном направлении` (с переданым параметром)
  isPassedOppositeDirection(newDirection) {
    // если направление = "вниз" и перед.направ. = "верх"
    if (this.direction == "down" && newDirection == "up") {
      // возврашаем истину.
      return true;
    }
    if (this.direction == "up" && newDirection == "down") {
      return true;
    }
    if (this.direction == "left" && newDirection == "right") {
      return true;
    }
    if (this.direction == "right" && newDirection == "left") {
      return true;
    }
    // если нет противоположных направлений, возвращяем ложь
    return false;
  }

  //! ??? Настройки - скорость, бортик, супер бортик, препятствия, голод, обманки, отрава, время еды

  /**
   * Метод осуществляет шаг змейки. Добавляет ячейку перед существующим положением головы и удаляет одну ячейку в хвосте.
   */
  // `выполнить шаг`
  performStep() {
    // берем текущие коорд головы (в массиве первый элемент[0])
    let currentHeadCoords = this.body[0];
    //* рефакторинг +. синтаксис деструкторизации. коротко.
    let newHeadCoords = { ...currentHeadCoords };
    //* рефакторинг -. тоже самое только длинно
    // копируем их в переменную из объ. currentHeadCoords
    // let newHeadCoords = {
    //   x: currentHeadCoords.x,
    //   y: currentHeadCoords.y,
    // };
    // смотрим какое направление
    switch (this.direction) {
      // если "вниз" то по Y + 1
      case "down":
        newHeadCoords.y++;
        break;
      // если "вверх" то - 1 по коорд Y
      case "up":
        newHeadCoords.y--;
        break;
      // если в "лево" по X коорд - 1
      case "left":
        newHeadCoords.x--;
        break;
      // если в "право" по X коорд + 1
      case "right":
        newHeadCoords.x++;
        break;
    }

    // ??? не раб вкл метода при нажат на кнопку
    // this.stepZero(){
    // this.snake.stepZero(){
    if (newHeadCoords.x > this.settings.colsCount) {
      newHeadCoords.x = 1;
    }
    //если голова уходит за нижний край
    if (newHeadCoords.y > this.settings.rowsCount) {
      newHeadCoords.y = 1;
    }
    //если голова уходит за левый край
    if (newHeadCoords.x == 0) {
      newHeadCoords.x = this.settings.colsCount;
    }
    //если голова уходит за верхний край
    if (newHeadCoords.y == 0) {
      newHeadCoords.y = this.settings.rowsCount;
    }
    // }
    this.stepZero();

    // в dody добавляем в начале (новую ячейку)
    this.body.unshift(newHeadCoords);
    // удаляем в конце(последнию ячейку)
    this.body.pop();
  }

  // ??? не раб вкл метода при нажат на кнопку
  /**
   *! Настройки ухода за стенку
   *
   * @memberof Snake
   */
  stepZero() {
    // берем текущие коорд головы (в массиве первый элемент[0])
    let currentHeadCoords = this.body[0];
    //* рефакторинг +. синтаксис деструкторизации. коротко.
    // копируем коорд. в переменную из объ. currentHeadCoords
    let newHeadCoords = { ...currentHeadCoords };
    // если голова уходит за правый край(коорд. Х > наст. Х, то коорд. стан. 1, т.е. появл. с др. стороны)
    if (newHeadCoords.x > this.settings.colsCount) {
      newHeadCoords.x = 1;
    }
    //если голова уходит за нижний край
    if (newHeadCoords.y > this.settings.rowsCount) {
      newHeadCoords.y = 1;
    }
    //если голова уходит за левый край
    if (newHeadCoords.x == 0) {
      newHeadCoords.x = this.settings.colsCount;
    }
    //если голова уходит за верхний край
    if (newHeadCoords.y == 0) {
      newHeadCoords.y = this.settings.rowsCount;
    }
  }

  /**
   * Метод дублирует в массиве объектов представляющих тело змейки последнюю ячейку, т.е. в массиве в конце оказываются два одинаковых объекта.
   * Когда метод performStep в самом конце удаляет последний элемент массива, он удаляет сдублированный объект, таким образом тело змейки растет.
   */
  //`увеличить тело`
  // императивный код(говорим как делать, по шагам)
  increaseBody() {
    // переменная `последняя ячейка тела` = обрашаемся к массиву body[берем его последний элемент
    // (длина массива - 1(нумерация элементов с 0, потому из длины массива, скажем 3, - 1, будет 2, и это 3 элемент по счету, т.е. 0,1,2 ))]
    let bodyLastCell = this.body[this.body.length - 1];
    //* рефакторинг +.синтаксис деструкторизации. коротко
    let newBodyLastCell = { ...bodyLastCell };
    //* рефакторинг -. тоже самое только длинно
    // в переменную newBodyLastCell записываем коорд последней ячейки из объ. bodyLastCell
    // let newBodyLastCell = {
    //   x: bodyLastCell.x,
    //   y: bodyLastCell.y,
    // };
    // к теле змейки добавляем в конце такую же ячейку
    this.body.push(newBodyLastCell);
  }
}

/** Здесь будет хранится статус игры, например играем мы, завершили или остановлено. */
class Status {
  constructor() {
    // при открытие страницы сразу ставим на паузу
    // this.setPaused();
    this.condition = "paused";
  }

  // Это значит что мы играем.
  // включает игру
  setPlaying() {
    // condition (состояние) играем
    this.condition = "playing";
  }

  //Это значит что игра на паузе.
  setPaused() {
    this.condition = "paused";
  }

  /**
   * @returns {boolean} если мы сейчас играем, тогда true, иначе false.
   */
  // проверяет включена ли игра
  isPlaying() {
    return this.condition === "playing";
  }

  /**
   * @returns {boolean} если сейчас игра на паузе, тогда true, иначе false.
   */
  isPaused() {
    return this.condition === "paused";
  }

  // вкл
  // ??? не раб кнопка
  setSpeed() {
    this.condition = "speedi";
  }
  // провер на вкл

  /**
   *
   *
   * @returns
   * @memberof Status
   */
  isSpeed() {
    if (this.condition === "paused") {
      return this.condition === "speedi";
    }
  }
}

//# sourceMappingURL=maps/app.js.map
