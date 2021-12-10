## Prueba Desarrollo de Aplicaciones Móviles

# Integrantes
* Jorge Alba
* Juan Bolaños
* Bernabé Dávila
* Byron Huaraca

## Funcionalidad Juan

## Funcionalidad Recuperar contraseña con Firebase

Para implementar la funcionalidad de recuperar contraseña con firebase, se procede a crear un ion-button en el head del html de la pagina principal de login que permitirá la redirección a la página de recueprar contraseña, como se muestra en la siguiente figura.

![image](https://user-images.githubusercontent.com/66254573/145497602-e9efe9f8-76aa-4e4e-8ebe-4000d23c17a6.png)

Dentro del html de la página de recuperar contraseña, destaca in ion-input el cual capturará el correo elecrónico ingresado por el usuario puesto que es lo único que se necesita como requisito para poder recuperar la contraseña, como también un ion-button que porporcionará la funcionalidad de envio de el ink de recuperación al correo del usuario, la siguiente figura muestra el codigo html mencionado.

![image](https://user-images.githubusercontent.com/66254573/145497671-0c93a960-f85f-443b-8f03-278d1016f05d.png)


Dentro del .ts de la página recuerar se debe codificar la funcionalidad que capture el correo ingresado y también altere al usuario de que dicho correo fue enviado y que revise su bandeja de su correo como se visualiza en la siguiente figura.

![image](https://user-images.githubusercontent.com/66254573/145498213-f7000fb7-a62b-4d3a-8d01-f59d324eec32.png)


En el servicio que esta siendo usado por el proyecto se debe generar la función que envíe el correo con el respectivo link de recuperación, para esto es necesario que el correo sea recibido como parametro para realizar el proceso correspondiente como se muestra en la siguiente figura.

![image](https://user-images.githubusercontent.com/66254573/145498372-386b5e79-309f-428e-9b70-cfbfb86a3c89.png)

## Funcionalidad de la comparticion de archivos

Para implementar esta funcionalidad tenemos que crear en el archivo chat.page.html dos elementos que son un imput que nos permita capturar el archivo que queramos subir.

![image](https://user-images.githubusercontent.com/58036212/145499491-40eb4b68-ad96-409c-9653-f27cb195d8f0.png)

Y un boton que nos permita descargar el archivo una vez que este compartido como mensaje.

![image](https://user-images.githubusercontent.com/58036212/145499640-7460bdcd-6578-4b69-a59b-3a6e24af7a2f.png)


La funcion que se encuentra en el archivo chat.page.ts llamada uploadFile es asincronica y nos permite capturar el archivo que fue cargado y obtener su nombre, la ruta que queramos drle y el archvivo. Luego con lo que el link que nos devuelva la funcion en el servicio la guardaremos en una variable y añadimos los parametros obtenidos en el servicio en addChatMessages para que se suban como mensaje en el formato establecido.

![image](https://user-images.githubusercontent.com/58036212/145500439-12f8441c-6b98-48f5-8471-d0da86f60a64.png)


Por ultimo en el archivo chat.service.ts se encontrara el servicio llamado uploadFile que recibira los parametros del archivo para que este sea subido en el Storage de Firebase en el ruta "Archivos/" y por ultimo la funcion nos devolvera una promesa que sera el link de descarga del archivo.

![image](https://user-images.githubusercontent.com/58036212/145500490-a05ca14e-ce60-4bdc-9b23-1c2a99831392.png)


## Capturas de ejecución

* Pantalla de inicio de sesión
![Pantalla inicio](https://user-images.githubusercontent.com/58042215/145498670-297cce6f-b8d0-4082-8a7b-2e62e932a494.PNG)

* Pantalla de registro de usuario
![Registro](https://user-images.githubusercontent.com/58042215/145498706-c4796a11-8769-489f-a2ae-22784a0d2aa2.PNG)

* Pantalla de recuperación de contraseña
![Pantallla recuperar](https://user-images.githubusercontent.com/58042215/145498713-4ee41b30-2ef6-450c-95d4-dab71a3adacd.PNG)

* Pantalla de chat de usuarios
![Chat de usuarios](https://user-images.githubusercontent.com/58042215/145498954-ac45134e-2817-4af2-a8c5-9a36bce94176.PNG)

## Links del video 

* Youtube
https://youtu.be/tqkjV9_tXGM

* Twitter
https://twitter.com/Jorge71652053/status/1469108181628596226?s=20

* Facebook
https://www.facebook.com/100003773457594/posts/2348226068646485/?sfnsn=mo
