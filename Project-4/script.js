function calculate() {
  // Get values from inputs
  const capacitance = parseFloat(document.getElementById('capacitance').value) * 1e-6; // Convert µF to F
  const voltage = parseFloat(document.getElementById('voltage').value);
  const frequency = parseFloat(document.getElementById('frequency').value);


  // Calculate capacitive reactance
  const capacitivereactance = 1 / (2 * Math.PI * frequency * capacitance);

  // Calculate current
  const current = voltage / capacitivereactance;

  // Format current display
  let currentDisplay = "";
  if (current >= 1) {
    currentDisplay = `${current.toFixed(2)} A`;
  } else if (current >= 0.001) {
    currentDisplay = `${(current * 1000).toFixed(1)} mA`;
  } else {
    currentDisplay = `${(current * 1_000_000).toFixed(1)} μA`;
  }

  // Update the results panel
  document.getElementById('result-voltage').textContent = `${voltage} V`;
  document.getElementById('result-frequency').textContent = `${frequency} Hz`;
  document.getElementById('result-current').textContent = currentDisplay;
  document.getElementById('result-capacitance').textContent = `${(capacitance * 1e6).toFixed(1)} μF`; // Convert back to µF for display
  document.getElementById('result-capacitive-reactance').textContent = `${capacitivereactance.toFixed(1)} Ω`;

  // Update the image overlay text with calculated values
  document.getElementById('frequency-display').textContent = `${frequency}`;
  document.getElementById('current-display').textContent = currentDisplay;
  document.getElementById('voltage-display').textContent = `${voltage}`;
  document.getElementById('voltage-display-bottom').textContent = `${voltage} V`;

  // Update overload strip color based on current
  const overloadStrip = document.getElementById('overload-strip');
  if (current > 0.2) { 
    overloadStrip.classList.add('overloaded');
  } else {
    overloadStrip.classList.remove('overloaded');
  }
}
