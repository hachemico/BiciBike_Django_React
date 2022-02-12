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

<br>
### BACKEND / Server

Seguimos con el docker-compose.yml
- BUILD: indicamos en la carpeta donde se encuentra el Dockerfile para que "construya" la imagen de Django.
- CONTAINER_NAME: nombre del contenedor
- COMMAND:El comando que se ejecutara una vez creada la imagen antes de finalizar.
  - wait-for-it.sh => ejecuta un script que aplica un delay, mientras no arranque el contendor/puerto indicado.
  - python manage.py runserver 0.0.0.0:8000 => arranca el servidor.
 
- PORTS: Puertos en este caso el 8000.
- ENV_FILE: indicamos que hay parametros definido en un archivo de tipo env.
- NETWORKS: el nombre de la networks que utilizaran los contenedores para comunicación.
- DEPENDS_ON: al indicarle un nombre, docker entiende que el funcionamiento de este contenedor "depende" del indicado.

![Captura de pantalla de 2022-02-12 21-20-43](https://user-images.githubusercontent.com/62303274/153727069-5db0c46a-833b-4cf8-ac22-56c8d68d1508.png)


IMAGE/DOCKERFILE/




- BUILD: indicamos en la carpeta donde se encuentra el Dockerfile para que "construya" la imagen de Django.
- CONTAINER_NAME: nombre del contenedor
- COMMAND:
- PORTS:
- ENV_FILE:
- NETWORKS:
- DEPENDS_ON:

