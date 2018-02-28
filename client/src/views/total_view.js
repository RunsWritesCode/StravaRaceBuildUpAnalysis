var totalView = function(totalDistance) {
  var pTotalTag = document.querySelector('#total-distance');
  pTotalTag.innerText = totalDistance.toFixed(2);
}

// var convertToKm = function(distance) {
//   var distance = distance/1000;
//   return distance
// }

module.exports = totalView;
