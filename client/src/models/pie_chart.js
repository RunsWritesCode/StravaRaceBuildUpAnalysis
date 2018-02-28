const Highcharts = require('Highcharts');
var request = require('../services/request');
const keys = require('../services/keys');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

const PieChart = function() {
  this.url = 'https://www.strava.com/api/v3/athlete/activities?access_token=' + keys.apiKey + '&client_id=' + keys.clientId + '&client_secret=' + keys.clientSecret + '&per_page=200';
  this.activities = [];
  this.filteredActivities = [];
};

PieChart.prototype.getData = function(){
  request(this.onRequestComplete.bind(this), this.url);
}

PieChart.prototype.onRequestComplete = function(allActivities){
  this.activities = allActivities;
}

PieChart.prototype.populatePieChart = function (allActivities, endDate, startDate) {

  if(allActivities){
    this.activities = allActivities;
  }

  if(startDate && endDate){
    var range = moment.range(startDate, endDate);

    this.activities.forEach((activity) => {
      var startDateMoment = moment(activity.start_date)
      console.log(startDateMoment.within(range));
      if (startDateMoment.within(range)) {
        this.filteredActivities.push(activity);
      }


    })
    console.log(this.filteredActivities);

  }


  let pieChartDataHash = [
      {name: "easy", y: 0, color: '#5cb85c'},
      {name: "race", y: 0, color: '#e35d6a'},
      {name: "long", y: 0, color: '#ffbf00'},
      {name: "work out", y: 0, color: '#428bca'}
    ]


this.filteredActivities.forEach( function(element) {


  switch (element.workout_type) {
    case 0:
    // console.log("0");
      pieChartDataHash[0].y ++;
      break;
    case 1:
    // console.log("1");
      pieChartDataHash[1].y ++;
      break;
    case null:
    // console.log("null");
      pieChartDataHash[0].y ++;
      break;
    case 2:
    // console.log("2");
      pieChartDataHash[2].y ++;
      break;
    case 3:
    // console.log("3");
      pieChartDataHash[3].y++;
      break;
  }
  return;
});

// var rainbow = ['#5cb85c', '#e35d6a', '#e7ff16', '#428bca'];

var container = document.getElementById("pie-chart");

var workoutPieChart = new Highcharts.Chart({
  chart: {
    type: 'pie',
    renderTo: container
  },
  tooltip: {
    pointFormat: 'Workout types proportion'
  },
  title: {
    text: "Run types",
    style: {
                color: '#ffbf00'
            }
  },
  series: [
    {
      name: name,
      data: pieChartDataHash,
      color: ""
    }
  ],
});


};



module.exports = PieChart;
