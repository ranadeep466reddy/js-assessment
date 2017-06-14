exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var def_obj = $.Deferred();
      setTimeout(function() {
        def_obj.resolve(value);
}, 20);
    return def_obj.promise();
  },

  manipulateRemoteData: function(url) {
    var request = new XMLHttpRequest();
      return {
        then: function(callback) {
          request.onreadystatechange = function(){
            if (request.readyState == 4 && request.status >= 200 && request.status < 400) {
              var arr = JSON.parse(request.responseText);
              var names = arr["people"].map(function(num){
                return num["name"]
              }).sort();
              return callback(names);
            }
          }
          request.open("GET", url, true);
          request.send();
        }
      }
    }
  };
