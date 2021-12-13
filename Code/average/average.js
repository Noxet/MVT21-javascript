function addNumber() {
    const val = document.getElementById("number").value;

    let list = [];
    list.push(val);

    const para = document.getElementById("list");
    para.innerHTML = "test";
}


function addNumber1() {
    const val = document.getElementById("number").value;

    let list = [];
    list.push(val);

    const para = document.getElementById("list");

    for (const value of list) {
        console.log(value);
    }
}


function addNumber2() {
    const val = document.getElementById("number").value;

    let list = [];
    list.push(val);

    const para = document.getElementById("list");
    let str = "";

    for (const value of list) {
        str += value + ", ";
    }

    para.innerHTML = str;
}

let list = [];
function addNumber3() {
    const val = Number(document.getElementById("number").value);

    list.push(val);

    const para = document.getElementById("list");
    let str = "";
    let sum = 0;

    for (const value of list) {
        str += value + ", ";
        sum += value;
    }

    para.innerHTML = str;

    const avg = document.getElementById("average");
    avg.innerHTML = sum / list.length;
}