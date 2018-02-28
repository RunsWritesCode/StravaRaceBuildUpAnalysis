var elevationView = function(totalElevation) {
  var pTotalElTag = document.querySelector('#elevation');
  pTotalElTag.innerText = `12 week total elevation: ${totalElevation.toFixed(2)} m`;
}


module.exports = elevationView;
