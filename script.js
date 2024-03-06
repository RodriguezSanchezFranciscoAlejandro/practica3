function validateForm( ) {

    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
     if ( name == "Franco" &&  password == "88" ) {
       //alert("usuario y contrasena validos")
       window.open('content.html');
     }   else {
       alert("intentelo nuevamente");
     }

 };