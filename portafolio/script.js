// 1. Objeto principal con tus datos (estructura de la guía aplicada a tu portafolio)
const miPortafolio = {
    perfil: {
        nombre: "Emilio Bodet del Castillo Negrete",
        ubicacion: "Ciudad de México y Lerma de Villada",
        disciplina: "Artista multidisciplinario"
    },
    statement: "Artista multidisciplinario basado en la Ciudad de México y Lerma de Villada. Mi práctica explora la intersección entre la comunicación digital y la producción audiovisual, combinando la formación académica de la licenciatura en Arte y comunicación digitales en la UAM Lerma y una base técnica en producción de música electrónica por SAE Institute (CDMX). <p>Actualmente participando en el Porgrama de Investigación Artística y Cómputo de Enjambre <br>PARVADA</br></p> "
};

// 2. Mostrar los datos estructurados en la consola del navegador usando Object.keys()
console.log("--- DATOS DEL PORTAFOLIO ---");
let llavesPerfil = Object.keys(miPortafolio.perfil);
for (let i = 0; i < llavesPerfil.length; i++) {
    let clave = llavesPerfil[i];
    console.log(clave.toUpperCase() + ": " + miPortafolio.perfil[clave]);
}
console.log("Statement completo:", miPortafolio.statement);
console.log("---------------------------------------");

// 3. Lógica del botón ABOUT y los clics en pantalla
const aboutBox = document.querySelector(".about-box");
const aboutButton = document.querySelector("#aboutButton");
const mainContent = document.querySelector(".main-content");

if (aboutBox && aboutButton) {
    // Insertar el statement dentro del recuadro flotante
    aboutBox.innerHTML = `<p>${miPortafolio.statement}</p>`;

    // Al hacer clic en el botón ABOUT, se muestra el recuadro
    aboutButton.addEventListener("click", (evento) => {
        evento.stopPropagation(); // Evita que el clic cierre el recuadro inmediatamente
        aboutBox.style.display = "block";
    });

    // Al hacer clic en *cualquier parte* de la pantalla, se oculta el recuadro y se vuelve a la vista normal de la foto
    document.addEventListener("click", () => {
        aboutBox.style.display = "none";
    });

    // Permitir que si haces clic dentro del propio recuadro de texto, este no se cierre por accidente
    aboutBox.addEventListener("click", (evento) => {
        evento.stopPropagation();
    });
}