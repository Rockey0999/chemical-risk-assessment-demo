function calculateRisk() {
    // Get input values
    let concentration = parseFloat(document.getElementById('substance-concentration').value);
    let exposure = parseFloat(document.getElementById('exposure').value);
    let bodyMass = parseFloat(document.getElementById('body-mass').value);
    let bmr = parseFloat(document.getElementById('bmr').value);
    let timeExposed = parseFloat(document.getElementById('time-exposed').value);

    // Example QSAR prediction formula (simplified)
    let qsarPrediction = (concentration * exposure) / (bodyMass * bmr);

    // Example live data calculation (simplified)
    let liveDataCalculation = (concentration * exposure * timeExposed) / (bodyMass * bmr * 2);

    // Calculate the difference
    let difference = liveDataCalculation - qsarPrediction;

    // Display the results
    document.getElementById('qsar-prediction').textContent = qsarPrediction.toFixed(4);
    document.getElementById('live-data-calculation').textContent = liveDataCalculation.toFixed(4);
    document.getElementById('difference').textContent = difference.toFixed(4);
}
