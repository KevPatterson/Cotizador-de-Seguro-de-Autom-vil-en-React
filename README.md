# Cotizador de Seguros de Autos 🚗

Este proyecto es una aplicación web para cotizar seguros de autos. Está desarrollado con **React**, utilizando **TailwindCSS** para los estilos, y sigue una arquitectura basada en **contextos y hooks** para una experiencia fluida y escalable.

---

## 🛠️ Tecnologías

- **React**: Biblioteca para construir interfaces de usuario.
- **TailwindCSS**: Framework CSS para estilos rápidos y consistentes.
- **Context API**: Manejo global del estado de la aplicación.
- **JavaScript (ES6+)**: Lenguaje principal para la lógica del proyecto.

---

## 🚀 Características

- Selección de marca, año y plan de seguro.
- Cálculo dinámico del costo total del seguro.
- Resumen detallado de la cotización.
- Interfaz responsiva y amigable.
- Carga con un spinner para una mejor experiencia de usuario.

---

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── AppSeguro.jsx    # Componente principal de la aplicación
│   ├── Error.jsx        # Muestra mensajes de error
│   ├── Formulario.jsx   # Formulario para selección de datos
│   ├── Resultado.jsx    # Muestra el resumen de la cotización
│   ├── Spinner.jsx      # Indicador de carga
├── constants/           # Constantes
│   └── index.js         # Marcas, años y planes
├── context/             # Contexto global
│   └── CotizadorProvider.jsx # Proveedor del contexto global
├── helpers/             # Funciones auxiliares
│   └── index.js         # Funciones de cálculo y formateo
├── hooks/               # Hooks personalizados
│   └── useCotizador.jsx # Hook para manejar el contexto
├── styles/              # Estilos adicionales
│   └── Spinner.css      # Estilo personalizado para el Spinner
├── assets/              # Recursos estáticos
│   └── react.svg        # Logo de React
├── index.css            # Estilos globales con TailwindCSS
├── App.jsx              # Componente raíz
├── main.jsx             # Punto de entrada
└── index.html           # Plantilla HTML principal
```

---

## ⚙️ Instalación

Sigue los pasos para ejecutar este proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/cotizador-seguros.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd cotizador-seguros
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Ejecuta la aplicación:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📚 Uso

1. Selecciona la marca de tu vehículo.
2. Escoge el año de fabricación.
3. Elige un plan (básico o completo).
4. Haz clic en "Cotizar".
5. Revisa el resumen con el costo total.

---

## 🌟 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica o corrección:
   ```bash
   git checkout -b feature/nueva-caracteristica
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agregada nueva característica"
   ```
4. Envía tus cambios al repositorio remoto:
   ```bash
   git push origin feature/nueva-caracteristica
   ```
5. Abre un Pull Request en GitHub.

---

