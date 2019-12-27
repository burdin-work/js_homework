//>> Task 1.1
// Функция, которая принимает два аргумента , результат - возведение числа в степень (**2 по-умолчанию)

function sup(num, pow = 2) {
    let result = num ** pow;
    return result;
}

// Выполнение функции
let num = + prompt('number?', 0);
let pow = + prompt('power?', 0);

if (pow < 1) {
    alert(`Степень ${pow} не поддерживается, используйте натуральное число`);
} else {
    console.log(`Task 1.1\n---------\n ${num} ** ${pow} = ${sup(num,pow)}\n ${num} ** 2 = ${sup(num)}`);
}



//>> Task 1.2
// Функция выдает список слов в обратном порядке в верхнем регистре + буквы в этих словах в обратном порядке + через дефис

function createReverceUppercaseString(userString) {
    let newString = userString.toUpperCase().split('').reverse().join('').split(' ,').join('-');

    return newString;
}

// Выполнение функции
let userString = prompt('Введите строку для внесения в ней изменений, разделяя слова запятой и пробелом',0);
console.log(`\nTask 1.2\n---------\n Старая строка: ${userString}\n  Новая строка: ${createReverceUppercaseString(userString)}`);



//>> Task 1.3
// Функция трансформирует записанную пользователем в нужном формате строку в объект
function createNewObj(userInput) {
    let newObj = {};
    let newFieldList = userInput.split(', ');

    for (let field of newFieldList) {
        newObj[field.split(':')[0]] = field.split(': ')[1];
    }

    return newObj;
}

// Выполнение функции
let userInput = prompt('Введите строку, используя формат: "значение1: свойство1, значение2: свойство2, ..." для преобразования в объект',0);
console.log(`\nTask 1.3\n---------\n Строка: ${userInput}\n Преобразованный объект:`, createNewObj(userInput));



//>> Task 1.4
// Функция возвращает сумму элементов массива . Массив может содержать любые данные, обрабатываются только числа
function calcSum(someList) {
    let result = 0;
    for (el of someList) {
        if (typeof el === 'number') {
            result += el;
        }
    }
    return result;
}

// Выполнение функции
let someList = ['sdigme', 54, 61, {user: 'Timofey', age: 22}, 11.25, 5, true, 'yes', 6.113];
console.log(`\nTask 1.4\n---------\n Произвольный cписок: ${someList}\n Cумма всех чисел в данном списке: ${calcSum(someList)}`);