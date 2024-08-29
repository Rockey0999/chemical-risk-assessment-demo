// Example data for chemicals
const chemicals = {
    Caffeine: {
        properties: {
            LD50: 192,
            QSAR: 0.05,
            Experimental: 0.04,
            VF: 1.5,
            Assumptions: 'c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg',
            Accuracy: 80,
            RiskLevelWithoutVF: 2.63E-06,
            RiskLevelWithVF: 3.95E-06,
            AccuracyChange: 50.00,
            UpdatedRiskLevel: 0.00025,
            GeneticFactor: 2,
            AdjustmentFactor: 0.0103,
            ToxicityRisk: 1333.33,
            DifferenceQSAR_ToxicityRisk: 0.0143,
            AccuracyClassification: 'Moderate',
            FinalRiskClassification: 'Moderate',
        },
        diseases: ['Insomnia', 'Nervousness'],
        solutions: ['Reduce caffeine intake', 'Avoid consumption before bedtime']
    },
    Aspartame: {
        properties: {
            LD50: 5000,
            QSAR: 0.01,
            Experimental: 0.005,
            VF: 1.2,
            Assumptions: 'c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg',
            Accuracy: 50,
            RiskLevelWithoutVF: 5.00E-07,
            RiskLevelWithVF: 6.00E-07,
            AccuracyChange: 20.00,
            UpdatedRiskLevel: 0.00008,
            GeneticFactor: 2,
            AdjustmentFactor: 0.0031,
            ToxicityRisk: 2083.33,
            DifferenceQSAR_ToxicityRisk: 0.0179,
            AccuracyClassification: 'Low',
            FinalRiskClassification: 'Low',
        },
        diseases: ['Headaches', 'Allergic reactions'],
        solutions: ['Limit consumption', 'Consult a healthcare provider']
    },
    SodiumBenzoate: {
        properties: {
            LD50: 4070,
            QSAR: 0.015,
            Experimental: 0.012,
            VF: 1.1,
            Assumptions: 'c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg',
            Accuracy: 80,
            RiskLevelWithoutVF: 5.00E-07,
            RiskLevelWithVF: 5.55E-07,
            AccuracyChange: 11.00,
            UpdatedRiskLevel: 0.00009,
            GeneticFactor: 2,
            AdjustmentFactor: 0.0005,
            ToxicityRisk: 1010.1,
            DifferenceQSAR_ToxicityRisk: 0.00795,
            AccuracyClassification: 'Moderate',
            FinalRiskClassification: 'Moderate',
        },
        diseases: ['Skin irritation', 'Respiratory issues'],
        solutions: ['Avoid prolonged exposure', 'Use in regulated amounts']
    },
    Paracetamol: {
        properties: {
            LD50: 338,
            QSAR: 0.07,
            Experimental: 0.06,
            VF: 1.3,
            Assumptions: 'c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg',
            Accuracy: 85.7,
            RiskLevelWithoutVF: 1.48E-06,
            RiskLevelWithVF: 2.97E-06,
            AccuracyChange: 30.00,
            UpdatedRiskLevel: 0.00012,
            GeneticFactor: 2,
            AdjustmentFactor: 0.05,
            ToxicityRisk: 1923.08,
            DifferenceQSAR_ToxicityRisk: 0.0179,
            AccuracyClassification: 'Moderate',
            FinalRiskClassification: 'Moderate',
        },
        diseases: ['Liver damage', 'Gastrointestinal issues'],
        solutions: ['Follow dosage guidelines', 'Consult a physician if symptoms occur']
    },
    Nicotine: {
        properties: {
            LD50: 50,
            QSAR: 0.4,
            Experimental: 0.35,
            VF: 2,
            Assumptions: 'c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg',
            Accuracy: 87.5,
            RiskLevelWithoutVF: 1.00E-05,
            RiskLevelWithVF: 1.00E-05,
            AccuracyChange: 100.00,
            UpdatedRiskLevel: 0.00129,
            GeneticFactor: 2,
            AdjustmentFactor: 0.5161,
            ToxicityRisk: 387.6,
            DifferenceQSAR_ToxicityRisk: 0.00108,
            AccuracyClassification: 'High',
            FinalRiskClassification: 'High',
        },
        diseases: ['Addiction', 'Cardiovascular issues'],
        solutions: ['Seek support for quitting', 'Avoid tobacco products']
    },
    SodiumNitrite: {
        properties: {
            LD50: 180,
            QSAR: 0.08,
            Experimental: 0.07,
            VF: 1.4,
            Assumptions: 'c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg',
            Accuracy: 85.7,
            RiskLevelWithoutVF: 2.78E-06,
            RiskLevelWithVF: 1.67E-05,
            AccuracyChange: 40.00,
            UpdatedRiskLevel: 0.00011,
            GeneticFactor: 2,
            AdjustmentFactor: 0.1032,
            ToxicityRisk: 1062.86,
            DifferenceQSAR_ToxicityRisk: 0.012,
            AccuracyClassification: 'High',
            FinalRiskClassification: 'High',
        },
        diseases: ['Methemoglobinemia', 'Respiratory issues'],
        solutions: ['Avoid high concentrations', 'Use in controlled environments']
    },
    MonosodiumGlutamate: {
        properties: {
            LD50: 15000,
            QSAR: 0.005,
            Experimental: 0.004,
            VF: 1.1,
            Assumptions: 'c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg',
            Accuracy: 80,
            RiskLevelWithoutVF: 3.33E-08,
            RiskLevelWithVF: 1.00E-06,
            AccuracyChange: 10.00,
            UpdatedRiskLevel: 0.00002,
            GeneticFactor: 2,
            AdjustmentFactor: 0.0006,
            ToxicityRisk: 1851.85,
            DifferenceQSAR_ToxicityRisk: 0.0141,
            AccuracyClassification: 'Low',
            FinalRiskClassification: 'Low',
        },
        diseases: ['Headaches', 'Nausea'],
        solutions: ['Limit intake', 'Check ingredient labels']
    },
    Saccharin: {
        properties: {
            LD50: 14000,
            QSAR: 0.002,
            Experimental: 0.0015,
            VF: 1.2,
            Assumptions: 'c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg',
            Accuracy: 75,
            RiskLevelWithoutVF: 3.33E-08,
            RiskLevelWithVF: 5.00E-07,
            AccuracyChange: 20.00,
            UpdatedRiskLevel: 0.00003,
            GeneticFactor: 2,
            AdjustmentFactor: 0.0008,
            ToxicityRisk: 833.33,
            DifferenceQSAR_ToxicityRisk: 0.0038,
            AccuracyClassification: 'Low',
            FinalRiskClassification: 'Low',
        },
        diseases: ['Allergic reactions'],
        solutions: ['Use as directed', 'Consult if symptoms arise']
    },
    AcesulfameK: {
        properties: {
            LD50: 6000,
            QSAR: 0.007,
            Experimental: 0.0055,
            VF: 1,
            Assumptions: 'c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg',
            Accuracy: 78.6,
            RiskLevelWithoutVF: 7.14E-08,
            RiskLevelWithVF: 5.00E-07,
            AccuracyChange: 0.00,
            UpdatedRiskLevel: 0.00005,
            GeneticFactor: 2,
            AdjustmentFactor: 0.0019,
            ToxicityRisk: 2500,
            DifferenceQSAR_ToxicityRisk: 0.018,
            AccuracyClassification: 'Low',
            FinalRiskClassification: 'Low',
        },
        diseases: ['Headaches'],
        solutions: ['Use in moderation']
    },
    Cyclamate: {
        properties: {
            LD50: 12000,
            QSAR: 0.003,
            Experimental: 0.0025,
            VF: 1.3,
            Assumptions: 'c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg',
            Accuracy: 66.7,
            RiskLevelWithoutVF: 8.33E-09,
            RiskLevelWithVF: 1.00E-07,
            AccuracyChange: 10.00,
            UpdatedRiskLevel: 0.00006,
            GeneticFactor: 2,
            AdjustmentFactor: 0.0007,
            ToxicityRisk: 2857.14,
            DifferenceQSAR_ToxicityRisk: 0.0119,
            AccuracyClassification: 'Low',
            FinalRiskClassification: 'Low',
        },
        diseases: ['Allergic reactions'],
        solutions: ['Consult a healthcare provider if allergic']
    },
    Sucralose: {
        properties: {
            LD50: 20000,
            QSAR: 0.004,
            Experimental: 0.003,
            VF: 1.1,
            Assumptions: 'c = 1 mg/kg, e = 1 kg/day, BMR = 2000 kcal/day, Body mass = 70 kg',
            Accuracy: 72.7,
            RiskLevelWithoutVF: 5.00E-09,
            RiskLevelWithVF: 1.00E-08,
            AccuracyChange: 100.00,
            UpdatedRiskLevel: 0.00007,
            GeneticFactor: 2,
            AdjustmentFactor: 0.0004,
            ToxicityRisk: 2857.14,
            DifferenceQSAR_ToxicityRisk: 0.0067,
            AccuracyClassification: 'Low',
            FinalRiskClassification: 'Low',
        },
        diseases: ['Digestive issues'],
        solutions: ['Use in moderation', 'Monitor digestive health']
    }
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
        
        // Display chemical properties
        structureProperties.innerHTML = `
            <h3>Properties of ${this.value}</h3>
            <p>LD50: ${properties.LD50}</p>
            <p>QSAR Model Risk Level: ${properties.QSAR}</p>
            <p>Experimental Risk Level: ${properties.Experimental}</p>
            <p>Assumptions: ${properties.Assumptions}</p>
            <p>Accuracy: ${properties.Accuracy}%</p>
            <p>Risk Level Without VF: ${properties.RiskLevelWithoutVF}</p>
            <p>Risk Level With VF: ${properties.RiskLevelWithVF}</p>
            <p>Accuracy Change: ${properties.AccuracyChange}%</p>
            <p>Updated Risk Level: ${properties.UpdatedRiskLevel}</p>
            <p>Genetic Factor: ${properties.GeneticFactor}</p>
            <p>Adjustment Factor: ${properties.AdjustmentFactor}</p>
            <p>Toxicity Risk: ${properties.ToxicityRisk}</p>
            <p>Difference QSAR - Toxicity Risk: ${properties.DifferenceQSAR_ToxicityRisk}</p>
            <p>Accuracy Classification: ${properties.AccuracyClassification}</p>
            <p>Final Risk Classification: ${properties.FinalRiskClassification}</p>
        `;
        
        // Add parameter inputs
        parametersSection.innerHTML = `
            <label for="concentration">Concentration (c) [mg/kg]:</label>
            <input type="number" id="concentration" name="concentration" step="any" value="1">

            <label for="exposure">Exposure (e) [kg/day]:</label>
            <input type="number" id="exposure" name="exposure" step="any" value="1">

            <label for="bmr">BMR (kcal/day):</label>
            <input type="number" id="bmr" name="bmr" step="any" value="2000">

            <label for="body-mass">Body Mass (kg):</label>
            <input type="number" id="body-mass" name="body-mass" step="any" value="70">

            <label for="age">Age (years):</label>
            <input type="number" id="age" name="age" step="any" value="30">
        `;
    });
});

function calculateRisk() {
    const chemicalSelect = document.getElementById('chemical');
    const selectedChemical = chemicals[chemicalSelect.value];
    const concentration = parseFloat(document.getElementById('concentration').value);
    const exposure = parseFloat(document.getElementById('exposure').value);
    const bmr = parseFloat(document.getElementById('bmr').value);
    const bodyMass = parseFloat(document.getElementById('body-mass').value);
    const age = parseFloat(document.getElementById('age').value);
    const properties = selectedChemical.properties;

    if (!selectedChemical || isNaN(concentration) || isNaN(exposure) || isNaN(bmr) || isNaN(bodyMass) || isNaN(age)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Risk calculation using updated formulas
    const riskLevel = (concentration * exposure) / (bmr * properties.LD50);

    // Determine risk classification based on provided values
    let riskClassification = 'Low';
    if (riskLevel > 0.01) riskClassification = 'Moderate';
    if (riskLevel > 0.1) riskClassification = 'High';

    // Display results
    document.getElementById('results').innerHTML = `
        <p><strong>Calculated Risk Level:</strong> ${riskLevel.toExponential(2)}</p>
        <p><strong>Risk Classification:</strong> ${riskClassification}</p>
        <p><strong>Potential Diseases:</strong> ${selectedChemical.diseases.join(', ')}</p>
        <p><strong>Solutions to Reduce Risk:</strong> ${selectedChemical.solutions.join(', ')}</p>
        <p><strong>Final Risk Classification:</strong> ${properties.FinalRiskClassification}</p>
    `;
}
