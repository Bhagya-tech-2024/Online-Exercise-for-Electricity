function calculate() {
  // Get values from inputs
  const voltage = parseFloat(document.getElementById('voltage').value);
  const frequency = parseFloat(document.getElementById('frequency').value);
  const resistor = parseFloat(document.getElementById('resistor').value);
  const inductance = parseFloat(document.getElementById('inductance').value) / 1000; // Convert mH to H
  const capacitance = parseFloat(document.getElementById('capacitance').value) / 1e6; // Convert μF to F

  if (isNaN(voltage) || isNaN(frequency) || isNaN(resistor) || isNaN(inductance) || isNaN(capacitance)) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  // Calculations
  const capacitiveReactance = 1 / (2 * Math.PI * frequency * capacitance);
  const inductiveReactance = 2 * Math.PI * frequency * inductance;
  const resistorCurrent = voltage / resistor;
  const inductorCurrent = voltage / inductiveReactance;
  const capacitorCurrent = voltage / capacitiveReactance;

  // Update the results panel
  document.getElementById('result-capacitive-reactance').textContent = `${capacitiveReactance.toFixed(2)} Ω`;
  document.getElementById('result-inductive-reactance').textContent = `${inductiveReactance.toFixed(2)} Ω`;
  document.getElementById('result-resistor-current').textContent = `${(resistorCurrent * 1000).toFixed(2)} mA`;
  document.getElementById('result-inductor-current').textContent = `${(inductorCurrent * 1000).toFixed(2)} mA`;
  document.getElementById('result-capacitor-current').textContent = `${(capacitorCurrent * 1000).toFixed(2)} mA`;

  // Update overlay text
  document.getElementById('frequency-display').textContent = `${frequency} `;
  document.getElementById('resistor-current-display').textContent = `${(resistorCurrent * 1000).toFixed(1)} mA`;
  document.getElementById('inductor-current-display').textContent = `${(inductorCurrent * 1000).toFixed(1)} mA`;
  document.getElementById('capacitor-current-display').textContent = `${(capacitorCurrent * 1000).toFixed(1)} mA`;
  document.getElementById('voltage-display').textContent = `${voltage} `;
  document.getElementById('voltage-display-bottom').textContent = `${voltage} V`;
}
