

//For the sake of argumen
function numbers(...args) {
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] !== 'number') {
        return false; 
      } 
    } 
    return true; 
  }
