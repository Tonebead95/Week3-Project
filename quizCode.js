
function nextQuestion(id1,id2) {
    hideElement(id1);
    showElement(id2);
}
function hideElement(id) {
    document.getElementById(id).style.display = "none";
}

function showElement(id) {
    document.getElementById(id).style.display = "inline-block";
}

function calculateAnswer(inputName) {
    const radios1 = document.querySelectorAll(inputName);
    let queValue;
    for (const rb of radios1) {
        if (rb.checked) {
            queValue = rb.value;
            break;
        }
    }
    return Number(queValue);
}

function learningStyle() {

    const que1Value = calculateAnswer('input[name="ques1"]')
    const que2Value = calculateAnswer('input[name="ques2"]')
    const que3Value = calculateAnswer('input[name="ques3"]')
    const que4Value = calculateAnswer('input[name="ques4"]')
    const que5Value = calculateAnswer('input[name="ques5"]')
    
    let total = Number(que1Value) + Number(que2Value) + Number(que3Value) + Number(que4Value) + Number(que5Value);
    result = total / 5;

    const img = document.getElementById("images");

    if (result > 2) {
        msg = "You answered mostly c, you may have a kinesthetic learning style";
        img.src = "images/Kinesthetic.png";
    } else if (result >= 1.5) {
        msg = "You answered mostly b, you may have an auditory learning style";
        img.src = "images/Auditory.png";
    } else {
        msg = "You answered mostly a, you may have a visual learning style";
        img.src = "images/Visual.png";
    }


    document.getElementById("results").innerHTML = msg;

};
