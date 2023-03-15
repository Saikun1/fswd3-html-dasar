//Menggunakan switch
var day = new Date().getDay();
switch (day) {
  case 0:
    document.getElementById("output").innerHTML = "Hari ini adalah Minggu";
    break;
  case 1:
    document.getElementById("output").innerHTML = "Hari ini adalah Senin";
    break;
  case 2:
    document.getElementById("output").innerHTML = "Hari ini adalah Selasa";
    break;
  case 3:
    document.getElementById("output").innerHTML = "Hari ini adalah Rabu";
    break;
  case 4:
    document.getElementById("output").innerHTML = "Hari ini adalah Kamis";
    break;
  case 5:
    document.getElementById("output").innerHTML = "Hari ini adalah Jumat";
    break;
  case 6:
    document.getElementById("output").innerHTML = "Hari ini adalah Sabtu";
    break;
  default:
    document.getElementById("output").innerHTML = "Invalid day";
}

