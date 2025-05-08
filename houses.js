fetch('https://potterapi-fedeperin.vercel.app/en/houses')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("houses");
    data.forEach(house => {
      const col = document.createElement("div");
      col.className = "col-sm-6 col-md-4";
      col.innerHTML = `
        <div class="panel panel-primary">
          <div class="panel-heading"><h3 class="panel-title">${house.name}</h3></div>
          <div class="panel-body">
            <p><strong>Founder:</strong> ${house.founder}</p>
            <p><strong>House Colors:</strong> ${house.colors.join(', ')}</p>
            <p><strong>Animal:</strong> ${house.animal}</p>
            <p><strong>Common Room:</strong> ${house.commonRoom}</p>
          </div>
        </div>`;
      container.appendChild(col);
    });
  })
  .catch(error => {
    document.getElementById("houses").innerHTML = "<p>Error loading houses data.</p>";
    console.error(error);
  });