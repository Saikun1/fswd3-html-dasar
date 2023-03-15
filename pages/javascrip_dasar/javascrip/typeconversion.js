var str = "10";
var num = parseInt(str);
console.log(num); // Output: 10

var str2 = "3.14";
var num2 = parseFloat(str2);
console.log(num2); // Output: 3.14

var num = 10;
var str = "Nilai: " + num;
console.log(str); // Output: Nilai: 10

var num = 10;
var str = String(num);
console.log(str); // Output: "10"

var bool = true;
var str2 = String(bool);
console.log(str2); // Output: "true"

var num = 10;
var bool = Boolean(num);
console.log(bool); // Output: true

var str = "";
var bool2 = Boolean(str);
console.log(bool2); // Output: false

function convertToNum() {
    var input = document.getElementById("inputNum").value;
    var num = parseInt(input);
    document.getElementById("outputNum").innerHTML = "Number: " + num;

    let isLulus = true;
    document.getElementById("lulus").innerHTML = "Lulus: " + (isLulus ? "Ya" : "Tidak");
    <input type="checkbox" name="isLulus" checked></input>
  }