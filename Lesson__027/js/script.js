'use strict';

// Какое будет выведено значение: let x = 5; alert( x++ ); ? // 5
// Постфиксная форма - так как Сначала стоит X а потом ++ то сначала нам возвращается 5 а потом увеличивается на 1
// Префиксная форма - если бы у нас было ++x то сначала бы увеличилось на 1 а потом вернуло бы нам X === 6

// Чему равно такое выражение: [] + false - null + true ? // NaN
// Когда пустой массив [] + false то пустой массив == '' пустой строке а '' + false == 'false' получается конкатенация.
// 'false' - null == NaN так как это не математическая операция.

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? // 2
// Последовательное присваивание - let x = y = 2; читается с права на лево. сначала y присваиваем 2 а потом y присваиваем в x и === 2

// Чему равна сумма [] + 1 + 2? // 12
// Так как пустой массив === '' то тут конкатенация и получается '12'

// Что выведет этот код: alert( "1"[0] )? // '1'
// тут нулевой индекс строки (пример '123'[1] === 2 отсчет индекса идет от 0)

// Чему равно 2 && 1 && null && 0 && undefined ? // null
// Оператор && останавливается на первом значении false (анализирует код с лева на право)

// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)? // false
// Первый пример !!( a && b ) не равен втором (a && b) потому что первый это boolean (true)

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ? // 3
// Логический оператор && выше чем || и получается что && сработает первым

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? // false
// false потому что это два разных хранилища информации и не важно хранящаяся информация в них похожа.

// Что выведет этот код: alert( +"Infinity" ); ? // Infinity
// стоит унарный плюс и он преобразует строку в число

// Верно ли сравнение: "Ёжик" > "яблоко"? // false
// Идет посимвольное сравнение и у 'яблоко' символов больше (если первые буква похожие то сравнение идет дальше)

// Чему равно 0 || "" || 2 || undefined || true || false ? // 2
// Оператор || останавливается на первом значении true (анализирует код с лева на право)
