
var raceListSelector = function(allActivities) {
  var raceList = document.getElementById('race-select-list');
  allActivities.forEach(function (activity) {
    if (activity.workout_type == 1) {
      var option = document.createElement('option');
      option.innerText = activity.name;
      option.value = activity.start_date;
      raceList.appendChild(option);
    }
  })
}

module.exports = raceListSelector;
