var moment = require('moment');
const keys = require('../services/keys');

// const RaceList = function() {
//   this.url = 'https://www.strava.com/api/v3/athlete/activities?access_token=' + keys.apiKey + '&client_id=' + keys.clientId + '&client_secret=' + keys.clientSecret + '&per_page=200';
//
// }

var getSelectedDate() {

  // on click getSelectedDate
  day = selectedRace.start_date

}

// filter activities by date
var filterActivitiesByDate() {


  var day = moment("2018-02-24", "YYYY-MM-DD");
  var lastthree = moment(day).subtract(3, 'months');
  var parsedLastThree = moment(lastthree, "YYYY-MM-DD");

  // filter allActivities by if date is in range day to parsedLastThree


// // move to app?
// var select = document.querySelector('select');
// select.addEventListener('change', filterActivitiesByDate);


}
