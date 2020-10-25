#language <es>
  Feature: Mercury Tours

    @MyFlight_Login_Existoso
    Scenario Outline: Como usuario existente y habilitado del la web Mercury Tours,
                      quiero ingresar a la página web,
                      para verificar el Login Correcto.

      Given Ingreso a la url "<caso_prueba>"
      When Ingreso el usuario "<caso_prueba>"
      And La contraseña "<caso_prueba>"
      Then se da clic en el boton Sing-IN ingresando correctamente


      Examples:
        | caso_prueba |
        |           1 |

#    @MyFlight_Login_Fallido
#    Scenario Outline: Login Mercury Exitoso
#
#      Given Ingreso a la url "<caso_prueba>"
#      When Ingreso el usuario "<caso_prueba>"
#      And La contraseña "<caso_prueba>"
#      Then se da clic en el boton Sing-IN mostrndo un fallo
#
#
#
#      Examples:
#        | caso_prueba |
#        |           1 |