let isOn = false;
function getHighlighted(){
  let ourSelection = window.getSelection();
  let start = window.getSelection().baseOffset;
  let end = window.getSelection().extentOffset;
  if(end - start < 2){
    return a;
  }
  let baseText = ourSelection.extentNode.data;
  let selection = baseText.substring(start,end);
  return selection;

}

function highlightOn(){
  var div = document.getElementById('on');
  div.style.backgroundColor = 'green';
  var div = document.getElementById('off');
  div.style.backgroundColor = 'red';
}

function highlightOff(){
  var div = document.getElementById('off');
  div.style.backgroundColor = 'green';
  var div = document.getElementById('on');
  div.style.backgroundColor = 'red';
}

function enableisOn(){
  isOn = true;
  highlightOn();
}

function disableisOn(){
  isOn = false;
  highlightOff();
}

function search(){
  let query = getHighlighted();
  if(query == 'a'){
    return;
  }
  url = 'http://www.google.com/search?q=' + query;
  window.open(url,'_blank');
}
// for (var i = 0; i < 1000; i++) {
//   getHighlighted()
// }
window.onmouseup = function(){
  if (isOn === true) {
    search();
  }
}
// let count = 0;
// window.setInterval(function(){
//   if (count >  10) {
//     clearInterval();
//   }
//   count = count + 1;
//
// },5000);
