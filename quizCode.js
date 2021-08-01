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
    const radios1 = document.querySelectorAll('input[name="ques1"]');
    let que1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            que1Value = rb.value;
            break;
        }
    }

    const radios2 = document.querySelectorAll('input[name="ques2"]');
    let que2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            que2Value = rb.value;
            break;
        }
    }
    const radios3 = document.querySelectorAll('input[name="ques3"]');
    let que3Value;
    for (const rb of radios3) {
        if (rb.checked) {
            que3Value = rb.value;
            break;
        }
    }
    const radios4 = document.querySelectorAll('input[name="ques4"]');
    let que4Value;
    for (const rb of radios4) {
        if (rb.checked) {
            que4Value = rb.value;
            break;
        }
    }
    const radios5 = document.querySelectorAll('input[name="ques5"]');
    let que5Value;
    for (const rb of radios5) {
        if (rb.checked) {
            que5Value = rb.value;
            break;
        }
    }

    let total = Number(que1Value) + Number(que2Value) + Number(que3Value) + Number(que4Value) + Number(que5Value);
    result = total / 5;

    if (result > 2) {
        msg = "You answered mostly c, you may have a kinesthetic learning style";
      } else if (result >= 1.5) {
        msg = "You answered mostly b, you may have an auditory learning style";
      } else {
        msg = "You answered mostly a, you may have a visual learning style";
      }

    document.getElementById("results").innerHTML = msg
};





/**
 * write calculation of results here
 */