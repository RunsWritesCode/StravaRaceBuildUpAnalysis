var totalViewSix = function(totalDistance) {
  var pTotalSixTag = document.querySelector('#total-distance-six');
  pTotalSixTag.innerText = `12 week total distance: ${(totalDistance/1000).toFixed(2)} km`;
}


module.exports = totalViewSix;
