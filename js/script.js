if (document.getElementById("btnCalcularFibonacci")) {
    document.getElementById("btnCalcularFibonacci").addEventListener("click", simularFibonacci);
}

function simularFibonacci() {
    let mesesInput = document.getElementById("meses").value;
    let meses = parseInt(mesesInput);
    let areaResultado = document.getElementById("resultadoFibonacci");

    if (isNaN(meses) || meses < 1 || meses > 40) {
        areaResultado.innerHTML = "<span style='color: var(--rojo-brillante);'>Por favor, ingresa un número de meses válido (entre 1 y 40).</span>";
        return;
    }

    let a = 0;
    let b = 1;
    let c;

    let htmlContent = "<h4>Población de Bacterias Calculada:</h4><ul style='list-style: none; padding-top: 10px;'>";

    for (let i = 1; i <= meses; i++) {
        let valorActual;

        if (i === 1) {
            valorActual = a;
        } else if (i === 2) {
            valorActual = b;
        } else {
            c = a + b;
            a = b;
            b = c;
            valorActual = c;
        }

        if (valorActual === 0 && i === 1) {
            valorActual = 1; 
            a = 1; 
        }

        let textoUnidad = (valorActual === 1) ? "bacteria" : "bacterias";

        htmlContent += `<li style='padding: 5px 0; border-bottom: 1px dashed rgba(255,255,255,0.1);'>
            Mes ${i}: <strong style='color: var(--naranja-neon);'>${valorActual} ${textoUnidad}</strong>
        </li>`;
    }

    htmlContent += "</ul>";
    areaResultado.innerHTML = htmlContent;
}


if (document.getElementById("btnEncriptar") && document.getElementById("btnDesencriptar")) {
    document.getElementById("btnEncriptar").addEventListener("click", () => procesarCripto(true));
    document.getElementById("btnDesencriptar").addEventListener("click", () => procesarCripto(false));
}

function esNumeroPrimo(num) {
    if (num <= 1) return false;
    let contadorDivisores = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            contadorDivisores++;
        }
    }
    return contadorDivisores === 2;
}

function procesarCripto(encriptar) {
    let texto = document.getElementById("textoProcesar").value.trim();
    let clave = parseInt(document.getElementById("clavePrimo").value);
    let areaResultado = document.getElementById("resultadoPrimos");

    if (texto === "") {
        areaResultado.innerHTML = "<span style='color: #ff4a4a;'>Por favor, ingresa un texto o contraseña.</span>";
        return;
    }

    if (isNaN(clave) || !esNumeroPrimo(clave)) {
        areaResultado.innerHTML = "<span style='color: #ff4a4a;'>⚠️ Clave inválida. Debes ingresar un NÚMERO PRIMO (ej. 2, 3, 5, 7, 11...) para garantizar la seguridad.</span>";
        return;
    }

    let resultadoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        let codigoAscii = texto.charCodeAt(i);
        let nuevoCodigo;

        if (encriptar) {
            nuevoCodigo = codigoAscii + clave;
        } else {
            nuevoCodigo = codigoAscii - clave;
        }

        resultadoFinal += String.fromCharCode(nuevoCodigo);
    }

    if (encriptar) {
        areaResultado.innerHTML = `<strong>Texto Encriptado:</strong><br><span style='color: #b5fe22; font-family: monospace; font-size: 1.2rem;'>${resultadoFinal}</span>`;
    } else {
        areaResultado.innerHTML = `<strong>Texto Desencriptado Original:</strong><br><span style='color: #27ae60; font-weight: bold;'>${resultadoFinal}</span>`;
    }
}


if (document.getElementById("btnProyectarMercado")) {
    document.getElementById("btnProyectarMercado").addEventListener("click", generarGraficoPrecios);
}

function generarGraficoPrecios() {
    let diasInput = document.getElementById("diasProyeccion");
    let criptoInput = document.getElementById("criptomoneda");
    let areaResultado = document.getElementById("resultadoCombinado");

    if (!diasInput || !areaResultado) return;

    let dias = parseInt(diasInput.value);
    let cripto = criptoInput ? criptoInput.value : "BTC";

    if (isNaN(dias) || dias < 1 || dias > 45) {
        areaResultado.innerHTML = "<span style='color: var(--rojo-brillante);'>Por favor, ingresa una cantidad de días válida (entre 1 y 45).</span>";
        return;
    }

    let precioBase = 0;
    let multiplicador = 1;

    if (cripto === "BTC") {
        precioBase = 65000; 
        multiplicador = 150; 
    } else if (cripto === "ETH") {
        precioBase = 3200;  
        multiplicador = 15;
    } else if (cripto === "SOL") {
        precioBase = 140;   
        multiplicador = 2;
    }

    let a = 0;
    let b = 1;
    let c;

    let htmlContent = `<h4>Historial de Mercado para ${cripto}:</h4><ul style='list-style: none; padding-top: 10px;'>`;

    for (let i = 1; i <= dias; i++) {
        let fiboActual;

        if (i === 1) {
            fiboActual = a;
        } else if (i === 2) {
            fiboActual = b;
        } else {
            c = a + b;
            a = b;
            b = c;
            fiboActual = c;
        }

        let precioSimulado = precioBase + (fiboActual * multiplicador);
        let esZonaResistencia = esNumeroPrimo(i); 

        if (esZonaResistencia) {
            htmlContent += `<li style='padding: 8px 10px; margin: 4px 0; background-color: rgba(249, 115, 22, 0.15); border-left: 4px solid var(--naranja-neon); border-radius: 4px;'>
                Día ${i}: <strong>$${precioSimulado.toLocaleString()} USD</strong> → <span style='color: var(--naranja-neon); font-weight: bold;'>⚠️ RESISTENCIA PRIMA (Día ${i})</span>
            </li>`;
        } else {
            htmlContent += `<li style='padding: 6px 10px; color: #ccaebf; border-bottom: 1px dashed rgba(255,255,255,0.05);'>
                Día ${i}: $${precioSimulado.toLocaleString()} USD → Tendencia estable
            </li>`;
        }
    }

    htmlContent += "</ul>";
    areaResultado.innerHTML = htmlContent;
}


function cambiarPestana(tipo, botonPresionado) {
    const contenedor = botonPresionado.parentElement;
    const botones = contenedor.querySelectorAll('.btn-pestana');
    botones.forEach(btn => btn.classList.remove('activa'));
    
    botonPresionado.classList.add('activa');
    
    const seccionDerecha = contenedor.parentElement;
    const pestanaForm = seccionDerecha.querySelector('#pestana-form');
    const pestanaCode = seccionDerecha.querySelector('#pestana-code');

    if (tipo === 'form') {
        pestanaForm.classList.add('activo');
        pestanaCode.classList.remove('activo');
    } else {
        pestanaForm.classList.remove('activo');
        pestanaCode.classList.add('activo');
    }
}