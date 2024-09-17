let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = '!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    
    if( numeroDigitado < 8 ){
        alert("La cantidad de caracteres debe ser mayor que 8");
    }
    
    let password = '';
    for(let i= 0; i < numeroDigitado; i++ ){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;

    
    }        

    contrasena.value = password;

    validarFortaleza(password); //

}
 
function limpiar() {
    contrasena.value = '';
    cantidad.value = '';  // Opcionalmente, también limpia el campo de cantidad
}

// Función para validar la fortaleza de la contraseña
function validarFortaleza(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!@#$%^&*()]/.test(password);

    if (tieneMayuscula && tieneNumero && tieneEspecial) {
        mensaje.textContent = "Contraseña fuerte";
        mensaje.style.color = "green"; // Mensaje en verde si es fuerte
    } else {
        mensaje.textContent = "Contraseña débil: debe incluir al menos una letra mayúscula, un número y un carácter especial";
        mensaje.style.color = "red"; // Mensaje en rojo si es débil
    }
}


// Asignar funciones a los botones
botonGenerar.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar);







