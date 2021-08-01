/**
 * Reuse code to show n hide questions
 * have nextQuestion as main funaction
 * queation 1 - 5 as extention function
 * result as last section

function nextQuestion(id1,id2) {
    hideElement(id1);
    showElement(id2);
}
function hideElement() {
    let id = eleId.id;
    document.getElementById(id).style.display = "none";
}

function showElement() {
    let id = eleId.id;
    document.getElementById(id).style.display = "inline-block";
}
 */

function Start() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("que1").style.display = "inline-block";
  }
  function quest1() {
    document.getElementById("que1").style.display = "none";
    document.getElementById("que2").style.display = "inline-block";
  }
  function quest2() {
    document.getElementById("que2").style.display = "none";
    document.getElementById("que3").style.display = "inline-block";
  }
  function quest3() {
    document.getElementById("que3").style.display = "none";
    document.getElementById("que4").style.display = "inline-block";
  }
  function quest4() {
    document.getElementById("que4").style.display = "none";
    document.getElementById("que5").style.display = "inline-block";
  }
  function quest5() {
    document.getElementById("que5").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
  }





/**
 * write calculation of results here
 */