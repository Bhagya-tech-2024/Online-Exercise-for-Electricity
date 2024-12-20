function calculate() {
  // Get values from inputs
  const inductance1 = parseFloat(document.getElementById('inductance1').value);
  const voltage = parseFloat(document.getElementById('voltage').value);
  const frequency = parseFloat(document.getElementById('frequency').value);

  // Convert inductance to Henries
  const inductance = inductance1 / 1000;

  // Calculate inductive reactance
  const inductiveReactance = 2 * Math.PI * frequency * inductance;

  // Calculate current (ensure reactance is not zero to avoid division by zero)
  const current = inductiveReactance !== 0 ? voltage / inductiveReactance : 0;

  // Format current display
  let currentDisplay = "";
  if (current >= 0.1) {
    currentDisplay = `${current.toFixed(2)} A`;
  } else if (current >= 0.001) {
    currentDisplay = `${(current * 1000).toFixed(2)} mA`;
  } else {
    currentDisplay = `${(current * 1_000_000).toFixed(2)} μA`;
  }

  // Update the results panel
  document.getElementById('result-voltage').textContent = `${voltage} V`;
  document.getElementById('result-frequency').textContent = `${frequency} Hz`;
  document.getElementById('result-current').textContent = currentDisplay;
  document.getElementById('result-inductance').textContent = `${inductance.toFixed(6)} H`;
  document.getElementById('result-inductive-reactance').textContent = `${inductiveReactance.toFixed(2)} Ω`;

  // Update the image overlay text with calculated values
  document.getElementById('frequency-display').textContent = `${frequency} Hz`;
  document.getElementById('current-display').textContent = currentDisplay;
  document.getElementById('inductance-display').textContent = `${inductance.toFixed(6)} H`;
  document.getElementById('inductivereactance-display').textContent = `${inductiveReactance.toFixed(2)} Ω`;
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
