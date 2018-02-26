const Highcharts = require('Highcharts');
var request = require('../services/request');
const keys = require('../services/keys');


const PieChart = function(allActivities) {
this.url = 'https://www.strava.com/api/v3/athlete/activities?access_token=' + keys.apiKey + '&client_id=' + keys.clientId + '&client_secret=' + keys.clientSecret + '&per_page=200';
request(this.populatePieChart, this.url);
};

PieChart.prototype.populatePieChart = function (allActivities) {
  let pieChartDataHash = [
      {x: "easy", y: 0},
      {x: "workout", y: 0},
      {x: "long", y: 0},
      {x: "race", y: 0}
    ]


allActivities.forEach( function(element) {

  switch (element.workout_type) {
    case 0:
    console.log("0");
      pieChartDataHash[0].y ++;
      break;
    case 1:
    console.log("1");
      pieChartDataHash[1].y ++;
      break;
    case null:
    console.log("null");
      pieChartDataHash[0].y ++;
      break;
    case 2:
    console.log("2");
      pieChartDataHash[2].y ++;
      break;
    case 3:
    console.log("3");
      pieChartDataHash[3].y++;
      break;
  }
  return;// pieChartDataHash;
});


// console.log("workout:" + this.pieChartDataHash.workout);
// console.log("easy:" + this.pieChartDataHash.easy);
// console.log("long:" + this.pieChartDataHash.long);
// console.log("race:" + this.pieChartDataHash.race);
console.log(pieChartDataHash);

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
    text: "Run types"
  },
  series: [
    {
      data: pieChartDataHash
    }
  ]
});


};



module.exports = PieChart;
