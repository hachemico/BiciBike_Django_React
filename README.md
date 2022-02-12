# BiciBike_Django_React
Aplicación gestión Alquiler bicicletas urbanas.

## DESPLIEGUE APLICACIÓN EN DOCKER.
<br>

Para desplegar el proyecto, tenemos en cuenta las partes que los forman:
 - Database: MySql
 - Backend: Django Rest Framework
 - Frontend: React

Se va a hacer uso de 2 Dockerfiles, uno para Django y otro para React.
Para el proceso globar se hace uso de un Docker-compose.yml

### MYSQL

Empezamos con el docker-compose.yml

- Lo primero es asignar la version del archivo.
- A continuación vienen los servicios.
#### mysql
- IMAGE: Definimos la imagen sobre la que vamos a crear el contendor. Podemos encontrarla en "DockerHub".
- COMMAND: El comando que se ejecutara una vez creada la imagen antes de finalizar.
- PORT: Puertos
- env_file: indicamos que hay parametros definido en un archivo de tipo env.
- networks: el nombre de la networks que utilizaran los contenedores para comunicación.

![Captura de pantalla de 2022-02-12 21-10-15](https://user-images.githubusercontent.com/62303274/153726774-94b76a09-1c70-49c5-8087-90652190f7c1.png)


