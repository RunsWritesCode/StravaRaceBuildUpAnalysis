var totalView = function(totalDistance) {
  var pTotalTag = document.querySelector('#total-distance');
  pTotalTag.innerText = `12 week total distance: ${(totalDistance/1000).toFixed(2)} km`;
}



module.exports = totalView;
