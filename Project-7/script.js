function calculate() {
  // Get values from inputs
  const N1 = parseFloat(document.getElementById('N1').value);
  const N2 = parseFloat(document.getElementById('N2').value);
  const resistor = parseFloat(document.getElementById('resistor').value);
  const voltage1 = parseFloat(document.getElementById('voltage1').value);

  // Basic calculations for current and voltages across R1 and R2
  const voltage2 = (voltage1 * N2)/N1;
  const current2 = voltage2 / resistor; 
  const current1 = (current2 * N2)/N1;
  
  // Format current based on its value
  let current1Display = "";
  if (current1 >= 0.1) {
    current1Display = `${current1.toFixed(2)} A`;
  } else if (current1 >= 0.001) {
    current1Display = `${(current1 * 1000).toFixed(2)} mA`;
  } else {
    current1Display = `${(current1 * 1_000_000).toFixed(2)} μA`;
  }

  let current2Display = "";
  if (current2 >= 0.1) {
    current2Display = `${current2.toFixed(2)} A`;
  } else if (current1 >= 0.001) {
    current2Display = `${(current2 * 1000).toFixed(2)} mA`;
  } else {
    current2Display = `${(current2 * 1_000_000).toFixed(2)} μA`;
  }

  // Update the results panel
  document.getElementById('result-voltage1').textContent = `${voltage1} V`;
  document.getElementById('result-voltage2').textContent = `${voltage2} V`;
  document.getElementById('result-current1').textContent = current1Display;
  document.getElementById('result-current2').textContent = current2Display;
  

  // Update the image overlay text with the calculated values
  document.getElementById('voltage1-display').textContent = `${voltage1} V`;
  document.getElementById('voltage2-display').textContent = `${voltage2} V`;
  document.getElementById('current1-display').textContent = current1Display;
  document.getElementById('current2-display').textContent = current2Display;
  
  

  // Update overload strip color based on current
  const overloadStrip = document.getElementById('overload-strip');
  if (current1 > 200) {
    overloadStrip.classList.add('overloaded');
  } else {
    overloadStrip.classList.remove('overloaded');
  }

  const overloadStrip1 = document.getElementById('overload-strip1');
  if (current2 > 200) {
    overloadStrip1.classList.add('overloaded');
  } else {
    overloadStrip1.classList.remove('overloaded');
  }
}