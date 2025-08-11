# UsuariosBackend

API RESTful desarrollada con Spring Boot para gestionar usuarios mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

## Tecnologías usadas


- Java 17
- Spring Boot 3.x
- Spring Security (Autenticación y autorización básica)
- JPA / Hibernate para persistencia de datos
- Base de datos MySQL
- Swagger para documentación de la API

## Requisitos previos

- Tener instalado Java 17 o superior.
- Tener MySQL instalado y corriendo.
- Base de datos configurada según el script SQL en la carpeta `database/` (por ejemplo, `BD_EXAMEN.sql`).
- Backend configurado con las credenciales correctas en `application.properties` o `application.yml`.

## Configuración

En `src/main/resources/application.properties` configura los parámetros de conexión a la base de datos:

## properties
spring.datasource.url=jdbc:mysql://localhost:3306/BD_EXAMEN
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

## Ejecutar el proyecto

Para correr el backend localmente:

./mvnw spring-boot:run

## Documentación de la API
La documentación Swagger está disponible en:

http://localhost:8080/swagger-ui/index.html


## Seguridad
La API está protegida con Spring Security usando autenticación básica.

Debes enviar las credenciales en las peticiones para acceder a los endpoints protegidos.

## Endpoints principales
GET /usuarios - Listar usuarios

GET /usuarios/{id} - Obtener usuario por ID

POST /usuarios - Crear usuario

PUT /usuarios/{id} - Actualizar usuario

DELETE /usuarios/{id} - Eliminar usuario