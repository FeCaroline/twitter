function tweet(){
  var tweet = document.getElementById("tweet-text").value;
  document.getElementById("personal-tweet").innerHTML += '<p class="tweet">' + tweet + '<br />' + getNow() + '</p>';
  document.getElementById("tweet-text").value = "";
  enableButton();
  return tweet;
}

function enableButton(){
  var elemento = document.getElementById("tweet-text");
  var texto = elemento.value;
  var count = 140 - texto.length;

  if(elemento.value !== ""){
    document.getElementById("tweetar").disabled=false;
  } else {
    document.getElementById("tweetar").disabled=true;

    }

if (texto.length >= 120 ) {
  document.getElementById('count').className = '';
  document.getElementById('count').classList.add("verde");
}
if (texto.length >= 130 ) {
  document.getElementById('count').className = '';
  document.getElementById('count').classList.add("amarelo");
}
if(texto.length >= 140){
  document.getElementById('count').className = '';
  document.getElementById('count').classList.add("vermelho");
} else {
document.getElementById('count').className = '';
}

  

  document.getElementById("count").innerHTML = count;
  elemento.style.height = "1px";
  elemento.style.height = (25+elemento.scrollHeight)+"px";
}


function startCount(){
  console.log("Entrou")
  document.getElementById("count").innerHTML="140";
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getNow() {
  var today = new Date();
  return checkTime(today.getHours()) + ":" + checkTime(today.getMinutes());
}
