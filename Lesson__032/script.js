// Получаем первого и последнего ребенка в body
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// Тут мы перемещаемся от элемента к его родителю
// console.log(document.querySelector('#current').parentNode);

// Получаем предыдущий элемент родителя. (более новый способ)
// console.log(document.querySelector('#current').parentElement);

// Тут мы подымаемся еще на одного родителя выше.
// console.log(document.querySelector('#current').parentNode.parentNode);

// Получаем текстовую ноду, предыдущего соседа.
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// Получает следующий элемент (ноду) - nextElementSibling
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

const nodes = document.body.childNodes;

// Перебираем все ноды в родителе body и потом при помощи if отфильтровываем все текстовые ноды и потом продолжаем цикл при помощи continue;
for (node of nodes) {
  if (node.nodeName === '#text') {
    continue;
  }

  console.log(node);
}
