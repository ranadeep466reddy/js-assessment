exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
       return fn.apply(this,arr);
  },

  speak: function(fn, obj) {
       return fn.call(obj);
  },

  functionFunction: function(str) {
       var add = function(str1)
       {
         return str + ', ' + str1;
       };
       return add;
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(num){
        return (function(num){
          return function(){
            return fn(num);
          }
        })(num);
      });
  },

  partial: function(fn, str1, str2) {
    var partial = function(str3)
    {
      return fn(str1, str2, str3);
    };
    return partial;
  },

  useArguments: function() {
    var arr = [];
    for(var i in arguments)
    arr.push(arguments[i]);

    return arr.reduce(function(num1, num2)
    {
      return num1 + num2;
    });

  },

  callIt: function(fn) {
      fn.apply(fn, Array.prototype.slice.call(arguments, 1));
      return fn;
  },

  partialUsingArguments: function(fn) {
    var partial = Array.prototype.slice.call(arguments,1,arguments.length);
    return function () {
      var arg = partial.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null,arg);
    }

  },

  curryIt: function(fn) {
    return function (num1) {
      return function (num2) {
        return function (num3) {
          return fn.call(null,num1,num2,num3);
        }
      }
    }
}
};
