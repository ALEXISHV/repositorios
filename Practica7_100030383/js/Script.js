document.addEventListener('DOMContentLoaded', function () {

    /* ── a) Variables y salida ── */
    const btnDatos = document.getElementById('btnDatos');
    if (btnDatos) {
        btnDatos.addEventListener('click', function () {
            const nombre = 'Cristian Alexis Hernández Velázquez';
            const matricula = '100030383';
            const carrera = 'Licenciatura en Sistemas Computacionales';
            const semestre = 5;

            const mensaje = `Alumno: ${nombre}\nMatrícula: ${matricula}\nCarrera: ${carrera}\nSemestre: ${semestre}° Semestre`;

            document.getElementById('parDatos').textContent = mensaje;
            console.log('Sección A Datos del alumno generados:', { nombre, matricula, carrera, semestre });
        });
    }
    const btnCalc = document.getElementById('btnCalc');
    if (btnCalc) {
        btnCalc.addEventListener('click', function () {
            const p1 = parseFloat(document.getElementById('p1').value);
            const p2 = parseFloat(document.getElementById('p2').value);
            const p3 = parseFloat(document.getElementById('p3').value);
            const parCalc = document.getElementById('parCalc');

            if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
                parCalc.textContent = 'Por favor ingresa las tres calificaciones parciales.';
                parCalc.style.color = '#dc3545';
                return;
            }

            const promedio = (p1 + p2 + p3) / 3;
            console.log('Sección B - Promedio calculado:', promedio.toFixed(2));

            if (promedio >= 70) {
                parCalc.textContent = `Promedio: ${promedio.toFixed(2)} — ¡Aprobado! ✓`;
                parCalc.style.color = '#198754';
            } else {
                parCalc.textContent = `Promedio: ${promedio.toFixed(2)} — Reprobado ✗`;
                parCalc.style.color = '#dc3545';
            }
        });
    }
    const btnAgregar = document.getElementById('btnAgregar');
    const btnLimpiar = document.getElementById('btnLimpiar');

    if (btnAgregar) {
        btnAgregar.addEventListener('click', function () {
            const input = document.getElementById('inputItem');
            const valor = input.value.trim();

            if (valor === '') return;

            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = valor;

            document.getElementById('miLista').appendChild(li);
            input.value = '';
            console.log('Sección C - Elemento agregado:', valor);
        });
    }

    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function () {
            document.getElementById('miLista').innerHTML = '';
            console.log('Sección C - Lista limpiada.');
        });
    }
});
function cambiarFondo(colorHex) {
    const seccion = document.getElementById('sec-estilos');
    if (seccion) {
        seccion.style.backgroundColor = '#' + colorHex;
  }
}