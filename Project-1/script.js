function calculate() {
    // Get values from inputs
    const voltage = parseFloat(document.getElementById('voltage').value);
    const frequency = parseFloat(document.getElementById('frequency').value);
    const resistor1 = parseFloat(document.getElementById('resistor1').value);
    const resistor2 = parseFloat(document.getElementById('resistor2').value);
  
    // Basic calculations for current and voltages across R1 and R2
    const totalResistance = resistor1 + resistor2;
    const current = voltage / totalResistance; 
    const voltageAcrossR1 = current * resistor1;
    const voltageAcrossR2 = current * resistor2;
  
    // Update the results panel
    document.getElementById('result-voltage').textContent = `${voltage} V`;
    document.getElementById('result-frequency').textContent = `${frequency} Hz`;
    document.getElementById('result-current').textContent = `${current.toFixed(2)} A`;
    document.getElementById('result-r1-voltage').textContent = `${voltageAcrossR1.toFixed(2)} V`;
    document.getElementById('result-r2-voltage').textContent = `${voltageAcrossR2.toFixed(2)} V`;
  
    // Update the image overlay text with the calculated values
    document.getElementById('frequency-display').textContent = `${frequency} Hz`;
    document.getElementById('current-display').textContent = `${current.toFixed(2)} A`;
    document.getElementById('r1-voltage-display').textContent = `${voltageAcrossR1.toFixed(2)} V`;
    document.getElementById('r2-voltage-display').textContent = `${voltageAcrossR2.toFixed(2)} V`;
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
  