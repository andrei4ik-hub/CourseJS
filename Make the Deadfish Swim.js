
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