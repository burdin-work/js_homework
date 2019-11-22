//>> Task 2.1
// Функция, которая проверяет, является ли строка палиндромом и возвращает соответственно true или false

function isPalindrom(userInput) {
    let result = userInput.split('').reverse().join('') === userInput ? true : false;

    return result
}

// Выполнение функции
let userInput = prompt('Введите строку для проверки: является ли строка палиндромом',0);
console.log(`\nTask 2.1\n---------\n Ответ: ${isPalindrom(userInput)}`);