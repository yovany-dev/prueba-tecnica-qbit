// Funcion para agrupar y ordenar totales

function groupAndOrder(trans) {
  // Reduce a un objeto { userId: amount }
  const totals = trans.reduce((acc, curr) => {
    acc[curr.userId] = (acc[curr.userId] || 0) + curr.amount;
    return acc;
  }, {});

  // Convierte objeto a array [{ userId, amount }]
  const res = Object.entries(totals).map(([userId, amount]) => ({
    userId,
    amount,
  }));

  // Ordena descendente por monto/cantidad
  res.sort((a, b) => b.amount - a.amount);

  return res;
}

// Ejemplo:
const transactions = [
  { userId: 'u1', amount: 100 },
  { userId: 'u2', amount: 50 },
  { userId: 'u1', amount: -20 },
  { userId: 'u3', amount: 200 },
  { userId: 'u2', amount: 0 },
  { userId: 'u3', amount: -50 },
];

console.log(groupAndOrder(transactions));
// Resultado:
// [
//   { userId: 'u3', amount: 150 },
//   { userId: 'u1', amount: 80 },
//   { userId: 'u2', amount: 50 }
// ]
