var totalViewSix = function(totalDistance) {
  var pTotalSixTag = document.querySelector('#total-distance-six');
  pTotalSixTag.innerText = `6 week total distance: ${(totalDistance/1000).toFixed(2)} km`;
}


module.exports = totalViewSix;
