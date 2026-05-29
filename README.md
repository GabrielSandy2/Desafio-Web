# Matemáticas en el Mundo Real — Plataforma Web Interactiva

¡Bienvenido a **Matemáticas en el Mundo Real**! Esta es una plataforma web educativa e interactiva diseñada para visualizar, simular y aplicar tres conceptos matemáticos fundamentales mediante algoritmos prácticos en el entorno digital. 

El proyecto fue desarrollado utilizando una arquitectura de diseño dividido (*Split Screen*) optimizada para computadoras y dispositivos móviles, integrando un sistema dinámico de pestañas que permite alternar entre los módulos de ejecución y los visores de código fuente.

---

## 🚀 Módulos del Proyecto

### 1. Serie de Fibonacci (Modelado Biológico)
* **Ubicación:** `index.html`
* **Descripción:** Simula el crecimiento exponencial y la duplicación de una población biológica de bacterias a lo largo del tiempo.
* **Lógica Interna:** Implementa un ciclo controlado que calcula la famosa secuencia de Fibonacci de forma iterativa, optimizando el uso de memoria al no almacenar estructuras masivas o vectores intermedios.

### 2. Números Primos (Módulo de Encriptación)
* **Ubicación:** `primos.html`
* **Descripción:** Aplica las propiedades únicas de los números primos en el campo de la ciberseguridad y la criptografía básica.
* **Lógica Interna:** Permite ingresar un texto y una clave de seguridad. El sistema realiza divisiones consecutivas para validar que la clave ingresada posea estrictamente dos divisores exactos (sea prima). Tras la validación, aplica un algoritmo de cifrado o descifrado desplazando los caracteres utilizando sus valores en la tabla ASCII.

### 3. Simulación Combinada (Análisis de Mercado)
* **Ubicación:** `combinado.html`
* **Descripción:** Fusiona ambos conceptos matemáticos para simular la volatilidad de precios en un panel de inversión de criptomonedas (Bitcoin, Ethereum y Solana).
* **Lógica Interna:** Ejecuta ciclos acoplados donde la serie de Fibonacci dicta el crecimiento y la tendencia base del precio simulado día con día, mientras que un algoritmo de primalidad detecta los días primos para marcarlos automáticamente como zonas de **Resistencia Crítica**.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructuración semántica de las páginas y formularios interactivos.
* **CSS3:** Diseño responsivo (*Grid* y *Flexbox*), paleta de colores análoga cyberpunk/académica (Morado, Rojo y Naranja Neón), y control absoluto de visibilidad de componentes mediante clases de estado (`.activo`).
* **JavaScript (Vanilla JS):** Lógica matemática pura, manipulación dinámica del DOM para inyección de resultados en tiempo real y arquitectura de control global para el intercambio de pestañas deslizantes.

---

## 📂 Estructura de Archivos

```text
├── index.html          # Interfaz principal (Módulo Fibonacci)
├── primos.html         # Interfaz de criptografía (Módulo Primos)
├── combinado.html      # Interfaz de simulación financiera (Fusión)
├── css/
│   └── estilos.css     # Hoja de estilos unificada y diseño responsivo
├── js/
│   └── script.js       # Lógica matemática y funciones de las pestañas
└── README.md           # Documentación del proyecto