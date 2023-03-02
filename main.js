// alert("HOLA JAVASCRIPT")

var nombres = "Camilo Gonzalez";
var numidentif = 1014985470
var direccion = "Calle 100 # 15-25"
var telefono = 3112568899
var edad = 26
var estado_civil = "Soltero"
var numhijos = 0
var estatura = 172
var fecha_contrata = "02/05/21"
var sueldo_basico = 3200000
var dias_laborados = 25


//var concatenar = nombres + " " + numidentif + " " + direccion + " " + telefono + " " + edad + " " + estado_civil;
//document.write(concatenar);



/*
document.write(numidentif);
document.write(nombres);
*/
var datos = document.getElementById("datos");
//datos.innerHTML = concatenar;
datos.innerHTML = `
<h1>Estos son los datos</h1>
<h2>Mi nombre: ${nombres}</h2>
<h3>C.C.: ${numidentif}</h3>
<h3>Direccion: ${direccion}</h3>
<h3>Telefono: ${telefono}</h3>
<h3>Edad: ${edad} años</h3>
<h3>Estado Civil: ${estado_civil}</h3>
<h3>Numero Hijos: ${numhijos}</h3>
<h3>Estatura: ${estatura} cms</h3>
<h3>Fecha Contratacion: ${fecha_contrata}</h3>
<h3>Sueldo Basico: ${sueldo_basico}</h3>
<h3>Dias laborados: ${dias_laborados} dias</h3>
`; 