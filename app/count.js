exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var set_time_out;

    function run() {
      console.log(start++);

      if (start <= end) {
         set_time_out = setTimeout(run, 100);
      }
    }

    run();

    return {
          cancel: function () {
            set_time_out && clearTimeout(set_time_out);
          }
        }
      }
};
