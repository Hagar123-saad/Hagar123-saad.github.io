// Load and display spells
async function loadSpells() {
    const spells = await fetchSpells();
    const container = document.getElementById('spellsContainer');
    
    if (!spells || !spells.length) {
        container.innerHTML = `
            <div class="col-md-12">
                <div class="alert alert-warning">
                    Couldn't load spells from API. Showing sample spells instead.
                </div>
            </div>
            ${getSampleSpellsHtml()}
        `;
        return;
    }
    
    container.innerHTML = spells.map(spell => `
        <div class="col-md-4 col-sm-6">
            <div class="panel panel-default spell-card">
                <div class="panel-heading">
                    <h3 class="panel-title">${spell.spell}</h3>
                </div>
                <div class="panel-body">
                    <p><strong>Type:</strong> ${spell.type}</p>
                    <p><strong>Effect:</strong> ${spell.effect}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Fallback function if API fails
function getSampleSpellsHtml() {
    const sampleSpells = [
        {
            spell: "Expelliarmus",
            type: "Charm",
            effect: "Disarms your opponent"
        },
        {
            spell: "Lumos",
            type: "Charm",
            effect: "Creates light at wand tip"
        },
        {
            spell: "Wingardium Leviosa",
            type: "Charm",
            effect: "Makes objects fly"
        }
    ];
    
    return sampleSpells.map(spell => `
        <div class="col-md-4 col-sm-6">
            <div class="panel panel-default spell-card">
                <div class="panel-heading">
                    <h3 class="panel-title">${spell.spell}</h3>
                </div>
                <div class="panel-body">
                    <p><strong>Type:</strong> ${spell.type}</p>
                    <p><strong>Effect:</strong> ${spell.effect}</p>
                </div>
            </div>
        </div>
    `).join('');
}