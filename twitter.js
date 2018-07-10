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

// if(texto.length >= 140){
//   document.getElementById('count').classList.add("vermelho");
// }
// if (texto.length >= 130) {
//   document.getElementById('count').classList.add("amarelo");
// }
// if (texto.length >= 120 || <=129) {
//   document.getElementById('count').classList.add("verde");
// }
//
// // 120 não funciona
  if(texto.length >= 140){
    document.getElementById('count').className = '';
    document.getElementById('count').classList.add("vermelho");
  }
  if (texto.length > 130) {
    document.getElementById('count').className = '';
    document.getElementById('count').classList.add("amarelo");
  }
  if (texto.length > 120) {
    document.getElementById('count').className = '';
    document.getElementById('count').classList.add("verde");
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
