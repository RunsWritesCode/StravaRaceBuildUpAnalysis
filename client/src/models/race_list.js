var request = require('../services/request');
const keys = require('../services/keys');

const RaceList = function() {
  this.url = 'https://www.strava.com/api/v3/athlete/activities?access_token=' + keys.apiKey + '&client_id=' + keys.clientId + '&client_secret=' + keys.clientSecret + '&per_page=200';
}

RaceList.prototype.getRaceList = function (renderDropdown) {
  request(renderDropdown, this.url);
};

// const raceList = function(renderOnComplete) {
//
// var url = 'https://www.strava.com/api/v3/athlete/activities?access_token=' + keys.apiKey + '&client_id=' + keys.clientId + '&client_secret=' + keys.clientSecret + '&per_page=200';
// var request = new XMLHttpRequest();
// request.open("GET", url);
//
// request.addEventListener('load', function() {
//   var activitiesData = JSON.parse(request.responseText);
//   console.log("Length:", activitiesData);
//   renderOnComplete(activitiesData);
// });
//
// request.send();
// }

module.exports = RaceList;
