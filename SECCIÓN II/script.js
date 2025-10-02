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
  const cards = await getCards();

  render(cards);
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
