/*var b = document.getElementByID("B1");
b.onclick = function () {
    window.alert("HELLLLPPPPPP!!!!");
}*/

/*document.getElementById("B1").addEventListener('click', function(){
    console.log("you've clicked me!");
});*/

function validateform(x) {
    if (x == null || x == "") {
        return false;
        // redirect to where you want
    }
}

function checkgrades() {
    var full = true; //sees if all parts filled out
    var d1 = document.getElementById("d1").value; //variables to hold checks
    var d2 = document.getElementById("d2").value;
    var d3 = document.getElementById("d3").value;
    var d4 = document.getElementById("d4").value;
    var n1 = document.getElementById("n1").value; 
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;
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

var calcmean = document.getElementById("meanb");
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

    var totden = d1 + d2 + d3 + d4;
    console.log(totden);
    var n1 = Number(document.querySelector("input[name='num1']").value); //get all numerator values for calculations
    var n2 = Number(document.querySelector("input[name='num2']").value);
    var n3 = Number(document.querySelector("input[name='num3']").value);
    var n4 = Number(document.querySelector("input[name='num4']").value);
    console.log("found n1,2,3,4");

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) { //if one of the 4 isnt a number error
        window.alert("Please input numbers only!");
        return;
    }

    var totnum = n1 + n2 + n3 + n4;
    console.log(totnum);
    result = totnum / totden;
    console.log("result= " + result);
    document.getElementById("res").value = "The Mean of your Assignments is: " + result; //place result into result location
}

var calcweightmean = document.getElementById("wb");
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
    document.getElementById("res").value = "The Weighted Mean of your Assignments is: " + result;
}