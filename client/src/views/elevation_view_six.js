var elevationViewSix = function(totalElevation) {
  var pTotalElSixTag = document.querySelector('elevation-six');
  pTotalElSixTag.innerText = `6 week total elevation: ${totalElevation.toFixed(2)} m`;
}


module.exports = elevationViewSix;
