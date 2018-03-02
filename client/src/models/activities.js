var moment = require('moment');
const keys = require('../services/keys');


var getSelectedDate() {

  day = selectedRace.start_date
}

var filterActivitiesByDate() {

  var day = moment("2018-02-24", "YYYY-MM-DD");
  var lastthree = moment(day).subtract(3, 'months');
  var parsedLastThree = moment(lastthree, "YYYY-MM-DD");

}
