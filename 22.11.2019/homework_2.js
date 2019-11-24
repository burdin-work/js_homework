//>> Task 2.1
// Функция, которая проверяет, является ли строка палиндромом и возвращает соответственно true или false

function isPalindrom(userInput) {

    return userInput.split('').reverse().join('') === userInput;
}

// Выполнение функции
let userInput = prompt('Введите строку для проверки: является ли строка палиндромом', 0);
console.log(`\nTask 2.1\n---------\n Ответ: ${isPalindrom(userInput)}`);



//>> Task 2.2
// Функция, которая принимает строку и выдает на экран к-во уникальных символов в ней (регистр  не важен)

function showUnique(userString) {
    let list = userString.split('');
    let newList = [];

    for (let el of list) {
        if (!newList.includes(el)) {
            newList.push(el);
        }
    }

    return newList;
}

// Выполнение функции
let userString = prompt('Введите строку для проверки символов на уникальность', 0);
console.log(`\nTask 2.2\n---------\n Уникальные символы в строке: ${showUnique(userString)}\n Количество уникальных символов: ${showUnique(userString).length}`);



//>> Task 2.3
// Функция, которая принимает на вход массив слов, на выход - список тех из них, которые по 5 символов длиной

function showWords(someList) {
    let newList = [];

    for (el of someList) {
        if (el.length === 5) {
            newList.push(el);
        }
    }

    return newList;
}

// Выполнение функции
let someList = ['пк', 'картина', 'дерево', 'четыре', 'шесть', 'нора', 'хрест'];
console.log(`\nTask 2.3\n---------\n Старый список: ${someList}\n Новый список : ${showWords(someList)}`);



//>> Task 2.4
// Функция, которая принимает на вход массив примитивных типов, на выход - уникальные элемента этого массива

function showOrigin(someArr) {

    let newList = [];

    for (let el of someArr) {
        if (!newList.includes(el)) {
            newList.push(el);
        }
    }

    return newList;
}

// Выполнение функции
let someArr = [2, 'Петя', true, 34, 'memory', 34, 1, 3, 'money', 'memory', 34, 4, 3];
console.log(`\nTask 2.4\n---------\n Старый список: ${someArr}\n Уникальные эллементы в списке: ${showOrigin(someArr)}`);



//>> Task 2.5
// Функция, которая показывает наиболее часто встречающийся элемент(ы) в массиве

// Данная функция возвращает объект:
// 1. эллементы, которые встречаются чаще всего
// 2. количество / сколько раз они встречаются
function showCommon(anyArr) {

    let statistics = {
        elements: [],
        amount: 0
    };

    for (let el of anyArr) {

        if (statistics.elements.includes(el)) continue;

        let counter = 0;
        for (let i of anyArr) {

            if (el === i) {
                counter += 1;
            }
        }

        if (counter > statistics.amount) {
            statistics.elements = [el];
            statistics.amount = counter;
        } else if (counter === statistics.amount) {
            statistics.elements.push(el);
        }

    }

    return statistics;
}

// Выполнение функции
let anyArr = [2, 'Петя', true, 34, 'memory', 34, 1, 3, 'money', 'memory', 34, 4, 3, 1, 1];
console.log(`\nTask 2.5\n---------\n Список: ${anyArr}\n Эллементы, которые встречаются чаще всего: ${showCommon(anyArr).elements.join(',')}\n Количество / сколько раз они встречаются: ${showCommon(anyArr).amount}`);



//>> Task 2.6
// Функция, которая удаляет из массива всё, что при "==" преобразуется в false

function delFalse(anyArray) {

    for (i = 0; i < anyArray.length; i++) {

        if (!anyArray[i]) anyArray.splice(i--, 1);
    }

    return anyArray;
}

// Выполнение функции
let anyArray = [0, 1, 0, 1, 0, null, undefined, NaN, "", 0, null, undefined, NaN, "", 1, 'Петя', 'таблица'];
console.log(`\nTask 2.6\n---------\n Массив до применения функции: ${anyArray}\n Массив после применения функции: ${delFalse(anyArray)}`);