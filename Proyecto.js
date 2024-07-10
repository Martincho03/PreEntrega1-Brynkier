let promedios = [];

let juegos = [
    {
        nombre: "League of Legends",
        promedios: [],
    },
    {
        nombre: "Dota 2",
        promedios: [],
    },
    {
        nombre: "Counter Strike 2",
        promedios: [],
    },
    {
        nombre: "Valorant",
        promedios: [],
    },
];

function obtenerJuego() {
    let texto = "";
    let i;
    for (i = 0; i < juegos.length; i++) {
        texto += "* " + juegos[i].nombre + "\n";
    }

    let juegoSeleccionado = prompt(
        texto + "* Resultados\nSelecciona una opción"
    );

    juegoSeleccionado = juegoSeleccionado.replaceAll(" ", "").toLowerCase();

    if (juegoSeleccionado == "resultados") {
        return "R";
    }

    let juegoEncontrado = juegos.find(
        (juego) =>
            juego.nombre.replaceAll(" ", "").toLowerCase() == juegoSeleccionado
    );

    if (juegoEncontrado) {
        return juegos.indexOf(juegoEncontrado);
    } else {
        return obtenerJuego();
    }
}

function mostrarResultados() {
    let texto = "Tus promedios son: \n";

    for (let i = 0; i < juegos.length; i++) {
        texto += juegos[i].nombre + ": ";

        if (juegos[i].promedios.length > 0) {
            texto += juegos[i].promedios;
            let buenosPromedios = juegos[i].promedios.filter(
                (promedio) => promedio > 2
            );
            if (buenosPromedios) {
                texto +=
                    " (Cantidad de buenos promedios: " +
                    buenosPromedios.length +
                    ")";
            }
        } else {
            texto += "No hay datos cargados";
        }

        texto += "\n";
    }
    alert(texto);
    main();
}

function main() {
    let juegoSeleccionado = obtenerJuego();

    if (juegoSeleccionado == "R") {
        mostrarResultados();
        return;
    }

    const partidasIngresadas = prompt(
        "Ingrese cuantas partidas desea evaluar (min:2 / max:6)"
    );

    let sumatoriadepartidas = 0;
    if (partidasIngresadas < 7 && partidasIngresadas > 1) {
        for (let i = 0; i < partidasIngresadas; i++) {
            sumatoriadepartidas += Number(
                prompt("Ingrese el KDA de la partida " + (i + 1))
            );
        }
        const calculoDeKDA = sumatoriadepartidas / partidasIngresadas;

        juegos[juegoSeleccionado].promedios.push(calculoDeKDA);

        let respuesta = prompt("¿Volver al menu? (S/N)").toUpperCase();
        if (respuesta == "S") {
            main();
        }
    } else {
        alert(
            "Hay un error con los datos ingresados, por favor reiniciar la pagina..."
        );
    }
}
main();
