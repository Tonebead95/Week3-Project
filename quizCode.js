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
    learningStyle()
    document.getElementById("que5").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
}
function back() {
    document.getElementById("results").style.display = "none";
    document.getElementById("intro").style.display = "inline-block";
}

function learningStyle() {
    const radios1 = document.querySelectorAll('input[name="que1"]');
    let qeu1value;
    for (const rb of radios1) {
        if (rb.checked) {
            qeu1value = rb.value;
            break;
        }
    }

    const radios1 = document.querySelectorAll('input[name="que2"]');
    let qeu2value;
    for (const rb of radios2) {
        if (rb.checked) {
            qeu2value = rb.value;
            break;
        }
    };
    const radios1 = document.querySelectorAll('input[name="que3"]');
    let qeu3value;
    for (const rb of radios3) {
        if (rb.checked) {
            qeu3value = rb.value;
            break;
        }
    };
    const radios1 = document.querySelectorAll('input[name="que4"]');
    let qeu4value;
    for (const rb of radios4) {
        if (rb.checked) {
            qeu4value = rb.value;
            break;
        }
    };
    const radios1 = document.querySelectorAll('input[name="que5"]');
    let qeu5value;
    for (const rb of radios5) {
        if (rb.checked) {
            qeu5value = rb.value;
            break;
        }
    };

let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value);
result = total / 5;

if (result > ) {
  msg = "";
} else if (result >= ) {
  msg = "";
} else {
  msg = "You didn't input anything";
}

document.getElementById("result").innerHTML = msg
};





/**
 * write calculation of results here
 */