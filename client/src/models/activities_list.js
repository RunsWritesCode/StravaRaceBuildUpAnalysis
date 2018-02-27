
var renderList = function(allActivities) {
  var mainDiv = document.getElementById('main');

  allActivities.forEach(function (activity) {
    var div = createListItem(activity);
    mainDiv.appendChild(div);
  });

};
