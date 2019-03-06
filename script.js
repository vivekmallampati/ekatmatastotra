
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
function enableisOn(){
  isOn = true;
}

function disableisOn(){
  isOn = false;
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
  if (isOn = true) {
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
