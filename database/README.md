# Base de Datos - BD_EXAMEN

Este directorio contiene el script SQL para la creación y configuración de la base de datos utilizada en el proyecto Full Stack.

---

## Contenido

- `BD_EXAMEN.sql` : Script para crear la base de datos, tablas y datos iniciales.

---

## Descripción del Script

El script `BD_EXAMEN.sql` realiza las siguientes acciones:

1. **Crear la base de datos** llamada `BD_EXAMEN`.
2. **Crear la tabla `usuarios`** con los siguientes campos:
   - `id` (INT, Auto Increment, Clave primaria)
   - `nombre` (VARCHAR(100), no nulo)
   - `email` (VARCHAR(100), único y no nulo)
   - `login` (VARCHAR(50), único y no nulo)
   - `password` (VARCHAR(255), no nulo, para almacenar la contraseña encriptada)
   - `rol` (ENUM('ADMIN', 'USER'), no nulo)
3. **Insertar datos de ejemplo** en la tabla `usuarios`.

---

## Uso

Para crear la base de datos y cargar los datos, ejecuta el script en tu gestor MySQL o consola:

```bash
mysql -u <usuario> -p < BD_EXAMEN.sql
