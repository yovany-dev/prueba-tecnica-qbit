# SECCIÓN V – PREGUNTAS BREVES

- ¿Diferencias entre var, let y const en JavaScript? ¿Cuándo usarías cada uno?

> A partir de ES6 se recomienda utilizar CONST y LET ya que VAR puede generar errores inesperados por el scope de alcance global. CONST se utiliza para definir valores que no cambien como Token, valor de PI, una clave, etc. LET suele utilizarse para valorarse que pueden ser reasignados.

- Explica qué es una Promesa y da un ejemplo de uso.

> Una promesa en JavaScript es un objeto que representa un valor que puede estar disponible en el futuro. Permite gestionar operaciones asíncronas. Por ejemplo esperar el resultado de una solicitud HTTP para poder manipular los datos o esperar la acción de una operación para continuar con el proceso.

- Diferencia entre INNER JOIN y LEFT JOIN con un ejemplo sencillo.

> INNER JOIN muestra todas las filas que coincidan en ambas tablas mientras que LEFT JOIN muestra todas las filas de la tabla izquierda y solo los que coinciden de la tabla derecha. Por ejemplo hacer una consulta para saber que clientes no han comprado nada este mes.

- ¿Qué es la inyección de dependencias y por qué es útil?

> Es un patrón de diseño donde las clases no crean directamente sus dependencias sino que se inyectan, esto puede ser mediante constructores. Esto es útil para desacoplar componentes lo que facilita la reutilización del código y hace más sencillo el mantenimiento.

- Menciona dos buenas prácticas para manejar credenciales en desarrollo.

> 1. No guardar las credenciales en texto plano en la base de datos, utilizar algún tipo de cifrado como AES.
> 2. Utilizar variables de entorno para almacenar Tokens, Secretos, Claves, etc.
