
//Доп задача 1 (Напишите функцию sum, которая принимает любое количество чисел и возвращает их сумму, используя объект arguments. )
function sum(){
    const mass = Array.from(arguments)
    const sum = mass.reduce(function(currentSum , currentNumber){
        return currentSum + currentNumber;
    })
    return sum
}


console.log(sum(1,2,4));//7
