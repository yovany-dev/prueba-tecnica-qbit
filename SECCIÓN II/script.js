// Obtener lista de cursos simulando petición a una API.
async function getCards() {
  const url = 'http://127.0.0.1:5500/SECCI%C3%93N%20II/cursos.json';
  const data = await fetch(url);
  const res = await data.json();
  return res.cursos;
}

// Renderiza tarjetas en el cliente.
function render(data) {
  const containerCard = document.getElementById('container-card');
  const totalCard = document.getElementById('total-card');

  data.forEach((card) => {
    containerCard.innerHTML += `
      <div class="card">
        <h3>${card.nombre}</h3>
        <h4><span>Nivel:</span> ${card.nivel}</h4>
        <h4><span>Estado:</span> ${card.estado}</h4>
      </div>
    `;
  });
  totalCard.innerText = `Total de resultados: ${data.length}`;
}

// Lógica principal
async function main() {
  const containerCard = document.getElementById('container-card');
  const inputElement = document.getElementById('input');
  const btnSort = document.getElementById('btn-sort');
  const selectFilter = document.getElementById('select-filter');
  const cards = await getCards();

  render(cards);

  // Busqueda por nombre de cursos
  inputElement.addEventListener('input', (event) => {
    const filter = cards.filter((e) => {
      return e.nombre
        .toLowerCase()
        .includes(event.target.value.toLowerCase().trim());
    });

    containerCard.innerHTML = '';
    render(filter);
  });

  // Ordenamiento de A-z Z-a
  btnSort.addEventListener('click', () => {
    let isAscending = false;
    const sortedData = [...cards];

    if (isAscending) {
      sortedData.sort(function (a, b) {
        return a.nombre.localeCompare(b.nombre);
      });
    } else {
      sortedData.sort(function (a, b) {
        return b.nombre.localeCompare(a.nombre);
      });
    }
    containerCard.innerHTML = '';
    render(sortedData);
    isAscending = !isAscending;
  });

  // Filtrado por [Todo, Novato, Aprendiz, Conocedor]
  selectFilter.addEventListener('change', (event) => {
    const selected = event.target.value;
    let filtered;

    if (selected == 'Todo') {
      filtered = cards;
    } else {
      filtered = cards.filter((item) => item.nivel == selected);
    }
    containerCard.innerHTML = '';
    render(filtered);
  });
}

main();
