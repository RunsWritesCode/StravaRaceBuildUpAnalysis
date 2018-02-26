var createListItem = function(singleActivity) {
  var insideDiv = document.createElement('div');
  insideDiv.style.backgroundColor = backGroundRunType(singleActivity.workout_type);
  var pTag = document.createElement('p');
  pTag.innerHTML = singleActivity.name;
  pTag.setAttribute('id', 'act_name');
  var pTag2 = document.createElement('p');
  pTag2.innerText = convertToKm(singleActivity.distance).toFixed(2) + " km";
  pTag2.setAttribute('id', 'distance');
  var pTag3 = document.createElement('p');
  pTag3.innerText = convertToTime(singleActivity.moving_time).toFixed(0) + " minutes";
  pTag3.setAttribute('id', 'time');
  var pTag4 = document.createElement('p');
  pTag4.innerText = "elevation gain: " + singleActivity.total_elevation_gain + " m";
  pTag4.setAttribute('id', 'elevation');
  insideDiv.appendChild(pTag);
  insideDiv.appendChild(pTag2);
  insideDiv.appendChild(pTag3);
  insideDiv.appendChild(pTag4);
  return insideDiv
};


var renderList = function(allActivities) {
  var mainDiv = document.getElementById('main');

  allActivities.forEach(function (activity) {
    var div = createListItem(activity);
    mainDiv.appendChild(div);
  });

};

var backGroundRunType = function(workoutType) {
  console.log(workoutType);
  var colourMap = {
    0: "#4dd69d80",
    2: "#3192bc80",
    3: "#fc4c0280",
  }
  return colourMap[workoutType] || "#4dd69d80";
}
