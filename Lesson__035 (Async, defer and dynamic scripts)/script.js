'use strict';

// <script src="script.js" defer></script>
// defer - не когда не блокирует страницу.
// Сохраняется последовательность загрузки js файлов, по очереди.

// <script src="script.js" async></script>
// async - Загружает скрипты асинхронно (какой загрузиться первым тот и выполниться первым и так далее)

const buttons = document.querySelectorAll('button');
console.log(buttons);

// Динамическое подключение скрипта на страницу.
function onLoadedScript(src) {
  const script = document.createElement('script');
  script.src = src; // Указываем путь (относительно html документа)
  // Динамически загружаемые скрипты ведут себя как async.
  script.async = false; // Отменяем стандартное поведение, теперь скрипт ведет себя как самый обычный скрипт, который добавлен в конец body
  document.body.append(script); // Добавляет элемент в конец body
}

onLoadedScript('./test.js');
