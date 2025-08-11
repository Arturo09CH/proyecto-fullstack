# Proyecto Fullstack - Gestión de Usuarios

## Descripción

Este proyecto es una aplicación web fullstack para la gestión de usuarios. Permite crear, editar, eliminar y listar usuarios con diferentes roles. Está desarrollado con tecnologías modernas que aseguran una buena arquitectura, seguridad y experiencia de usuario.

---

## Objetivo

El objetivo principal del proyecto es construir una solución completa para administrar usuarios, integrando un frontend dinámico en Angular, un backend robusto en Spring Boot y una base de datos MySQL para el almacenamiento persistente de información.

---

## Tecnologías utilizadas

- **Frontend:**  
  - Angular 20.1.5  
  - TypeScript  
  - HTML5 & CSS3  
  - Reactive Forms  

- **Backend:**  
  - Java 17  
  - Spring Boot  
  - Spring Data JPA / Hibernate  
  - Spring Security (opcional, según versión)  
  - Maven  

- **Base de datos:**  
  - MySQL  

- **Control de versiones:**  
  - Git  

---

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (versión recomendada 16+ para Angular)
- [Angular CLI](https://angular.io/cli) (instalado globalmente)
- [Java JDK 17](https://adoptium.net/)
- [Maven](https://maven.apache.org/)
- [MySQL](https://www.mysql.com/)

---

## Instrucciones para ejecutar el proyecto

### 1. Configurar la base de datos

- Crear la base de datos ejecutando el script SQL ubicado en la carpeta `base-datos/BD_EXAMEN.sql`.  
  Puedes usar un cliente MySQL o línea de comandos:  

  ```bash
  mysql -u usuario -p < base-datos/BD_EXAMEN.sql

## 2. Ejecutar el backend
Desde la raíz del backend (usuarios-backend/), ejecuta:

./mvnw spring-boot:run

El backend correrá usualmente en `http://localhost:8080` y expondrá la API REST para usuarios.

## 3. Ejecutar el frontend
Desde la carpeta del frontend (usuarios-frontend/), ejecuta:
ng serve

## Estructura del proyecto
proyecto-fullstack/
├── usuarios-frontend/      # Código del frontend Angular
├── usuarios-backend/       # Código del backend Spring Boot
└── base-datos/             # Scripts para creación de base de datos y tablas


## Características
CRUD completo para usuarios (Crear, Leer, Actualizar, Eliminar).
Validaciones de formulario robustas en frontend (email, password, campos obligatorios).
Listado responsivo de usuarios con botones para edición y eliminación.
Manejo básico de roles de usuario (Administrador, Usuario).
Código modular y documentado.

## Buenas prácticas y recomendaciones
Usa un entorno virtual para Node.js si es posible para aislar dependencias.
Versiona el código frecuentemente con commits claros y descriptivos.
Realiza pruebas unitarias y de integración (no incluidas en este proyecto, pero recomendadas).
Considera agregar autenticación y autorización en el backend para producción.

