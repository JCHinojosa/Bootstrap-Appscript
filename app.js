//esta es la funcion que se ejecuta cada vez que se carga la pagina
function doGet () {

  var template = HtmlService.createTemplateFromFile('Registro');
  template.pubUrl = "https://script.google.com/macros/s/AKfycbzvL9_aWPvOPVBhPpgiurc0hBPra6C3QteveYSwmG90/dev";

  var output = template.evaluate();

  return output;

}

//como manejamos los CSS y JS de archivos externos al HTML, creamos la funcion include para mandarlos llamar, recibe como parametro el nombre del archivo
function include ( filename ) {

  return HtmlService.createHtmlOutputFromFile(filename).getContent();


}

function doPost (e) {

  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var sheetRegistro  = SS.getSheetByName('Registro');

  console.log (e);

     var id = new Date();
     var email = e.parameter.email;
     var gradoAcademico = e.parameter.gradoAcademico;
     var fechaNacimiento = e.parameter.fechaNacimiento;
     var pais = e.parameter.pais;
     var password = e.parameter.password;
     var nombreCompleto = e.parameter.nombreCompleto;
     var acuerdoPrivacidad = (e.parameter.acuerdoPrivacidad == 'on') ? 'Aceptado' :'Rechazado';

     sheetRegistro.appendRow([id, nombreCompleto,email, password, fechaNacimiento, pais, gradoAcademico, acuerdoPrivacidad ]);


return HtmlService.createTemplateFromFile('RegistroTerminado').evaluate();

}