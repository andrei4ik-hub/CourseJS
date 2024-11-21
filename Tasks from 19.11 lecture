// Check your arguments
function objectType(obj) {
    if (arguments.length == 0){
      return '[object Null]';
    }  else {
      return Object.prototype.toString.call(obj);
    }
  }
  


//For the sake of argumen
  function numbers(...args) {
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] !== 'number') {
        return false; 
      } 
    } 
    return true; 
  }

//   Unpacking Arguments
  function spread(func, args) {
    return func(...args); 
  }

//   Make the Deadfish Swim
  function parse(data) {
    let value = 0; 
    let result = [];
    for (let command of data) {
      switch (command) {
        case 'i': value++;
          break;
        case 'd': value--;
          break;
        case 's':
          value *= value;
          break;
        case 'o': result.push(value);
          break; 
      } 
    } 
    return result; 
  }

//Доп задача 1 (Напишите функцию sum, которая принимает любое количество чисел и возвращает их сумму, используя объект arguments. )
function sum(){
    const mass = Array.from(arguments)
    const sum = mass.reduce(function(currentSum , currentNumber){
        return currentSum + currentNumber;
    })
    return sum
}

console.log(sum(1,2,4));//7

// доп задача с лекции 1
// Напишите стрелочную функцию, которая принимает два числа и возвращает их сумму.

let sum = (a, b) => a + b;

console.log(sum (1,3))
