document.addEventListener("DOMContentLoaded", function() {
    const baseInput = document.getElementById("base");
    const heightInput = document.getElementById("height");
    const calculateAreaButton = document.getElementById("calculate-area");
    const calculatePerimeterButton = document.getElementById("calculate-perimeter");
    const areaResult = document.getElementById("area");
    const perimeterResult = document.getElementById("perimeter");
  
    calculateAreaButton.addEventListener("click", function() {
      const base = parseFloat(baseInput.value);
      const height = parseFloat(heightInput.value);
  
      if (!isNaN(base) && !isNaN(height)) {
        const area = 0.5 * base * height;
        areaResult.textContent = `Luas Segitiga: ${area.toFixed(2)}`;
      }
    });
  
    calculatePerimeterButton.addEventListener("click", function() {
      const base = parseFloat(baseInput.value);
      const height = parseFloat(heightInput.value);
      const hypotenuse = Math.sqrt(base ** 2 + height ** 2);
  
      if (!isNaN(base) && !isNaN(height)) {
        const perimeter = base + height + hypotenuse;
        perimeterResult.textContent = `Keliling Segitiga: ${perimeter.toFixed(2)}`;
      }
    });
  });
  