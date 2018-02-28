const Highcharts = require('Highcharts');
var request = require('../services/request');
const keys = require('../services/keys');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
var totalViewSix = require('../views/total_view_six');

const SummarySix = function() {
  this.url = 'https://www.strava.com/api/v3/athlete/activities?access_token=' + keys.apiKey + '&client_id=' + keys.clientId + '&client_secret=' + keys.clientSecret + '&per_page=200';
  this.activities = [];
  this.filteredActivitiesSix = [];
};

SummarySix.prototype.getData = function(){
  request(this.onRequestComplete.bind(this), this.url);
}

SummarySix.prototype.onRequestComplete = function(allActivities){
  this.activities = allActivities;
}

SummarySix.prototype.getTotalDistance = function (allActivities, endDate, startDateSix) {
    console.log("startDateSix:", startDateSix);
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

      var totalDistance = 0;
      this.filteredActivitiesSix.forEach( function(element) {
        totalDistance += element.distance;
      })

      totalViewSix(totalDistance);

    }


};


module.exports = SummarySix;
