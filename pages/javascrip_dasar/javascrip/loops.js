// Loop menggunakan for
var output = "";
for (var i = 1; i <= 10; i++) {
  output += i + " ";
}
document.getElementById("output").innerHTML = "Loop dengan for: " + output;

// Loop menggunakan while
var output = "";
var j = 1;
while (j <= 10) {
  output += j + " ";
  j++;
}
document.getElementById("output").innerHTML += "<br>Loop dengan while: " + output;

// Loop menggunakan do-while
var output = "";
var k = 1;
do {
  output += k + " ";
  k++;
} while (k <= 10);
document.getElementById("output").innerHTML += "<br>Loop dengan do-while: " + output;
