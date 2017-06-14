exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    var list = [];
    var arr = [];

    processDir(data);

    function processDir(dir) {
      var files = dir.files;

      arr.push(dir.dir);

      for (var i = 0; i < files.length; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || arr.indexOf(dirName) > -1) {
            list.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }
      arr.pop();
    }

    return list;

  },

  permute: function(arr) {

        var initial = [];
        var final = [];

        return copy(arr);

        function copy(a) {
          var arr1;
          for (var i = 0; i < arr.length; i++) {
            arr1 = arr.splice(i, 1)[0];
            initial.push(arr1);

            if (arr.length) {
              copy(arr);
            } else {
              copy_elements();
            }
            arr.splice(i, 0, arr1);
            initial.pop();
          }

          return final;
        }

        function copy_elements() {
          final.push(
            initial.slice()
          );
        }
  },

  fibonacci: function(n) {
    return fib(n, 1, 0);
  function fib(n, a, b)
  {
    return (n === 0) ? b : fib(n-1, a+b, a);
  }
},
  validParentheses: function(n) {
        var arr = [];
        var parantheses = function (l, r, curr) {
          if (l == 0 && r == 0) {
            arr.push(curr);
          }
          if (l > 0) {
            parantheses(l - 1, r + 1, curr + '(');
          }
          if (r > 0) {
            parantheses(l, r - 1, curr + ')');
          }
          return arr;
        };
        return parantheses(n, 0, '');
      }
};
