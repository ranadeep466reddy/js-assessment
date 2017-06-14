exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
 valueAtBit: function(num, bit) {

   var str =  (num).toString(2);
   //if(bit > str.length + 1) return 0;
   return parseInt(str.charAt(str.length - bit));


 },

 base10: function(str) {
   return parseInt(str, 2);

 },

 convertToBinary: function(num) {
   return ("000000000" + num.toString(2)).substr(-8)


 },

 multiply: function(a, b) {
   var maxInt = 100000000;
   a *= maxInt;
   b *= maxInt;
   return (a * b) / (maxInt * maxInt);

 }
};
