fetch('https://potterapi-fedeperin.vercel.app/en/spells')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("spells");

    if (!data  data.length === 0) {
      data = [{
        name: "Expelliarmus",
        type: "Charm",
        effect: "Disarms your opponent"
      }];
    }

    data.forEach(spell => {
      const col = document.createElement("div");
      col.className = "col-sm-6 col-md-4";
      col.innerHTML = `
        <div class="card">
          <h3>${spell.name}</h3>
          <p><strong>Type:</strong> ${spell.type  "Unknown"}</p>
          <p><strong>Effect:</strong> ${spell.effect || "No effect described."}</p>
        </div>`;
      container.appendChild(col);
    });
  })
  .catch(error => {
    document.getElementById("spells").innerHTML = "<p>Error loading spells data. Showing fallback example.</p>";
    const container = document.getElementById("spells");
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4";
    col.innerHTML = `
      <div class="card">
        <h3>Expelliarmus</h3>
        <p><strong>Type:</strong> Charm</p>
        <p><strong>Effect:</strong> Disarms your opponent</p>
      </div>`;
    container.appendChild(col);
    console.error("Failed to fetch spells data:", error);
  });