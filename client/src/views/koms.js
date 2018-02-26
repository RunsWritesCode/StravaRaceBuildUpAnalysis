// var numberOfKoms = function(allKoms) {
//   var komsDiv = document.getElementById('koms');
//   .length?
// }



// KOMS list
//
// var renderKoms = function(allKoms) {
//   var komsDiv = document.getElementById('koms');
//   allKoms.forEach(function (kom) {
//     var div = createKomsItem(kom);
//     komsDiv.appendChild(div);
//   });
// };


// var createKomsItem = function(kom) {
//   var insideKomDiv = document.createElement('div');
//   var pTag5 = document.createElement('p');
//   pTag5.innerText = kom.name;
//   pTag5.setAttribute('id', 'act_name');
//   var pTag6 = document.createElement('p');
//   pTag6.innerText = convertToKm(kom.distance).toFixed(2) + " km";;
//   var pTag7 = document.createElement('p');
//   pTag7.innerText = kom.moving_time + " seconds";
//   var pTag8 = document.createElement('p');
//
//   insideKomDiv.appendChild(pTag5);
//   insideKomDiv.appendChild(pTag6);
//   insideKomDiv.appendChild(pTag7);
//
//   return insideKomDiv
// }

module.export = numberOfKoms;
