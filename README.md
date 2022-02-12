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
- COMMAND: El comando que se ejecutara una vez creada la imagen antes de finalizar.
  - wait-for-it.sh => ejecuta un script que aplica un delay, mientras no arranque el contendor/puerto indicado.
  - python manage.py runserver 0.0.0.0:8000 => arranca el servidor.
 
- PORTS: Puertos en este caso el 8000.
- ENV_FILE: indicamos que hay parametros definido en un archivo de tipo env.
- NETWORKS: el nombre de la networks que utilizaran los contenedores para comunicación.
- DEPENDS_ON: al indicarle un nombre, docker entiende que el funcionamiento de este contenedor "depende" del indicado.

![Captura de pantalla de 2022-02-12 21-20-43](https://user-images.githubusercontent.com/62303274/153727069-5db0c46a-833b-4cf8-ac22-56c8d68d1508.png)

#### IMAGE/DOCKERFILE/

- FROM: Definimos la imagen sobre la que vamos a crear el contendor. Podemos encontrarla en "DockerHub".
- ENV : Variables.
- ADD: añadimos archivos o directorios a la imagen.
- WORKDIR: Equivalente a PWD, indica en que ruta nos encontramos en el proyecto.
- RUN:
  - chmod +x ./wait-for-it.sh => aplicamos permisos de ejecución al script.
  - pip install --upgrade pip => actualiza pip.
  - pip intall -r requirements.txt => instala las dependencias declaradas en requeriments.txt
- EXPOSE: exponer el puertos.

![Captura de pantalla de 2022-02-12 21-22-48](https://user-images.githubusercontent.com/62303274/153727138-d2be014a-cc8a-4730-a1ba-9d8782c5bd1c.png)

#### DJANGO/SETTINGS.PY
Dentro del proyecto encontramos el archivo setting.py en el que tenemos definidos los parametros de conexión a base de datos.
Se configuran variables de entorno para valores sensibles, que no deben ser públicos.

Para ello => Declaramos import os y definimos las variables.

![Captura de pantalla de 2022-02-12 21-39-04](https://user-images.githubusercontent.com/62303274/153727601-8a1b1903-d178-4f4b-976f-d58fe461b896.png)

Estos valores están definidos en un archivo .env privado.

> Tener en cuenta que el valor de HOST coincide con el nombre de la imagen del contenedor de MYSQL.

### FRONTEND / Client

- BUILD: indicamos en la carpeta donde se encuentra el Dockerfile para que "construya" la imagen de Django.
- CONTAINER_NAME: nombre del contenedor
- COMMAND: El comando que se ejecutara una vez creada la imagen antes de finalizar.
  - bash -c "npm install && npm start" => instala las dependencias y arranca react.
- PORTS: Puertos en este caso el 8000.
- ENV_FILE: indicamos que hay parametros definido en un archivo de tipo env.
- NETWORKS: el nombre de la networks que utilizaran los contenedores para comunicación.
- DEPENDS_ON: al indicarle un nombre, docker entiende que el funcionamiento de este contenedor "depende" del indicado.
<br>

![Captura de pantalla de 2022-02-12 21-31-08](https://user-images.githubusercontent.com/62303274/153727392-a5e51abf-db29-4c83-b417-17e7ee6cd4ba.png)

<br>
    
#### IMAGE/DOCKERFILE/

- FROM: Definimos la imagen sobre la que vamos a crear el contendor. Podemos encontrarla en "DockerHub".
- ADD: añadimos archivos o directorios a la imagen.
- WORKDIR: Equivalente a PWD, indica en que ruta nos encontramos en el proyecto.
- EXPOSE: exponer el puertos.
<br>

![Captura de pantalla de 2022-02-12 21-32-43](https://user-images.githubusercontent.com/62303274/153727437-10c046ee-9958-4b2a-92ea-04632ec46f25.png)

<br>

### NETWORKS

Definimos a nivel globarl las redes que emplean los contenedores en la comunicación.

![Captura de pantalla de 2022-02-12 21-34-17](https://user-images.githubusercontent.com/62303274/153727469-058a51d0-59e4-4fba-8431-93aca5d55de1.png)

<br>

## DOCKER-COMPOSE.YML COMPLETO

![Captura de pantalla de 2022-02-12 21-35-12](https://user-images.githubusercontent.com/62303274/153727515-c6a67d9d-9de5-4564-8a9b-8ba0db6d971a.png)

<br>

## PUESTA EN MARCHA.

Lo primero que tenemos que hacer es decargarse el repositorio desde Github en la Rama de Develop.

- $ git clone https://github.com/hachemico/BiciBike_Django_React.git

Nos situaremos en la raiz del proyecto, en el que tenemos el docker-compose.yml.

Ejecutamos:
 - $ docker-compose up

Cliente:

```
http://0.0.0.0:3000/
```

Server: 

```
http://0.0.0.0:8000/admin/ 
http://0.0.0.0:8000/api/

```


