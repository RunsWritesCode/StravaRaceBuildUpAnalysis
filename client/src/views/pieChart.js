// const Highcharts = require('highcharts');
//
// var PieChart = function(allActivities) {
//
//   var data = allActivities.map(x=> {return {name: x.name, y: x.workout_type}});
//
//   var container = document.getElementById("pie-chart");
//
//   var chart = new Highcharts.Chart({
//     chart: {
//       type: 'pie',
//       renderTo: container
//     },
//     tooltip: {
//       pointFormat: 'Workout types proportion'
//     },
//     title: {
//       text: "Run types"
//     },
//     series: [
//       {
//         data: data
//       }
//     ]
//   });
//
// };
//
// module.exports = PieChart;
