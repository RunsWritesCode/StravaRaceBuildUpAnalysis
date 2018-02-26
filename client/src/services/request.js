const makeGetRequest = function(onComplete, url) {

var request = new XMLHttpRequest();
request.open("GET", url);

request.addEventListener('load', function() {
  var data = JSON.parse(request.responseText);
  onComplete(data);
});

request.send();
}

module.exports = makeGetRequest;
