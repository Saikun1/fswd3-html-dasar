function calculate() {
    // Dapatkan nilai dari input angka pertama dan kedua
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
  
    // Dapatkan nilai operator yang dipilih dari select
    var operator = document.getElementById("operator").value;
  
    // Hitung hasil sesuai dengan operator yang dipilih
    var result;
    if (operator == "+") {
      result = parseInt(num1) + parseInt(num2);
    } else if (operator == "-") {
      result = parseInt(num1) - parseInt(num2);
    } else if (operator == "*") {
      result = parseInt(num1) * parseInt(num2);
    } else if (operator == "/") {
      result = parseInt(num1) / parseInt(num2);
    }
  
    // Tampilkan hasil di elemen p
    document.getElementById("result").innerHTML = "Hasil: " + result;
  }
  