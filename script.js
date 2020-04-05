readTextFile();
function addCounter(){
    var counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent)+1;
}

function readTextFile() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "./data.txt", true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        console.log(allText)
      }
    }
    rawFile.send(null);
  }