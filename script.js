document.addEventListener('DOMContentLoaded', function () {
    const chemicalSelect = document.getElementById('chemical');
    const parametersSection = document.getElementById('parameters-section');
    const structureProperties = document.getElementById('structure-properties');
    const riskChartCtx = document.getElementById('riskChart').getContext('2d');
    
    // Sample data for demo purposes
    const chemicals = {
        'Chemical A': {
            properties: {
                LD50: 50,
                QSAR: 0.02,
                Experimental: 0.03,
                Assumptions: 'Sample assumptions for Chemical A.',
                Accuracy: 90,
                RiskLevelWithoutVF: 0.1,
                RiskLevelWithVF: 0.12,
                AccuracyChange: 2,
                UpdatedRiskLevel: 0.15,
                GeneticFactor: 1.1,
                AdjustmentFactor: 0.05,
                ToxicityRisk: 0.08,
                DifferenceQSAR_ToxicityRisk: 0.02,
                AccuracyClassification: 'High',
                FinalRiskClassification: 'Moderate'
            }
        },
        'Chemical B': {
            properties: {
                LD50: 75,
                QSAR: 0.03,
                Experimental: 0.04,
                Assumptions: 'Sample assumptions for Chemical B.',
                Accuracy: 85,
                RiskLevelWithoutVF: 0.12,
                RiskLevelWithVF: 0.15,
                AccuracyChange: 3,
                UpdatedRiskLevel: 0.18,
                GeneticFactor: 1.2,
                AdjustmentFactor: 0.1,
                ToxicityRisk: 0.1,
                DifferenceQSAR_ToxicityRisk: 0.03,
                AccuracyClassification: 'Moderate',
                FinalRiskClassification: 'High'
            }
        }
    };

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

        // Update chart
        new Chart(riskChartCtx, {
            type: 'bar',
            data: {
                labels: ['Calculated Risk Level', 'Updated Risk Level'],
                datasets: [{
                    label: 'Risk Levels',
                    data: [riskLevel, properties.UpdatedRiskLevel],
                    backgroundColor: ['#007bff', '#28a745'],
                    borderColor: ['#0056b3', '#218838'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw.toExponential(2)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Display results
        document.getElementById('results').innerHTML = `
            <h3>Calculated Risk Level</h3>
            <p>Risk Level: ${riskLevel.toFixed(4)}</p>
            <p>Classification: ${riskClassification}</p>
        `;
    }
});
