exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var arr = [];
    var get_key = Object.keys(obj);
    for (var i = 0; i < get_key.length; i++) {
      arr.push(get_key[i] + ': ' + obj[get_key[i]]);
    }
    return arr;
  }
};
