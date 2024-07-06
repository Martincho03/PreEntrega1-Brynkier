let promedios = [];

function main() {
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

        promedios.push(calculoDeKDA);

        let respuesta = prompt(
            "¿Quiere calcular otro promedio?(S/N)"
        ).toUpperCase();
        if (respuesta == "S") {
            main();
        } else {
            for (let i = 0; i < promedios.length; i++) {
                alert(
                    "El promedio numero " + (i + 1) + " es = " + promedios[i]
                );
            }
        }
    } else {
        alert(
            "Hay un error con los datos ingresados, por favor reiniciar la pagina..."
        );
    }
}

function caca() {
    const respuesta = prompt(
        "Queres que te siga preguntando? (S/N)"
    ).toUpperCase();

    if (respuesta == "S") {
        caca();
    } else {
        for (let i; i < promedios.length; i++) {
            alert(promedios[i]);
        }
    }
}

main();
