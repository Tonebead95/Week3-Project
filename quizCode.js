/**
 * Reuse code to show n hide questions
 * have nextQuestion as main funaction
 * queation 1 - 5 as extention function
 * result as last section
 */
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





/**
 * write calculation of results here
 */