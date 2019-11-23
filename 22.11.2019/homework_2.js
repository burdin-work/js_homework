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



