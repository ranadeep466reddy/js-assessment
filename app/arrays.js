exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);

  },

  sum: function(arr) {
      var sum = 0;
     for(var i = 0; i < arr.length;i++)
     sum += arr[i];
     return sum;
  },

  remove: function(arr, item) {
    var temp = new Array();
    for(var i = 0; i < arr.length ; i++)
    {
      if(arr[i] != item)
      temp.push(arr[i]);
    }
    return temp;
  },

  removeWithoutCopy: function(arr, item) {
    for(var i = arr.length; i--;)
    {
      if(arr[i] == item)
      {
        arr.splice(i,1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count: function(arr, item) {
      var count = 0;
      for(var i = 0;  i < arr.length; i++)
      {
        if(arr[i] == item)
        count++;
      }
      return count;
  },

  duplicates: function(arr) {
    return arr.reduce(function (repeated, x, y) {
      if (arr.indexOf(x) !== y && repeated.indexOf(x) === -1) {
        repeated.push(x);
      }
      return repeated;
    }, []);
},


  square: function(arr) {
      for(var i = 0; i < arr.length; i++)
      arr[i] *= arr[i];
      return arr;
  },

  findAllOccurrences: function(arr, target) {
       var count = 0;
       var k = 0;
       var a = [];
       for(var x = 0; x < arr.length; x++)
       {
         if(arr[x] == target)
         a[k++] = x;
      }
      return a;
    }
};
