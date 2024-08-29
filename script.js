// Example data for chemicals
const chemicals = {
    Caffeine: {
        structure: 'URL_TO_CAFFEINE_STRUCTURE_IMAGE',
        properties: {
            LD50: 192,
            QSAR: 0.05,
            Experimental: 0.04,
            // Add other properties as needed
        }
    },
    Aspartame: {
        structure: 'URL_TO_ASPARTAME_STRUCTURE_IMAGE',
        properties: {
            LD50: 5000,
            QSAR: 0.01,
            Experimental: 0.005,
            // Add other properties as needed
        }
    }
    // Add other chemicals similarly
};

document.addEventListener('DOMContentLoaded', function () {
    const chemicalSelect = document.getElementById('chemical');
    const parametersSection = document.getElementById('parameters-section');
    const structureProperties = document.getElementById('structure-properties');
    
    // Populate chemical dropdown
    Object.keys(chemicals).forEach(chemical => {
        const option = document.createElement('option');
        option.value = chemical;
        option.textContent = chemical;
        chemicalSelect.appendChild(option);
    });

    // Update parameters section when a chemical is selected
    chemicalSelect.addEventListener('change', function () {
        const selectedChemical = chemicals[this.value];
        const properties = selectedChemical.properties;
        
        // Display chemical structure
        structureProperties.innerHTML = `
            <h3>Structure of ${this.value}</h3>
            <img src="${selectedChemical.structure}" alt="${this.value} Structure">
        `;

        // Display properties
        structureProperties.innerHTML += `
            <h3>Properties of ${this.value}</h3>
            <p>LD50: ${properties.LD50}</p>
            <p>QSAR Model Risk Level: ${properties.QSAR}</p>
            <p>Experimental Risk Level: ${properties.Experimental}</p>
            <!-- Add more properties as needed -->
        `;
        
        // Add parameter inputs
        parametersSection.innerHTML = `
            <label for="concentration">Concentration (c):</label>
            <input type="number" id="concentration" name="concentration" step="any">

            <label for="exposure">Exposure (e):</label>
            <input type="number" id="exposure" name="exposure" step="any">

            <label for="bmr">BMR (kcal/day):</label>
            <input type="number" id="bmr" name="bmr" step="any" value="2000">

            <!-- Add more parameters as needed -->
        `;
    });
});

function calculateRisk() {
    const chemicalSelect = document.getElementById('chemical');
    const selectedChemical = chemicals[chemicalSelect.value];
    const concentration = parseFloat(document.getElementById('concentration').value);
    const exposure = parseFloat(document.getElementById('exposure').value);
    const bmr = parseFloat(document.getElementById('bmr').value);

    if (!selectedChemical || isNaN(concentration) || isNaN(exposure) || isNaN(bmr)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Example risk calculation
    const riskLevel = (concentration * exposure) / (bmr * selectedChemical.properties.LD50);

    document.getElementById('results').innerHTML = `
        <p><strong>Calculated Risk Level:</strong> ${riskLevel.toFixed(6)}</p>
    `;
}

