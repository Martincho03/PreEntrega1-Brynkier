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

    alert(calculoDeKDA);
} else {
    alert(
        "Hay un error con los datos ingresados, por favor reiniciar la pagina..."
    );
}
