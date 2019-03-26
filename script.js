let isOn = false;
highlightOff();
makeSanskritNotVisible()
var pic = document.getElementById("image");
pic.style.display = "none";

var myAudio = document.getElementById("audioFile");

var prevVerse = 0;
myAudio.onplay = function() {
  runAudioProcessing()
};

function runAudioProcessing(){
  var myInterval = window.setInterval(function(){
    if(myAudio.ended){
      blackPrevSelection();
      clearInterval(myInterval);
      shadeNone();
      return;
    }else if(myAudio.paused){
      //do nothing.
    }else{
      var currentT = myAudio.currentTime;
      changeSelectionSection(currentT);
    }
  }, 1000);
}

function changeSelectionSection(currentT){
    var i = parseInt((currentT/60), 10);
    var j = (currentT%60)/100;
    var time = j + i;
    if(time > 0 && time < .2){
        shadeverse(1);
    }else if(time < 0.32){
      shadeverse(2);
    }else if(time < 0.45){
      shadeverse(3);
    }else if(time < 0.58){
      shadeverse(4);
    }else if(time < 1.10){
      shadeverse(5);
    }else if(time < 1.23){
      shadeverse(6);
    }else if(time < 1.35){
      shadeverse(7);
    }else if(time < 1.47){
      shadeverse(8);
    }else if(time < 2.00){
      shadeverse(9);
    }else if(time < 2.13){
      shadeverse(10);
    }else if(time < 2.26){
      shadeverse(11);
    }else if(time < 2.40){
      shadeverse(12);
    }else if(time < 2.52){
      shadeverse(13);
    }else if(time < 3.03){
      shadeverse(14);
    }else if(time < 3.15){
      shadeverse(15);
    }else if(time < 3.28){
      shadeverse(16);
    }else if(time < 3.39){
      shadeverse(17);
    }else if(time < 3.52){
      shadeverse(18);
    }else if(time < 4.04){
      shadeverse(19);
    }else if(time < 4.16){
      shadeverse(20);
    }else if(time < 4.27){
      shadeverse(21);
    }else if(time < 4.40){
      shadeverse(22);
    }else if(time < 4.52){
      shadeverse(23);
    }else if(time < 5.03){
      shadeverse(24);
    }else if(time < 5.14){
      shadeverse(25);
    }else if(time < 5.25){
      shadeverse(26);
    }else if(time < 5.37){
      shadeverse(27);
    }else if(time < 5.50){
      shadeverse(28);
    }else if(time < 6.02){
      shadeverse(29);
    }else if(time < 6.14){
      shadeverse(30);
    }else if(time < 6.26){
      shadeverse(31);
    }else if(time < 6.49){
      shadeverse(32);
    }else{
        shadeverse(33);
    }
}

function blackPrevSelection(){
  if(prevVerse > 0){
    var preEverse = 'E'+prevVerse;
    var preSverse = 'S'+prevVerse;
    var preMeaning = 'M'+prevVerse;
    var presanskrithSelection = document.getElementById(preSverse);
    var preenglishSelection = document.getElementById(preEverse);
    var premeaningSelection = document.getElementById(preMeaning);
    premeaningSelection.scrollIntoView();
    premeaningSelection.style.color = 'Black';
    presanskrithSelection.style.color = 'Black';  //CORNSILK
    preenglishSelection.style.color = 'Black';  //CORNSILK
  }
}

function shadeverse(verseNum){

  if(verseNum != prevVerse){
    var Everse = 'E'+verseNum;
    var Sverse = 'S'+verseNum;
    var Mverse = 'M'+verseNum;
    var ImgSrc = "images/image"+verseNum+".JPG"
    blackPrevSelection();
    var sanskrithSelection = document.getElementById(Sverse);
    var englishSelection = document.getElementById(Everse);
    var meaningSelection = document.getElementById(Mverse);
    meaningSelection.style.color = 'Coral';
    sanskrithSelection.style.color = 'DarkGoldenRod';  //CORNSILK
    englishSelection.style.color = 'DarkGoldenRod';  //CORNSILK
    prevVerse = verseNum;
    document.getElementById("myImage").src = ImgSrc;

  }
}

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
function makeSanskritVisible() {
  var sanskrith = document.getElementById("sanskrith");
  var english = document.getElementById("english");
  sanskrith.style.width = "100%";
  english.style.width = "0%";

  sanskrith.style.visibility = 'visible';
  english.style.visibility = 'hidden';
  var div = document.getElementById('sanskrith_text');
  div.style.backgroundColor = 'green';
  var div = document.getElementById('english_text');
  div.style.backgroundColor = 'red';
}

function makeSanskritNotVisible() {
  var sanskrith = document.getElementById("sanskrith");
  var english = document.getElementById("english");
  sanskrith.style.width = "0%";
  english.style.width = "100%";

  sanskrith.style.visibility = 'hidden';
  english.style.visibility = 'visible';
  var div = document.getElementById('sanskrith_text');
  div.style.backgroundColor = 'red';
  var div = document.getElementById('english_text');
  div.style.backgroundColor = 'green';
}

function picturemode(){
  var div = document.getElementById('off');
  div.style.backgroundColor = 'red';
  var div = document.getElementById('on');
  div.style.backgroundColor = 'red';
  var pic = document.getElementById("picture");
  pic.style.backgroundColor = 'green';

  var pic = document.getElementById("image");
  pic.style.display = "block";
}

function highlightOn(){
  var div = document.getElementById('on');
  div.style.backgroundColor = 'green';
  var div = document.getElementById('off');
  div.style.backgroundColor = 'red';
  var pic = document.getElementById("picture");
  pic.style.backgroundColor = 'red';
}

function highlightOff(){
  var div = document.getElementById('off');
  div.style.backgroundColor = 'green';
  var div = document.getElementById('on');
  div.style.backgroundColor = 'red';
  var pic = document.getElementById("picture");
  pic.style.backgroundColor = 'red';
}

function enableisOn(){
  isOn = true;
  highlightOn();
  var pic = document.getElementById("image");
  pic.style.display = "none";

}

function disableisOn(){
  isOn = false;
  highlightOff();
  var pic = document.getElementById("image");
  pic.style.display = "none";

}

function search(){
  let query = getHighlighted();
  if(query == 'a'){
    return;
  }
  let params = `resizable=yes,menubar=no,left=-1000,top=-1000`;

  url = 'http://www.google.com/search?q=' + query;
  window.open(url,'search',params,);
}

window.onmouseup = function(){
  if (isOn === true) {
    search();
  }
}
