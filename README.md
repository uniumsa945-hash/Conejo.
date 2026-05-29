<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crecimiento de Población - Fibonacci</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #dff9fb, #c7ecee);
      margin: 0;
      padding: 20px;
      text-align: center;
    }

    h1 {
      color: #130f40;
    }

    .contenedor {
      background: white;
      max-width: 700px;
      margin: auto;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
    }

    input {
      padding: 10px;
      width: 120px;
      font-size: 16px;
      margin: 10px;
      border-radius: 8px;
      border: 1px solid #999;
    }

    button {
      padding: 10px 20px;
      background: #22a6b3;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover {
      background: #1e90a0;
    }

    table {
      width: 100%;
      margin-top: 20px;
      border-collapse: collapse;
    }

    th, td {
      padding: 12px;
      border-bottom: 1px solid #ddd;
    }

    th {
      background: #22a6b3;
      color: white;
    }

    .primo {
      background-color: #ffeaa7;
      font-weight: bold;
    }

    .resultado {
      margin-top: 20px;
      text-align: left;
    }

    .info {
      margin-top: 15px;
      color: #555;
    }
  </style>
</head>
<body>

  <div class="contenedor">
    <h1>🐇 Crecimiento de Población con Fibonacci</h1>

    <p>
      Simula el crecimiento de una población de conejos utilizando la serie de Fibonacci.
    </p>

    <input type="number" id="meses" min="1" placeholder="Meses">
    <button onclick="simular()">Simular</button>

    <div class="resultado" id="resultado"></div>

    <div class="info">
      ⭐ Los meses primos aparecen resaltados.
    </div>
  </div>

  <script>

    // Función para generar Fibonacci
    function fibonacci(n) {
      let serie = [1, 1];

      for (let i = 2; i < n; i++) {
        serie[i] = serie[i - 1] + serie[i - 2];
      }

      return serie;
    }

    // Función para verificar si un número es primo
    function esPrimo(num) {

      if (num < 2) return false;

      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }

      return true;
    }

    // Simulación principal
    function simular() {

      const meses = parseInt(document.getElementById("meses").value);

      if (meses <= 0 || isNaN(meses)) {
        alert("Ingrese un número válido");
        return;
      }

      const serie = fibonacci(meses);

      let html = `
        <table>
          <tr>
            <th>Mes</th>
            <th>Población</th>
            <th>¿Mes Primo?</th>
          </tr>
      `;

      for (let i = 0; i < meses; i++) {

        const primo = esPrimo(i + 1);

        html += `
          <tr class="${primo ? 'primo' : ''}">
            <td>${i + 1}</td>
            <td>${serie[i]}</td>
            <td>${primo ? 'Sí ⭐' : 'No'}</td>
          </tr>
        `;
      }

      html += `</table>`;

      document.getElementById("resultado").innerHTML = html;
    }

  </script>

</body>
</html>
