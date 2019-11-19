// Task 1.1
// Функция, которая принимает два аргумента , результат - возведение числа в степень (**2 по-умолчанию)

function sup(num, pow = 2) {
    let result = num ** pow;
    return result
}

// Выполнение функции
let num = prompt('number?', 0);
let pow = prompt('power?', 0);

if (pow < 1) {
    alert(`Степень ${pow} не поддерживается, используйте натуральное число`);
} else {
    console.log(`Task 1.1\n---------\n ${num} ** ${pow} = ${sup(num,pow)}\n ${num} ** 2 = ${sup(num)}`);
}