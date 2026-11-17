let grid = document.querySelector("#chairs-grid");

fetch("js/data.json")
  .then(response => response.json())
  .then(chairs => {
    chairs.forEach(chair => {
      grid.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card h-100 border border-dark">
            <img src="${chair.image}" class="card-img-top object-fit-contain" alt="${chair.name}">
            <div class="card-body">
              <h3 class="card-title fw-bold mb-3">${chair.name}</h3>
              <p class="card-text border-top border-dark pt-2 mb-2"><strong>Designer</strong> — ${chair.designer}</p>
              <p class="card-text border-top border-dark pt-2 mb-2"><strong>Year</strong> — ${chair.year}</p>
              <p class="card-text border-top border-dark pt-2 mb-2"><strong>Material</strong> — ${chair.material}</p>
              <p class="card-text border-top border-dark pt-2">${chair.description}</p>
            </div>
          </div>
        </div>
      `;
    });
  });