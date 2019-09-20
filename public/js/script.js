
//VARIABLES USED IN MANY FUNCTIONS

var d1box = document.getElementById("d1"); 
var d2box = document.getElementById("d2");
var d3box = document.getElementById("d3");
var d4box = document.getElementById("d4");
var n1box = document.getElementById("n1");
var n2box = document.getElementById("n2");
var n3box = document.getElementById("n3");
var n4box = document.getElementById("n4");
var calcmean = document.getElementById("meanb");
var calcweightmean = document.getElementById("wb");

document.onkeydown = function(e){ 
    if (e.keyCode === 13) { 
        e.preventDefault();
        return false;
    }
}   //PREVENTS REFRESH WHEN CLICK ENTER

/////////////////////////////////////////////////

//SUB-ROUTINES

function validateform(x) {
    if (x == null || x == "") {
        return false;
    }
}

function checkgrades() {
    var full = true; //sees if all parts filled out
    var d1 = d1box.value; //variables to hold checks
    var d2 = d2box.value;
    var d3 = d3box.value;
    var d4 = d4box.value;
    var n1 = n1box.value; 
    var n2 = n2box.value;
    var n3 = n3box.value;
    var n4 = n4box.value;
    full = validateform(d1); //validate d1 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the denominators.");
        console.log("d1= " + d1);
        return false;
    }
    full = validateform(d2); //validate d2 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the denominators.");
        console.log("d2");
        return false;
    }
    full = validateform(d3); //validate d3 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the denominators.");
        console.log("d3");
        return false;
    }
    full = validateform(d4); //validate d4 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the denominators.");
        console.log("d4");
        return false;
    }
    full = validateform(n1); //validate n1 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the numerators.");
        return false;
    }
    full = validateform(n2); //validate n2 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the numerators.");
        return false;
    }
    full = validateform(n3); //validate n3 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the numerators.");
        return false ;
    }
    full = validateform(n4); //validate n4 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the numerators.");
        return false;
    }
    return true; //if got here every grade box is filled
}

function checkweights() {
    var full = true; //sees if all parts filled out
    var w1 = document.getElementById("w1").value; //variables to hold checks
    var w2 = document.getElementById("w2").value;
    var w3 = document.getElementById("w3").value;
    var w4 = document.getElementById("w4").value;

    full = validateform(w1); //validate d1 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the weights.");
        return false;
    }
    full = validateform(w2); //validate d2 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the weights.");
        console.log("w2");
        return false;
    }
    full = validateform(w3); //validate d3 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the weights.");
        console.log("w3");
        return false;
    }
    full = validateform(w4); //validate d4 and if not filled, stop
    if (full == false) {
        window.alert("Please fill in the weights.");
        console.log("w4");
        return false;
    }
    return true;
}

function updatePercent(n, d) {
    var result;
    var full = true;
    if (n == null || n == "" || d == null || d == "") {
        full = false;
    }
    if (full == false) {
        result = "";
    }

    else if (d.value <= 0 || n.value < 0 || isNaN(Number(n.value)) || isNaN(Number(d.value))) {
        result = "N/A"
    }
    else {
        result = n.value / d.value;
        result = Math.round(result * 100) / 100;
    }

    console.log(result);
    return result;
}

/////////////////////////////////////////////////

//CALCULATE MEAN AND WEIGHTED MEAN

calcmean.onclick = function () {

 ////////////////////////////////////////////////////

    var full = checkgrades();
    if (full == false){
        return;
    }

////////////////////////////////////////////////////

    var d1, d2, d3, d4, result;
    d1 = Number(document.querySelector("input[name='den1']").value); //get all demonimator values for calculations
    d2 = Number(document.querySelector("input[name='den2']").value);
    d3 = Number(document.querySelector("input[name='den3']").value);
    d4 = Number(document.querySelector("input[name='den4']").value);

    if (isNaN(d1) || isNaN(d2) || isNaN(d3) || isNaN(d4)) { //if one of the 4 isnt a number error
        window.alert("Please input numbers only!");
        return;
    }

    console.log("found d1,2,3,4");

    if (d1 <= 0 || d2 <= 0 || d3 <= 0 || d4 <= 0) { //if denominator <=0 math error
        window.alert("Denominators must be greater than 0!");
        return;
    }

    var n1 = Number(document.querySelector("input[name='num1']").value); //get all numerator values for calculations
    var n2 = Number(document.querySelector("input[name='num2']").value);
    var n3 = Number(document.querySelector("input[name='num3']").value);
    var n4 = Number(document.querySelector("input[name='num4']").value);
    console.log("found n1,2,3,4");

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) { //if one of the 4 isnt a number error
        window.alert("Please input numbers only!");
        return;
    }
    if (n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0) {
        window.alert("Numberators must be greater than or equal to 0!");
        return;
    }

    a1tot = n1 / d1;
    a2tot = n2 / d2;
    a3tot = n3 / d3;
    a4tot = n4 / d4;
    result = (a1tot + a2tot + a3tot + a4tot) / 4;
    result = Math.round(result * 100) / 100;
    console.log("result= " + result);
    document.getElementById("res").value = "The Mean of your Assignments is: " + result; //place result into result location
}

calcweightmean.onclick = function () {

    var full = checkgrades();
    if (full == false) {
        return;
    }
    full = checkweights();
    if (full == false) {
        return;
    }

    var d1, d2, d3, d4, result;
    d1 = Number(document.querySelector("input[name='den1']").value);
    d2 = Number(document.querySelector("input[name='den2']").value);
    d3 = Number(document.querySelector("input[name='den3']").value);
    d4 = Number(document.querySelector("input[name='den4']").value);

    if (isNaN(d1) || isNaN(d2) || isNaN(d3) || isNaN(d4)) {
        window.alert("Please input numbers only!");
        return;
    }

    console.log("found d1,2,3,4");

    if (d1 <= 0 || d2 <= 0 || d3 <= 0 || d4 <= 0) {
        window.alert("Denominators must be greater than 0!");
        return;
    }

    var n1 = Number(document.querySelector("input[name='num1']").value);
    var n2 = Number(document.querySelector("input[name='num2']").value);
    var n3 = Number(document.querySelector("input[name='num3']").value);
    var n4 = Number(document.querySelector("input[name='num4']").value);
    console.log("found n1,2,3,4");

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        window.alert("Please input numbers only!");
        return;
    }
    if (n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0) {
        window.alert("Numberators must be greater than or equal to 0!");
        return;
    }

    var w1 = Number(document.querySelector("input[name='w1']").value);
    var w2 = Number(document.querySelector("input[name='w2']").value);
    var w3 = Number(document.querySelector("input[name='w3']").value);
    var w4 = Number(document.querySelector("input[name='w4']").value);

    if (isNaN(w1) || isNaN(w2) || isNaN(w3) || isNaN(w4)) {
        window.alert("Please input numbers only!");
        return;
    }

    if (w1 < 0 || w2 < 0 || w3 < 0 || w4 < 0) {
        window.alert("Weights must be greater than or equal to 0!");
        return;
    }
    console.log("w1, w2, w3, w4= " + w1 + "," + w2 + "," + w3 + "," + w4);
    var a1tot = (n1 / d1) * w1;
    var a2tot = (n2 / d2) * w2;
    var a3tot = (n3 / d3) * w3;
    var a4tot = (n4 / d4) * w4;
    result = a1tot + a2tot + a3tot + a4tot;
    console.log("atots= " + result);
    result = result / (w1 + w2 + w3 + w4);
    result = Math.round(result * 100) / 100;
    document.getElementById("res").value = "The Weighted Mean of your Assignments is: " + result;
}

/////////////////////////////////////////////////

//UPDATE PERCENT AS GRADES TYPED IN!

n1box.onkeyup = function () {
    var result = updatePercent(n1box, d1box);
    document.getElementById("a1per").value = result;
}

d1box.onkeyup = function () {
    var result = updatePercent(n1box, d1box);
    document.getElementById("a1per").value = result;
}

n2box.onkeyup = function () {
    var result = updatePercent(n2box, d2box);
    document.getElementById("a2per").value = result;
}

d2box.onkeyup = function () {
    var result = updatePercent(n2box, d2box);
    document.getElementById("a2per").value = result;
}

n3box.onkeyup = function () {
    var result = updatePercent(n3box, d3box)
    document.getElementById("a3per").value = result;
}

d3box.onkeyup = function () {
    var result = updatePercent(n3box, d3box);
    document.getElementById("a3per").value = result;
}

n4box.onkeyup = function () {
    var result = updatePercent(n4box, d4box);
    document.getElementById("a4per").value = result;
}

d4box.onkeyup = function () {
    var result = updatePercent(n4box, d4box);
    document.getElementById("a4per").value = result;
}