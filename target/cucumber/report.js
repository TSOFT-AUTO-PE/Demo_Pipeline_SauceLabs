$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("APP_TSOFT.feature");
formatter.feature({
  "line": 1,
  "name": "FLUJOS APP DEMO TSOFT",
  "description": "",
  "id": "flujos-app-demo-tsoft",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Nuevo Registro",
  "description": "",
  "id": "flujos-app-demo-tsoft;nuevo-registro",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TSOFT_1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "se ingresa a la APP DEMO TSOFT",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "se ingresa a la opción Registrarse",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "se ingresan los datos, nombre \"\u003ccaso_prueba\u003e\", id \"\u003ccaso_prueba\u003e\", contraseñas \"\u003ccaso_prueba\u003e\" \"\u003ccaso_prueba\u003e\" y se aceptan los términos",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "se da clic en el botón Registrarse y se valida mensaje",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "flujos-app-demo-tsoft;nuevo-registro;",
  "rows": [
    {
      "cells": [
        "caso_prueba"
      ],
      "line": 12,
      "id": "flujos-app-demo-tsoft;nuevo-registro;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 13,
      "id": "flujos-app-demo-tsoft;nuevo-registro;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 178881100,
  "status": "passed"
});
formatter.before({
  "duration": 16880903200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Nuevo Registro",
  "description": "",
  "id": "flujos-app-demo-tsoft;nuevo-registro;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TSOFT_1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "se ingresa a la APP DEMO TSOFT",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "se ingresa a la opción Registrarse",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "se ingresan los datos, nombre \"1\", id \"1\", contraseñas \"1\" \"1\" y se aceptan los términos",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "se da clic en el botón Registrarse y se valida mensaje",
  "keyword": "Then "
});
formatter.match({
  "location": "steps_TSOFT.seIngresaALaAPPDEMOTSOFT()"
});
formatter.result({
  "duration": 1676685400,
  "status": "passed"
});
formatter.match({
  "location": "steps_TSOFT.seIngresaALaOpciónRegistrarse()"
});
formatter.result({
  "duration": 1872190900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "1",
      "offset": 39
    },
    {
      "val": "1",
      "offset": 56
    },
    {
      "val": "1",
      "offset": 60
    }
  ],
  "location": "steps_TSOFT.seIngresanLosDatosNombreIdContraseñasYSeAceptanLosTérminos(String,String,String,String)"
});
formatter.result({
  "duration": 5686793500,
  "status": "passed"
});
formatter.match({
  "location": "steps_TSOFT.seDaClicEnElBotónRegistrarseYSeValidaMensaje()"
});
formatter.result({
  "duration": 2404385300,
  "status": "passed"
});
formatter.after({
  "duration": 1133668900,
  "status": "passed"
});
});