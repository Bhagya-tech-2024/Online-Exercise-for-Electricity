function calculate() {
  // Get values from inputs
  const voltage = parseFloat(document.getElementById('voltage').value);
  const frequency = parseFloat(document.getElementById('frequency').value);
  const resistor = parseFloat(document.getElementById('resistor').value);
  const inductance = parseFloat(document.getElementById('inductance').value) / 1000; // Convert mH to H

  if (isNaN(voltage) || isNaN(frequency) || isNaN(resistor) || isNaN(inductance) || frequency <= 0) {
    alert("Please enter valid numerical values.");
    return;
  }

  // Calculate Inductive Reactance
  const inductiveReactance = 2 * Math.PI * frequency * inductance;

  // Calculate Impedance
  const impedance = Math.sqrt(Math.pow(resistor, 2) + Math.pow(inductiveReactance, 2));

  // Calculate Current (in Amperes)
  const current = voltage / impedance;

  // Calculate Voltages
  const voltageAcrossResistor = current * resistor;
  const voltageAcrossInductor = current * inductiveReactance;

  // Format Current Display
  let currentDisplay;
  if (current >= 1) {
    currentDisplay = `${current.toFixed(1)} A`;
  } else if (current >= 0.001) {
    currentDisplay = `${(current * 1000).toFixed(1)}mA`;
  } else {
    currentDisplay = `${(current * 1_000_000).toFixed(1)}μA`;
  }

  // Update the results panel
  document.getElementById('result-inductive-reactance').textContent = `${inductiveReactance.toFixed(1)} Ω`;
  document.getElementById('result-impedance').textContent = `${impedance.toFixed(2)} Ω`;
  document.getElementById('result-current').textContent = currentDisplay;
  document.getElementById('result-resistor-volatage').textContent = `${voltageAcrossResistor.toFixed(1)} V`;
  document.getElementById('result-inductor-voltage').textContent = `${voltageAcrossInductor.toFixed(1)} V`;

  // Update the image overlay text with calculated values
  document.getElementById('frequency-display').textContent = `${frequency} Hz`;
  document.getElementById('current-display').textContent = currentDisplay;
  document.getElementById('voltage-across-Resistor-display').textContent = `${voltageAcrossResistor.toFixed(1)} V`;
  document.getElementById('voltage-across-Inductor-display').textContent = `${voltageAcrossInductor.toFixed(1)} V`;
  document.getElementById('voltage-display').textContent = `${voltage} V`;

  // Update overload strip color based on current
  const overloadStrip = document.getElementById('overload-strip');
  if (current > 200) {
    overloadStrip.classList.add('overloaded');
  } else {
    overloadStrip.classList.remove('overloaded');
  }
}
