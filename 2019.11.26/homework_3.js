//>> Task 3.1
// Функция, которая сортирует массив с объектами по оценкам, если оценки одинаковые у пары людей - по именам в алфавитном порядке

function createSorting(arr) {

    let newArray = arr.slice();

    newArray.sort(function (a, b) {
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();

        if (nameA < nameB) //сортируем строки по возрастанию
            return -1;

        if (nameA > nameB)
            return 1;

        return 0
    });


    newArray.sort(function (a, b) {
        return a.mark - b.mark
    });


    return newArray.reverse();
}


// Выполнение функции
let arr = [
    {name: 'Michael', mark: 5},
    {name: 'Helga', mark: 4.5},
    {name: 'Dmytro', mark: 4},
    {name: 'Denis', mark: 4},
    {name: 'Helen', mark: 4.5},
    {name: 'Mike', mark: 5},
    {name: 'Max', mark: 5},
    {name: 'Morty', mark: 3}
];

console.log('\nTask 3.1\n---------\n Исходный массив:', arr, '\n Отсортированный массив : ', createSorting(arr));



//>> Task 3.2
//  Обработчик на таблицу
// по клику на ячейку таблицы выдаваёт в консоль текст нажатой ячейки
console.log('\nTask 3.2\n---------\n Содержимое ячейки при клике:');

let listTd = document.getElementsByTagName('td');

for (let el of listTd) {
    el.onclick = function showText() {
        console.log(this.innerHTML);
    }
}



