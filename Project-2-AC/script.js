function calculate() {
  // Get values from inputs
  const voltage = parseFloat(document.getElementById('voltage').value);
  const frequency = parseFloat(document.getElementById('frequency').value);
  const resistor1 = parseFloat(document.getElementById('resistor1').value);
  const resistor2 = parseFloat(document.getElementById('resistor2').value);

  // Validate inputs
  if (isNaN(voltage) || isNaN(frequency) || isNaN(resistor1) || isNaN(resistor2) || resistor1 <= 0 || resistor2 <= 0) {
    alert("Please enter valid positive numbers for all fields.");
    return;
  }

  // Basic calculations for current and voltages
  const totalResistance = resistor1 + resistor2;
  const current1 = voltage / resistor1;
  const current2 = voltage / resistor2;
  const current = current1+current2;

  // Format current based on its value
  const formatCurrent = (value) => {
    if (value >= 0.1) return `${value.toFixed(2)} A`;
    if (value >= 0.001) return `${(value * 1000).toFixed(2)} mA`;
    return `${(value * 1_000_000).toFixed(2)} μA`;
  };

  const currentDisplay = formatCurrent(current);
  const current1Display = formatCurrent(current1);
  const current2Display = formatCurrent(current2);

  // Update the results panel
  document.getElementById('result-voltage').textContent = `${voltage} V`;
  document.getElementById('result-frequency').textContent = `${frequency} Hz`;
  document.getElementById('result-current').textContent = currentDisplay;
  document.getElementById('result-current1').textContent = current1Display; 
  document.getElementById('result-current2').textContent = current2Display; 

  // Update the image overlay text with the calculated values
  document.getElementById('frequency-display').textContent = `${frequency} Hz`;
  document.getElementById('current-display').textContent = currentDisplay;
  document.getElementById('current1-display').textContent = current1Display;
  document.getElementById('current2-display').textContent = current2Display;
  document.getElementById('voltage-display').textContent = `${voltage} V`;
  document.getElementById('voltage-display-bottom').textContent = `${voltage} V`;

  // Update overload strip color based on current
  const overloadStrip = document.getElementById('overload-strip');
  if (current > 200) {
    overloadStrip.classList.add('overloaded');
  } else {
    overloadStrip.classList.remove('overloaded');
  }
}
