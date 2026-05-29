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