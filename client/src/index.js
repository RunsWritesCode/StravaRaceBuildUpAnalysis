var RaceList = require('./models/race_list');
var raceListSelector = require('./views/race_list_selector');
var PieChart = require('./models/pie_chart');
var Summary = require('./models/summary');
var moment = require('moment');
var Elevation = require('./models/elevation');
var PieChartSix = require('./models/pie_chart_six');
var SummarySix = require('./models/summary_six');
var ElevationSix = require('./models/elevation_six');

var app = function() {
  var raceList = new RaceList();
  raceList.getRaceList(raceListSelector);
  var workoutPieChart = new PieChart();
  var summary = new Summary();
  var elevation = new Elevation();
  summary.getData();
  elevation.getData();
  workoutPieChart.getData();
  var workoutPieChartSix = new PieChartSix();
  var summarySix = new SummarySix();
  var elevationSix = new ElevationSix();
  summarySix.getData();
  elevationSix.getData();
  workoutPieChartSix.getData();

  var viewRaceBtn = document.getElementById('select-race-button');

  viewRaceBtn.addEventListener('click', function(){
    var raceList = document.getElementById('race-select-list');

    var endDate = moment(raceList.value, "YYYY-MM-DD");
    var startDate = moment(endDate).subtract(3, 'months');
    var startDateSix = moment(endDate).subtract(1.5, 'months');
    workoutPieChart.populatePieChart(null, endDate, startDate);
    summary.getTotalDistance(null, endDate, startDate);
    elevation.getTotalElevation(null, endDate, startDate);
    workoutPieChartSix.populatePieChart(null, endDate, startDateSix);
    summarySix.getTotalDistance(null, endDate, startDateSix);
    elevationSix.getTotalElevation(null, endDate, startDateSix);
  });

};

window.addEventListener('load', app);





// var convertToTime = function(moving_time) {
//   var moving_time = moving_time/60;
//   return moving_time
// }
