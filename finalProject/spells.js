fetch("spells.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("spellsContainer");
    data.forEach(spell => {
      container.innerHTML += `
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${spell.name}</h5>
              <p class="card-text">${spell.description}</p>
            </div>
          </div>
        </div>`;
    });
  })
  .catch(() => {
    document.getElementById("spellsContainer").innerHTML = "<p class='text-danger'>Failed to load spells.</p>";
  });