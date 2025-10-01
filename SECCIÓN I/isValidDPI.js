// Función para validar DPI (Guatemala)

function isValidDPI(dpi) {
  if (!dpi) return false;

  // Eliminar espacios y guiones
  const cleanDPI = dpi.replace(/[\s-]/g, '');

  // Expresión Regular para validar 13 dígitos
  const regex = /^\d{13}$/;
  return regex.test(cleanDPI);
}

// Ejemplos:
console.log(isValidDPI('1234567890123')); // true (13 dígitos exactos)
console.log(isValidDPI('1234-5678-90123')); // true (guiones permitidos)
console.log(isValidDPI('1234 5678 90123')); // true (espacios permitidos)
console.log(isValidDPI('1234-5678 90123')); // true (mezcla de separadores)
console.log(isValidDPI('123456789012')); // false (12 dígitos)
console.log(isValidDPI('12345678901234')); // false (14 dígitos)
console.log(isValidDPI('1234A67890123')); // false (contiene letras)
