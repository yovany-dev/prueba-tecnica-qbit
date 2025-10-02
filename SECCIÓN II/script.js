async function getCards() {
  const url = 'http://127.0.0.1:5500/SECCI%C3%93N%20II/cursos.json';

  const data = await fetch(url);
  const res = await data.json();
  return res.cursos;
}

function render(data) {
  const containerCard = document.getElementById('container-card');
  const totalCard = document.getElementById('total-card');

  data.forEach((card) => {
    containerCard.innerHTML += `
      <div class="card">
        <h3>${card.nombre}</h3>
        <h4>${card.nivel}</h4>
        <h4>${card.estado}</h4>
      </div>
    `;
  });
  totalCard.innerText = `Total de resultados: ${data.length}`;
}

async function main() {
  const containerCard = document.getElementById('container-card');
  const inputElement = document.getElementById('input');
  const btnSort = document.getElementById('btn-sort');
  const cards = await getCards();

  let isAscending = false;

  render(cards);

  btnSort.addEventListener('click', () => {
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

  inputElement.addEventListener('input', (event) => {
    const filter = cards.filter((e) => {
      return e.nombre
        .toLowerCase()
        .includes(event.target.value.toLowerCase().trim());
    });

    containerCard.innerHTML = '';
    render(filter);
  });
}

main();
