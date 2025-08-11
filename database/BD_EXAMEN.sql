CREATE DATABASE BD_EXAMEN;

USE BD_EXAMEN;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,         -- Identificador único
    nombre VARCHAR(100) NOT NULL,              -- Nombre completo
    email VARCHAR(100) NOT NULL UNIQUE,        -- Correo único
    login VARCHAR(50) NOT NULL UNIQUE,         -- Usuario único
    password VARCHAR(255) NOT NULL,            -- Contraseña (se guardará encriptada)
    rol ENUM('ADMIN', 'USER') NOT NULL         -- Rol del usuario
);


select * from usuarios;