## Prueba Desarrollo de Aplicaciones Móviles

# Integrantes
* Jorge Alba
* Juan Bolaños
* Bernabé Dávila
* Byron Huaraca

## Funcionalidad Juan

## Funcionalidad Recuperar contraseña con Firebase

Para implementar la funcionalidad de recuperar contraseña con firebase, se procede a crear un ion-button en el head del html de la pagina principal de login que permitirá la redirección a la página de recueprar contraseña, como se muestra en la siguiente figura:

![image](https://user-images.githubusercontent.com/66254573/145497602-e9efe9f8-76aa-4e4e-8ebe-4000d23c17a6.png)

Dentro del html de la página de recuperar contraseña, destaca in ion-input el cual capturará el correo elecrónico ingresado por el usuario puesto que es lo único que se necesita como requisito para poder recuperar la contraseña, como también un ion-button que porporcionará la funcionalidad de envio de el ink de recuperación al correo del usuario, la siguiente figura muestra el codigo html mencionado.

![image](https://user-images.githubusercontent.com/66254573/145497671-0c93a960-f85f-443b-8f03-278d1016f05d.png)


Dentro del .ts de la página recuerar se debe codificar la funcionalidad que capture el correo ingresado y también altere al usuario de que dicho correo fue enviado y que revise su bandeja de su correo como se visualiza en la siguiente figura.

![image](https://user-images.githubusercontent.com/66254573/145498213-f7000fb7-a62b-4d3a-8d01-f59d324eec32.png)


En el servicio que esta siendo usado por el proyecto se debe generar la función que envíe el correo con el respectivo link de recuperación, para esto es necesario que el correo sea recibido como parametro para realizar el proceso correspondiente como se muestra en la siguiente figura.

![image](https://user-images.githubusercontent.com/66254573/145498372-386b5e79-309f-428e-9b70-cfbfb86a3c89.png)

## Funcionalidad Berna

## Capturas de ejecución

## Links del video 

* Youtube
https://youtu.be/tqkjV9_tXGM
