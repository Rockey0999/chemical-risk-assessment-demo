// Sample chemical data
const chemicals = {
    "Caffeine": {
        name: "Caffeine",
        LD50: 192,
        QSAR: 0.05,
        experimental: 0.04,
        vf: 1.5,
        assumptions: "c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg",
        diseases: ["Headache", "Insomnia", "Anxiety"],
        solutions: ["Limit intake to moderate levels", "Stay hydrated", "Avoid before bedtime"]
    },
    // Add more chemicals here
};

document.addEventListener('DOMContentLoaded', () => {
    populateChemicalDropdown();
});

function populateChemicalDropdown() {
    const dropdown = document.getElementById('chemical-dropdown');
    for (const [key, value] of Object.entries(chemicals)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = value.name;
        dropdown.appendChild(option);
    }
    dropdown.addEventListener('change', updateChemicalProperties);
}

function updateChemicalProperties() {
    const selectedChemical = document.getElementById('chemical-dropdown').value;
    const properties = chemicals[selectedChemical];

    if (properties) {
        document.getElementById('chemical-properties').innerHTML = `
            <p><strong>Name:</strong> ${properties.name}</p>
            <p><strong>LD50 Value:</strong> ${properties.LD50} mg/kg</p>
            <p><strong>QSAR Model Risk Prediction:</strong> ${properties.QSAR}</p>
            <p><strong>Experimental Risk Level:</strong> ${properties.experimental}</p>
            <p><strong>Risk Level Classification:</strong> ${properties.QSAR > properties.experimental ? 'High' : 'Low'}</p>
        `;
    }
}

function calculateRisk() {
    const concentration = parseFloat(document.getElementById('concentration').value);
    const exposure = parseFloat(document.getElementById('exposure').value);
    const bodyMass = parseFloat(document.getElementById('body-mass').value);
    const bmr = parseFloat(document.getElementById('bmr').value);

    const selectedChemical = document.getElementById('chemical-dropdown').value;
    const properties = chemicals[selectedChemical];

    if (properties) {
        const vf = properties.vf;
        const LD50 = properties.LD50;

        // Example calculations
        const riskLevel = (concentration * exposure * vf) / (bodyMass * bmr);
        const riskOutput = `
            <p><strong>Calculated Risk Level:</strong> ${riskLevel.toExponential(2)}</p>
        `;

        document.getElementById('risk-output').innerHTML = riskOutput;
        document.getElementById('diseases').innerHTML = `<p><strong>Potential Diseases:</strong> ${properties.diseases.join(', ')}</p>`;
        document.getElementById('solutions').innerHTML = `<p><strong>Solutions to Reduce Risk:</strong> ${properties.solutions.join(', ')}</p>`;
    }
}
