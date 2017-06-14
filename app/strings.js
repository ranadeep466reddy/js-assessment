exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var arr1 = [];
    var ch = '';
    var count = 0;
    var arr = str.split('');
    arr.forEach(function (item) {
      if (item != ch) {
        ch = item;
        count = 1;
        arr1.push(item);
      } else if (count < amount) {
        count++;
        arr1.push(item);
      }
    });
    return arr1.join('');

  },

  wordWrap: function(str, cols) {

    var x = cols;
    var arr = str.split('');

    function forward_traverse() {
      for (x; x < arr.length; x++) {
        if (arr[x] === ' ') {
          arr[x] = '\n';
          x += cols;
          return;
        }
      }
    }

    function reverse() {
      for (x; x > 0; x--) {
        if (arr[x] === ' ') {
          arr[x] = '\n';
          x += cols;
          return;
        }
      }
      forward_traverse();
    }

    while (x < arr.length) {
      if (arr.indexOf(' ') < 0) {
        return arr.join('')
      }
      reverse();
    }

    return arr.join('');

  },

  reverseString: function(str) {
    return str.split('').reverse().join('');

  }
};
