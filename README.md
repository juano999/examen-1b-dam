## Examen 1B Desarrollo de Aplicaciones Móviles

# Integrantes
* Jorge Alba
* Juan Bolaños
* Bernabé Dávila
* Byron Huaraca

## Inicialización del Proyecto en Firebase

Para esta aplicación Utilizaremos Firebase, el cual nos facilitará servicios como almacenamiento, base de datos o autenticación por correo electrónico
Algo importante de mencionar son las credenciales que nos proporcionará Firebase, las cuales debemos incluirlas en nuestra app.

![image](https://user-images.githubusercontent.com/58042023/145520819-36075fc8-0f58-4de4-bda4-5c35ab4fc47c.png)


## Funcionalidad ChatService con FireBase

Utilizaremos las herramnientas como Firestorage y FireAuth para implementar este servicio el cual cual nos permitira: 

#### Registrarnos  
![image](https://user-images.githubusercontent.com/58042023/145520966-eca91e13-b91b-437c-9baf-df8282f2b578.png)


#### Iniciar Sesión  
![image](https://user-images.githubusercontent.com/58042023/145521009-c8a7be9e-6d65-471e-9503-6711d4798b56.png)


#### Salir de la Sesión
![image](https://user-images.githubusercontent.com/58042023/145521028-49d54b57-d0cf-4f02-b89c-1721b20042eb.png)


#### Enviar mensajes al chat
![image](https://user-images.githubusercontent.com/58042023/145521067-8756f981-cc55-43da-84e1-5a973aff0a4c.png)


#### Recibir los Mensajes del Chat
![image](https://user-images.githubusercontent.com/58042023/145521138-9e024ddc-b97b-4bcc-950b-3d2f596f272c.png)

 
## Funcionalidad Recuperar contraseña con Firebase

Para implementar la funcionalidad de recuperar contraseña con firebase, se procede a crear un ion-button en el head del html de la página principal de login que permitirá la redirección a la página de recueprar contraseña, como se muestra en la siguiente figura.

![image](https://user-images.githubusercontent.com/66254573/145497602-e9efe9f8-76aa-4e4e-8ebe-4000d23c17a6.png)

Dentro del html de la página de recuperar contraseña, destaca in ion-input el cual capturará el correo elecrónico ingresado por el usuario puesto que es lo único que se necesita como requisito para poder recuperar la contraseña, como también un ion-button que porporcionará la funcionalidad de envio de el ink de recuperación al correo del usuario, la siguiente figura muestra el codigo html mencionado.

![image](https://user-images.githubusercontent.com/66254573/145497671-0c93a960-f85f-443b-8f03-278d1016f05d.png)


Dentro del .ts de la página recuerar se debe codificar la funcionalidad que capture el correo ingresado y también alerte al usuario de que dicho correo fue enviado y que revise su bandeja de su correo como se visualiza en la siguiente figura.

![image](https://user-images.githubusercontent.com/66254573/145498213-f7000fb7-a62b-4d3a-8d01-f59d324eec32.png)


En el servicio que esta siendo usado por el proyecto se debe generar la función que envíe el correo con el respectivo link de recuperación, para esto es necesario que el correo sea recibido como parametro para realizar el proceso correspondiente como se muestra en la siguiente figura.

![image](https://user-images.githubusercontent.com/66254573/145498372-386b5e79-309f-428e-9b70-cfbfb86a3c89.png)

## Implementación de botón desplegable

Con el motivo de mejorar la visualización de la aplicación se realizo la implementación de un botón en la esquina inferior izquierda cuyo código se lo muestra en la siguiente figura.

![image](https://user-images.githubusercontent.com/66254573/148398748-2e3c3f71-4f2d-4067-b9c7-f5f22c3fb451.png)

El cual al pulsarlo despliguará otros botones; entre los cuales se encuentran el botón de envio de archivos, el botón que envia la ubicación actual y por último, el botón que permite capturar y enviar imagenes como se muestra en la siguiente figura.

![image](https://user-images.githubusercontent.com/66254573/148398456-2bbef60d-e5ca-4dbe-a9e5-c03f799eaea0.png)


## Funcionalidad de la compartición de archivos

Para implementar esta funcionalidad tenemos que crear en el archivo chat.page.html dos elementos que son un imput que nos permita capturar el archivo que queramos subir.

![image](https://user-images.githubusercontent.com/58036212/145499491-40eb4b68-ad96-409c-9653-f27cb195d8f0.png)

Y un botón que nos permita descargar el archivo una vez que este compartido como mensaje.

![image](https://user-images.githubusercontent.com/58036212/145499640-7460bdcd-6578-4b69-a59b-3a6e24af7a2f.png)


La función que se encuentra en el archivo chat.page.ts llamada uploadFile es asincronica y nos permite capturar el archivo que fue cargado y obtener su nombre, la ruta que queramos darle y el archvivo. Luego con lo que el link que nos devuelva la funcion en el servicio la guardaremos en una variable y añadimos los parametros obtenidos en el servicio en addChatMessages para que se suban como mensaje en el formato establecido.

![image](https://user-images.githubusercontent.com/58036212/145500439-12f8441c-6b98-48f5-8471-d0da86f60a64.png)


Por último, en el archivo chat.service.ts se encontrara el servicio llamado uploadFile que recibira los parametros del archivo para que este sea subido en el Storage de Firebase en el ruta "Archivos/" y por ultimo la funcion nos devolvera una promesa que sera el link de descarga del archivo.

![image](https://user-images.githubusercontent.com/58036212/145500490-a05ca14e-ce60-4bdc-9b23-1c2a99831392.png)


## Funcionalidad de envío de ubicación

Para realizar esta funcionalidad se deben usar el plugin de geolocation de capacitor, para lo cual se procede a instalar dicho plugin para posteriormente generar dentro del boton desplegable correspondiente y la funcionalidad en el .ts de la página de Chat.

### Archivo .ts de la página de Chat

Para la funcionalidad se genera una función que recepte la ubicación actual del usuario y por medio del servicio de envío de mesnajes se genera un string con dicha ubicación la cual es el parametro que recibe la función que envia el mensaje a la base de datos y lo muestra en el chat.

![image](https://user-images.githubusercontent.com/66254573/148399084-8277ed13-fe38-4a4f-a3f1-9a7b5f41d456.png)


## Capturas de ejecución

* Pantalla de inicio de sesión
![Pantalla inicio](https://user-images.githubusercontent.com/58042215/145498670-297cce6f-b8d0-4082-8a7b-2e62e932a494.PNG)

* Pantalla de registro de usuario
![Registro](https://user-images.githubusercontent.com/58042215/145498706-c4796a11-8769-489f-a2ae-22784a0d2aa2.PNG)

* Pantalla de recuperación de contraseña
![Pantallla recuperar](https://user-images.githubusercontent.com/58042215/145498713-4ee41b30-2ef6-450c-95d4-dab71a3adacd.PNG)

* Pantalla de chat de usuarios
![Chat de usuarios](https://user-images.githubusercontent.com/58042215/145498954-ac45134e-2817-4af2-a8c5-9a36bce94176.PNG)

* Envío de ubicación actual
![image](https://user-images.githubusercontent.com/66254573/148399650-a5263937-6532-4210-ac7e-684117e2b39e.png)

## Capturas de ejecución en celulares

* Primer dispositivo

### Pantalla de inicio de sesión 

![image](https://user-images.githubusercontent.com/66254573/148624258-d053ea4c-7990-4e9c-bef1-4a195d465d38.png)

### Pantalla de permisos de ubicación

![image](https://user-images.githubusercontent.com/66254573/148624273-d404c601-6472-4c39-a39a-a136cdef63c1.png)

### Pantalla de chat

![image](https://user-images.githubusercontent.com/66254573/148624276-a6144c4f-37a9-4e6a-b17a-6e12b435783f.png)

* Segundo dispotivo

### Pantalla de inicio de sesión 

![image](https://user-images.githubusercontent.com/66254573/148624295-6fc22c71-644d-4c0f-8d42-a9f2b804a522.png)

### Pantalla de permisos de ubicación

![image](https://user-images.githubusercontent.com/66254573/148624430-d5e54aa7-5d46-45c1-a7a0-226ff559668a.png)


### Pantalla de chat

![image](https://user-images.githubusercontent.com/66254573/148624316-95af5974-31af-428d-8907-e928595128de.png)












