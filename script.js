document.addEventListener('DOMContentLoaded', () => {
    const chemicals = {
        Caffeine: { LD50: 192, qsarRisk: 0.05 },
        Aspartame: { LD50: 5000, qsarRisk: 0.01 },
        SodiumBenzoate: { LD50: 4070, qsarRisk: 0.015 },
        Paracetamol: { LD50: 338, qsarRisk: 0.07 },
        Nicotine: { LD50: 50, qsarRisk: 0.4 },
        SodiumNitrite: { LD50: 180, qsarRisk: 0.08 },
        MSG: { LD50: 15000, qsarRisk: 0.005 },
        Saccharin: { LD50: 14000, qsarRisk: 0.002 },
        AcesulfameK: { LD50: 6000, qsarRisk: 0.007 },
        Cyclamate: { LD50: 12000, qsarRisk: 0.004 },
        Ibuprofen: { LD50: 636, qsarRisk: 0.06 },
        Acetaminophen: { LD50: 338, qsarRisk: 0.07 },
        Ethanol: { LD50: 7060, qsarRisk: 0.02 },
        Benzene: { LD50: 930, qsarRisk: 0.09 },
        Formaldehyde: { LD50: 100, qsarRisk: 0.3 },
        PropyleneGlycol: { LD50: 22000, qsarRisk: 0.002 },
        Methanol: { LD50: 5628, qsarRisk: 0.04 },
        Toluene: { LD50: 636, qsarRisk: 0.065 },
        Chlorpyrifos: { LD50: 82, qsarRisk: 0.35 },
        Atrazine: { LD50: 672, qsarRisk: 0.065 },
        Glyphosate: { LD50: 5600, qsarRisk: 0.02 },
        DDT: { LD50: 113, qsarRisk: 0.28 },
        LeadAcetate: { LD50: 466, qsarRisk: 0.075 },
        SodiumFluoride: { LD50: 52, qsarRisk: 0.38 },
        Thalidomide: { LD50: 300, qsarRisk: 0.09 }
    };

    const chemicalSelect = document.getElementById('chemical');
    const chemicalTable = document.getElementById('chemicalTable');

    // Populate chemical select options and table
    Object.keys(chemicals).forEach(chemical => {
        // Populate select options
        const option = document.createElement('option');
        option.value = chemical;
        option.textContent = chemical;
        chemicalSelect.appendChild(option);

        // Populate table
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${chemical}</td>
            <td>${chemicals[chemical].LD50}</td>
            <td>${chemicals[chemical].qsarRisk}</td>
        `;
        chemicalTable.appendChild(row);
    });

    window.calculateRisk = function() {
        const selectedChemical = document.getElementById('chemical').value;
        const c = parseFloat(document.getElementById('concentration').value);
        const e = parseFloat(document.getElementById('exposure').value);
        const bodyMass = parseFloat(document.getElementById('bodyMass').value);
        const BMR = 2000; // Given constant

        if (!selectedChemical || !chemicals[selectedChemical]) return;

        const { LD50, qsarRisk } = chemicals[selectedChemical];
        
        // Calculate Custom Risk Level
        const customRisk = (c * e * BMR) / (bodyMass * LD50);

        // Display results
        document.getElementById('qsarRisk').textContent = `QSAR Model Risk Level: ${qsarRisk}`;
        document.getElementById('customRisk').textContent = `Custom Formula Risk Level: ${customRisk}`;

        // Calculate and display comparison
        const comparison = Math.abs(qsarRisk - customRisk).toFixed(6);
        document.getElementById('comparison').textContent = `Comparison (Absolute Difference): ${comparison}`;
    };
});
