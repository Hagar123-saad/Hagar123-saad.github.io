// API base URL
const API_BASE_URL = 'https://potterapi-fedeperin.vercel.app/en';

// Fetch spells from API with proper error handling
async function fetchSpells() {
    try {
        const response = await fetch(`${API_BASE_URL}/spells`);
        if (!response.ok) {
            throw new Error('Failed to fetch spells');
        }
        const spells = await response.json();
        
        // Transform the API data to match our expected structure
        return spells.map(spell => ({
            spell: spell.spell || spell.name || 'Unknown Spell',
            type: spell.type || 'Unknown Type',
            effect: spell.effect || spell.description || 'Effect not specified'
        }));
        
    } catch (error) {
        console.error('Error fetching spells:', error);
        // Return some default spells if API fails
        return [
            {
                spell: "Expelliarmus",
                type: "Charm",
                effect: "Disarms your opponent"
            },
            {
                spell: "Lumos",
                type: "Charm",
                effect: "Creates light at wand tip"
            }
        ];
    }
}