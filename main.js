// Функции - это часть кода которая выполняет какие то действия или вычисление, функцию можно использовать сколько угодно раз и вызывать ее где угодно

// function declaration

// function solve() {   
//     let res = 100 / 8
//     return 'hello'
// }

// function expression

// let solve = function() {
//     let text = 'hello'
//     return text
// }

// console.log(solve());


// function info(name, age, city = 'Не указано') {
//     let message = 'Вас зовут ' + name + ' вам ' + age + ' лет. Город ' + city
//     return message
    
// }

// console.log(info('Zafar', 25, 'Tashkent'))
// console.log(info('Qwerty', 45))



// function findSum(min,max) {
//     let sum = 0
//     if(min > max) {
//         alert('Первый параметр должен быть меньше')
//     }else {
//         for(let i = min; i <= max; i++) {
//             sum += i
//         }
//         return sum
//     }
// }

// console.log(findSum(1,10));
// console.log(findSum(1,100));
// console.log(findSum(50,100));
// console.log(findSum(5,1));

// Math.random() - отдает рандомное число в диапазоне от 0 до 0.9999999

// function rand(min,max) {
//     return Math.floor(Math.random() * (max + 1 - min ) + min )
// }


// let minNumber = +prompt('Введите минимальный диапазон')
// let maxNumber = +prompt('Введите максимальный диапазон')

// for(let i = 0; i < 5; i++) {
//     let one = rand(minNumber,maxNumber)
//     let two = rand(minNumber,maxNumber)
//     let answer = +prompt(one + ' + ' + two + ' =')
//     let word = answer == (one + two) ? 'Молодец' : 'Холодец'
//     alert(one + ' + ' + two + ' = ' + (one + two) + 'Ваш ответ ' + answer + ', ' + word)
// }

let name = prompt('Введите ваше имя')
let year = +prompt('Введите нынешный год')
let age = +prompt('Введите ваш год рождения')


function info (name, year, age){

   if(year > age) {
    age = year - age
    alert('откройте консоль ')
    let result = name + ', Ваш возраст ' + age

    return result
   } else{
    
     alert('Текуший год не может быть меньше чем год рождения ') 
   }

    

}

console.log(info(name,year,age ));
