var RaceList = require('./models/race_list');
var raceListSelector = require('./views/race_list_selector');
var PieChart = require('./models/pie_chart');

var app = function() {
  var raceList = new RaceList();
  raceList.getRaceList(raceListSelector);

  var workoutPieChart = new PieChart(this);

};








// var urlkoms = 'https://www.strava.com/api/v3/athletes/5620150/koms?access_token=' + keys.apiKey;
// var requestkoms = new XMLHttpRequest();
// requestkoms.open("GET", urlkoms);
//
// requestkoms.addEventListener('load', function() {
//   var komsData = JSON.parse(requestkoms.responseText);
//   renderKoms(komsData);
// });
//
// requestkoms.send();



// var convertToKm = function(distance) {
//   var distance = distance/1000;
//   return distance
// }
//
// var convertToTime = function(moving_time) {
//   var moving_time = moving_time/60;
//   return moving_time
// }



window.addEventListener('load', app);




//   var urlAthlete = 'https://www.strava.com/api/v3/athletes/5620150/?access_token=' + keys.apiKey;'
// "https://www.strava.com/api/v3/athletes/{id}/stats?page=&per_page=" "Authorization: Bearer [[token]]"
//

// create profile section

// inc. name, profile_medium,
//
//   var fourWeekAverage = function(activities) {
//     total_distance = 0
//     activities.forEach(function(element) {
//       total_distance += activity.distance;
//       return total_distance;
//   });
//   var statsDiv = document.getElementById('stats');
//   statsDiv.innerText = total_distance / 4;
//   }
