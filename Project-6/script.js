function calculate() {
  // Get values from inputs
  const voltage = parseFloat(document.getElementById('voltage').value);
  const frequency = parseFloat(document.getElementById('frequency').value);
  const resistor = parseFloat(document.getElementById('resistor').value);
  const capacitance = parseFloat(document.getElementById('capacitance').value);

  // calculations 
  const capacitanceF = capacitance / 1000000;
  const capacitivereactance = 1 / (2 * Math.PI * frequency * capacitanceF); 
  const impedance = Math.sqrt(Math.pow(resistor, 2) + Math.pow(capacitivereactance, 2));
  const current = voltage / impedance; 
  const voltageacrossresistor = current * resistor; 
  const voltageacrosscapacitor = current * capacitivereactance;

  // Format current based on its value
  let currentDisplay = "";
  if (current >= 0.1) {
    currentDisplay = `${current.toFixed(2)} A`;
  } else if (current >= 0.001) {
    currentDisplay = `${(current * 1000).toFixed(2)} mA`;
  } else {
    currentDisplay = `${(current * 1_000_000).toFixed(2)} μA`;
  }

  // Update the results panel
  document.getElementById('result-capacitive-reactance').textContent = `${capacitivereactance.toFixed(2)} Ω`;
  document.getElementById('result-impedance').textContent = `${impedance.toFixed(2)} Ω`;
  document.getElementById('result-current').textContent = currentDisplay;
  document.getElementById('result-resistor-volatage').textContent = `${voltageacrossresistor.toFixed(2)} V`;
  document.getElementById('result-capacitor-voltage').textContent = `${voltageacrosscapacitor.toFixed(2)} V`;

  // Update the image overlay text with the calculated values
  document.getElementById('frequency-display').textContent = `${frequency} `;
  document.getElementById('current-display').textContent = currentDisplay;
  document.getElementById('resistor-volatage-display').textContent = `${voltageacrossresistor.toFixed(2)} V`;
  document.getElementById('capacitor-voltage-display').textContent = `${voltageacrosscapacitor.toFixed(2)} V`;
  document.getElementById('voltage-display').textContent = `${voltage} `;
  

  // Update overload strip color based on current
  const overloadStrip = document.getElementById('overload-strip');
  if (current > 200) {
    overloadStrip.classList.add('overloaded');
  } else {
    overloadStrip.classList.remove('overloaded');
  }
}