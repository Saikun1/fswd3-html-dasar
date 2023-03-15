//membuat fungsi
function greeting(name) {
    return "Hello " + name;
  }
//Menggunakan object
var person = {
    name: "Saikun",
    age: 30,
    address: {
      street: "Jl. pasundan",
      city: "Bandung",
    },
  };
  var message = "Nama: " + person.name + "<br>Umur: " + person.age + "<br>Alamat: " + person.address.street + ", " + person.address.city;
  document.getElementById("output").innerHTML = message;
  
