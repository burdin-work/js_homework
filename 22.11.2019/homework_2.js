//>> Task 2.1
// Функция, которая проверяет, является ли строка палиндромом и возвращает соответственно true или false

function isPalindrom(userInput) {
    let result = ( userInput.split('').reverse().join('') === userInput ) ? true : false;

    return result
}

// Выполнение функции
// let userInput = prompt('Введите строку для проверки: является ли строка палиндромом',0);
// console.log(`\nTask 2.1\n---------\n Ответ: ${isPalindrom(userInput)}`);



//>> Task 2.2
// Функция, которая принимает строку и выдает на экран к-во уникальных символов в ней (регистр  не важен)

function showUnique(userString) {
    let list = userString.split('');
    let newList = [];

    for(let el of list){
        if( !newList.includes(el) ){
            newList.push(el);
        }
    }

    return newList.length;
}

let userString = prompt('Введите строку для проверки символов на уникальность',0);
console.log(`\nTask 2.2\n---------\n Количество уникальных символов: ${showUnique(userString)}`);