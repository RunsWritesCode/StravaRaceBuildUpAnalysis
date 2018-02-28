const Highcharts = require('Highcharts');
var request = require('../services/request');
const keys = require('../services/keys');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
var elevationViewSix = require('../views/elevation_view_six');

const ElevationSix = function() {
  this.url = 'https://www.strava.com/api/v3/athlete/activities?access_token=' + keys.apiKey + '&client_id=' + keys.clientId + '&client_secret=' + keys.clientSecret + '&per_page=200';
  this.activities = [];
  this.filteredActivitiesSix = [];
};

ElevationSix.prototype.getData = function(){
  request(this.onRequestComplete.bind(this), this.url);
}

ElevationSix.prototype.onRequestComplete = function(allActivities){
  this.activities = allActivities;
}

ElevationSix.prototype.getTotalElevation = function (allActivities, endDate, startDateSix) {
    console.log("startDate:", startDateSix);
    console.log("endDate:", endDate);

    if(allActivities){
      this.activities = allActivities;
    }

    if(startDateSix && endDate){
      var range = moment.range(startDateSix, endDate);

      this.activities.forEach((activity) => {
        var startDateMoment = moment(activity.start_date);

        if (startDateMoment.within(range)) {
          this.filteredActivitiesSix.push(activity);
        }


      });

      var totalElevation = 0;
      this.filteredActivitiesSix.forEach( function(element) {
        totalElevation += element.total_elevation_gain;
      })

      elevationViewSix(totalElevation);

    }




};

module.exports = ElevationSix;
