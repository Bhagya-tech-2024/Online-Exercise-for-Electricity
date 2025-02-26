function calculate() {
  // Get values from inputs
  const V1 = parseFloat(document.getElementById('V1').value);
  const V2 = parseFloat(document.getElementById('V2').value);
  const resistor1 = parseFloat(document.getElementById('resistor1').value);
  const resistor2 = parseFloat(document.getElementById('resistor2').value);
  const resistor3 = parseFloat(document.getElementById('resistor3').value);
  const θ1 = parseFloat(document.getElementById('θ1').value) * (Math.PI / 180);
  const θ2 = parseFloat(document.getElementById('θ2').value) * (Math.PI / 180);
  const θ3 = parseFloat(document.getElementById('θ3').value) * (Math.PI / 180);

  // Basic calculations for current
  const current1 = V2 / resistor1; 
  const current2 = V2 / resistor2;
  const current3 = V2 / resistor3;

  // Active and reactive components of currents
  const Ip1 = current1 * Math.cos(θ1);
  const Ip2 = current2 * Math.cos(θ2);
  const Ip3 = current3 * Math.cos(θ3);
  const Iq1 = current1 * Math.sin(θ1);
  const Iq2 = current2 * Math.sin(θ2);
  const Iq3 = current3 * Math.sin(θ3);

  // Total active and reactive currents
  const Ip = Ip1 + Ip2 + Ip3;
  const Iq = Iq1 + Iq2 + Iq3;

  // Neutral current calculation
  const In = Math.sqrt(Ip**2 + Iq**2);

  // Power calculations (Real Power Only)
  const P1 = V2 * Ip1;
  const P2 = V2 * Ip2;
  const P3 = V2 * Ip3;
  const TotalPower = P1 + P2 + P3;

  // Format current display
  function formatCurrent(value) {
    if (value >= 0.1) return `${value.toFixed(2)} A`;
    if (value >= 0.001) return `${(value * 1000).toFixed(2)} mA`;
    return `${(value * 1_000_000).toFixed(2)} μA`;
  }

  const current1Display = formatCurrent(current1);
  const current2Display = formatCurrent(current2);
  const current3Display = formatCurrent(current3);
  const InDisplay = formatCurrent(In);

  // Update the results panel
  document.getElementById('result-neutral-current').textContent = `${In.toFixed(2)} A`;
  document.getElementById('result-Power').textContent = `${TotalPower.toFixed(2)} W`;

  // Update the image overlay text
  document.getElementById('neutralvoltage-display').textContent = `${V1} V`;
  document.getElementById('current1-display').textContent = current1Display;
  document.getElementById('current2-display').textContent = current2Display;
  document.getElementById('current3-display').textContent = current3Display;
  document.getElementById('In-display').textContent = InDisplay;
}
