function addCheck() {
    let addRating = Number(document.getElementById("addRating").value);
    if (isNaN(addRating)) {
        alert("The rating you gave is not a number");
        return;
    } else if (addRating < 0 || addRating > 10) {
        alert("The rating has to be in the range (1-10) or empty");
        return;
    }

    let addForm = document.getElementById("addForm2");
    addForm.submit();
}
