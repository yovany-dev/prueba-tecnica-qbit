function normalizeName(name) {
  if (!name) return '';

  // función que capitaliza respetando acentos
  const capitalize = (s) =>
    s.charAt(0).toLocaleUpperCase('es-ES') +
    s.slice(1).toLocaleLowerCase('es-ES');

  return name.trim().split(/\s+/).map(capitalize).join(' ');
}

// Ejemplos:
console.log(normalizeName(' juan carLos pérez lopez ')); // "Juan Carlos Pérez Lopez"

console.log(normalizeName('   MARÍA   FERNANDA   ')); // "María Fernanda"
