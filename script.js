
function getHighlighted(){
  let ourSelection = window.getSelection();
  let start = window.getSelection().baseOffset;
  let end = window.getSelection().extentOffset;
  if(end - start < 2){
    return;
  }
  let baseText = ourSelection.extentNode.data;
  let selection = baseText.substring(start,end);
  alert(selection);

}

// for (var i = 0; i < 1000; i++) {
//   getHighlighted()
// }
window.onmouseup = function(){
  getHighlighted();
}
// let count = 0;
// window.setInterval(function(){
//   if (count >  10) {
//     clearInterval();
//   }
//   count = count + 1;
//
// },5000);
