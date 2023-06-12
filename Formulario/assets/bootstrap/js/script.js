function validar() {
    var ret_url =  validar_url();
    var ret_numero = validar_numero();
    var ret_password = validar_password();
    var ret_email = validar_email();
    var ret_confirmarpassword = validar_confirmarpass();
    var ret_direccion = validar_direccion();
    var ret_ciudad = validar_ciudad();
    return ret_url && ret_email && ret_numero && ret_password && ret_confirmarpassword && ret_direcc && ret_ciudad; 
}

// Validar campos obligatorios
if (email === "") {
    mostrarError("email", "El nombre de usuario es obligatorio");
    return false;
  }
  ocultarError("email");

  if (password === "") {
    mostrarError("password", "El campo de contraseña es obligatorio");
    return false;
  }
  ocultarError("password");

  if (confirmacionpassword === "") {
    mostrarError("confirmacion-password", "El campo de confirmación de contraseña es obligatorio");
    return false;
  }
  ocultarError("confirmacion-password");

  if (direccion === "") {
    mostrarError("direccion", "El campo de dirección es obligatorio");
    return false;
  }
  ocultarError("direccion");

  if (telefono === "") {
    mostrarError("telefono", "El campo de número de teléfono es obligatorio");
    return false;
  }
  ocultarError("telefono");


  //valdidar campos
function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("err_email");
    var arroba = email.indexOf("@");
    var punto = email.lastIndexOf(".");
    if (arroba < 1) {
        div.innerText = "El correo electrónico no tiene @ (arroba) o nombre de usuario";
        div.className = "text-danger";
        return false;
    } else {
        if (arroba < 2) {
            div.innerText = "El nombre de usuario del correo no es válido";
            div.className = "text-danger";
            return false;
        } else {
            if (arroba + 3 > punto || punto + 1 >= email.length - 1 ) {
                div.innerText = "El nombre de dominio no es válido";
                div.className = "text-danger";
                return false;
            } else {
                div.innerText = "";
                return true;
            }
        }
    }
}

function validar_url() {
    var url = document.getElementById("Url").value;
    var div = document.getElementById("err_url");
    var punto = url.lastIndexOf(".");
  
    if (punto < 0 || punto + 1 >= url.length - 1) {
      div.innerText = "El nombre de dominio no es válido";
      div.className = "text-danger";
      return false;
    } else {
      div.innerText = "";
      return true;
    }
  }

  function validar_numero() {
    var numero = document.getElementById("numero").value;
    var div = document.getElementById("err_numero");
  
    if (numero.length === 0 || isNaN(numero) || numero.length > 10) {
      div.innerText = "El número no es válido. Debe contener solo caracteres numéricos y tener un máximo de 10 dígitos.";
      div.className = "text-danger";
      return false;
    } else {
      div.innerText = "";
      return true;
    }
  }
  function validar_password() {
    var password = document.getElementById("password").value;
    
    var div = document.getElementById("err_pass");
  
    // Validar longitud de la contraseña
    if (password.length < 3 || password.length > 6) {
      div.innerText = "La contraseña debe tener de 3 a 6 caracteres.";
      div.className = "text-danger";
      return false;
    }
  
    // Validar al menos un dígito y una letra en la contraseña
    var tieneLetra = false;
    var tieneDigito = false;
  
    for (var i = 0; i < password.length; i++) {
      var char = password.charAt(i);
  
      if (isNaN(char)) {
        tieneLetra = true;
      } else if (!isNaN(char)) {
        tieneDigito = true;
      }
    }
  
    if (!tieneLetra || !tieneDigito) {
      div.innerText = "La contraseña debe contener al menos un dígito y una letra.";
      div.className = "text-danger";
      return false;
    }
  
    function validar_confirmarPass() {
        var confirmarpassword = document.getElementById("confirmacion-password").value;
        var password = document.getElementById("password").value;
        var div = document.getElementById("err_pass");
      
        if (confirmarpassword !== password) {
          div.innerText = "La confirmación de contraseña no coincide.";
          div.className = "text-danger";
          return false;
        } else {
          div.innerText = "";
          return true;
        }
      }
  
    // Si se superan todas las validaciones, la contraseña es válida
    div.innerText = "";
    return true;
  }

  function validar_direccion() {
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("err_direcc");

    if (direccion.trim() === "") {
        div.innerText = "La dirección no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_ciudad() {
    var ciudad = document.getElementById("comuna").value;
    var div = document.getElementById("err_comuna");

    if (ciudad === "Seleccione una comuna.....") {
        div.innerText = "Debe seleccionar una comuna";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}








