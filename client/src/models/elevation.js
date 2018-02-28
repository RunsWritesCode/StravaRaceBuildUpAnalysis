const Highcharts = require('Highcharts');
var request = require('../services/request');
const keys = require('../services/keys');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
var elevationView = require('../views/elevation_view');

const Elevation = function() {
  this.url = 'https://www.strava.com/api/v3/athlete/activities?access_token=' + keys.apiKey + '&client_id=' + keys.clientId + '&client_secret=' + keys.clientSecret + '&per_page=200';
  this.activities = [];
  this.filteredActivities = [];
};

Elevation.prototype.getData = function(){
  request(this.onRequestComplete.bind(this), this.url);
}

Elevation.prototype.onRequestComplete = function(allActivities){
  this.activities = allActivities;
}

Elevation.prototype.getTotalElevation = function (allActivities, endDate, startDate) {
    console.log("startDate:", startDate);
    console.log("endDate:", endDate);

    if(allActivities){
      this.activities = allActivities;
    }

    if(startDate && endDate){
      var range = moment.range(startDate, endDate);

      this.activities.forEach((activity) => {
        var startDateMoment = moment(activity.start_date);

        if (startDateMoment.within(range)) {
          this.filteredActivities.push(activity);
        }


      });

      var totalElevation = 0;
      this.filteredActivities.forEach( function(element) {
        totalElevation += element.total_elevation_gain;
      })

      elevationView(totalElevation);

    }




};

module.exports = Elevation;
