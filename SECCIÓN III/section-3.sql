-- 1. Listar por curso el total de inscripciones activas (nombre_curso, total_activas).
SELECT c.nombre AS nombre_curso, 
       COUNT(i.id) AS total_activas
FROM cursos c
LEFT JOIN inscripciones i 
       ON c.id = i.curso_id 
       AND i.estado = 'Activa'
GROUP BY c.nombre
ORDER BY total_activas DESC;

-- 2. Top 3 cursos con más inscripciones en los últimos 30 días.
SELECT c.nombre AS nombre_curso, 
       COUNT(i.id) AS total_inscripciones
FROM cursos c
JOIN inscripciones i 
     ON c.id = i.curso_id
WHERE i.fecha >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY c.nombre
ORDER BY total_inscripciones DESC
LIMIT 3;

-- 3. Usuarios que no tienen ninguna inscripción (id, nombre, email).
SELECT u.id, u.nombre, u.email
FROM usuarios u
LEFT JOIN inscripciones i 
       ON u.id = i.usuario_id
WHERE i.id IS NULL;
