// Chemical data
const chemicals = {
    "Caffeine": {
        name: "Caffeine",
        structure: "path/to/caffeine-structure.png",
        properties: {
            "LD50": 192, // mg/kg
            "QSAR Risk Level": 0.05,
            "Experimental Risk Level": 0.04,
            "Accuracy": 80
        }
    },
    "Aspartame": {
        name: "Aspartame",
        structure: "path/to/aspartame-structure.png",
        properties: {
            "LD50": 5000, // mg/kg
            "QSAR Risk Level": 0.01,
            "Experimental Risk Level": 0.005,
            "Accuracy": 50
        }
    },
    "Sodium Chloride": {
        name: "Sodium Chloride",
        structure: "path/to/sodium-chloride-structure.png",
        properties: {
            "LD50": 3000, // mg/kg
            "QSAR Risk Level": 0.03,
            "Experimental Risk Level": 0.025,
            "Accuracy": 60
        }
    },
    "Acetaminophen": {
        name: "Acetaminophen",
        structure: "path/to/acetaminophen-structure.png",
        properties: {
            "LD50": 338, // mg/kg
            "QSAR Risk Level": 0.08,
            "Experimental Risk Level": 0.07,
            "Accuracy": 85
        }
    }
    // Add more chemicals as needed
};

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById("chemical-dropdown");
    for (const chemical in chemicals) {
        const option = document.createElement("option");
        option.value = chemical;
        option.textContent = chemical;
        dropdown.appendChild(option);
    }

    dropdown.addEventListener("change", updateChemicalDetails);
});

function updateChemicalDetails() {
    const chemical = document.getElementById("chemical-dropdown").value;
    const info = chemicals[chemical];

    document.getElementById("chemical-name").textContent = info.name;
    document.getElementById("chemical-structure").src = info.structure;
    const propertiesList = document.getElementById("chemical-properties");
    propertiesList.innerHTML = "";
    for (const [key, value] of Object.entries(info.properties)) {
        const li = document.createElement("li");
        li.textContent = `${key}: ${value}`;
        propertiesList.appendChild(li);
    }
}

function calculateRisk() {
    const concentration = parseFloat(document.getElementById("concentration").value);
    const exposure = parseFloat(document.getElementById("exposure").value);
    const chemical = document.getElementById("chemical-dropdown").value;
    const info = chemicals[chemical];

    const LD50 = info.properties["LD50"];
    const qsarRisk = info.properties["QSAR Risk Level"];
    const experimentalRisk = info.properties["Experimental Risk Level"];

    // Risk calculation
    const riskLevel = (concentration * exposure) / LD50;
    const accuracy = (1 - Math.abs(qsarRisk - experimentalRisk) / qsarRisk) * 100;

    document.getElementById("calculated-risk").textContent = riskLevel.toFixed(5);
    document.getElementById("qsar-risk").textContent = qsarRisk.toFixed(5);
    document.getElementById("risk-classification").textContent = classifyRisk(riskLevel);
    updateChart(riskLevel, qsarRisk);
}

function classifyRisk(risk) {
    if (risk > 0.1) return "High";
    if (risk > 0.01) return "Moderate";
    return "Low";
}

function updateChart(calculatedRisk, qsarRisk) {
    const chart = document.getElementById("risk-chart");
    chart.innerHTML = "";

    const data = {
        labels: ['Calculated Risk', 'QSAR Risk'],
        datasets: [{
            label: 'Risk Levels',
            data: [calculatedRisk, qsarRisk],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1
        }]
    };

    const ctx = document.createElement('canvas');
    chart.appendChild(ctx);

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
