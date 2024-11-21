// Check your arguments
function objectType(obj) {
    if (arguments.length == 0){
      return '[object Null]';
    }  else {
      return Object.prototype.toString.call(obj);
    }
  }
  