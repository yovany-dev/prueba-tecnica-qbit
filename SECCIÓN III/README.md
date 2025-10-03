# SECCIÓN III – SQL (PostgreSQL o MySQL)

## Problema

Escribe las consultas:

- Listar por curso el total de inscripciones activas (nombre_curso, total_activas).
- Top 3 cursos con más inscripciones en los últimos 30 días.
- Usuarios que no tienen ninguna inscripción (id, nombre, email).

### Esquema

```
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    email VARCHAR(120) UNIQUE,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    nivel VARCHAR(20) NOT NULL
);
CREATE TABLE inscripciones (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    curso_id INT REFERENCES cursos(id),
    estado VARCHAR(20) NOT NULL, -- Activa/Inactiva
    fecha DATE NOT NULL
);
```

### Nota

Las ejecución de las consultas se ejecuto con exito en pgAdmin 4. archivo `section-3.sql`
