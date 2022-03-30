// SPORTKA - funkce pro klik na tlačítko (úkol 1)

function losuj(){
    let osudi = [];
    let tazenaCisla = [];
    let vyherniCisla = document.querySelector('#vyherni-cisla');
    let historie = document.querySelector('#historie');
    let textTlacitka = document.querySelector('#losuj');

    document.querySelector('h1').textContent = "Výherní čísla";
    document.querySelector('h2').textContent = "Historie her";

    cisti();
 
    // vytvoření osudi
    for (let i = 1; i <= 49; i = i + 1) {
        osudi.unshift(i);
    }

    // z osudi vyberu 7 nahodnych cisel
    for (let i = 0; i < 7; i++) {
        let vyherniIndex = Math.floor(Math.random() * osudi.length);
        let vyherniCislo = osudi[vyherniIndex];
    
        tazenaCisla.push(vyherniCislo);
        osudi.splice(vyherniIndex, 1);
    }

    // výpis do HTML (tažení s 2sec zpožděním - úkol 2) a zápis historie (úkol 3)
    for (let j = 0; j < tazenaCisla.length; j++) {
        (function(j){
            window.setTimeout(function(){
                vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>';
                historie.innerHTML += tazenaCisla [j]+", ";
            }, j*2000);
        }(j));
       
    }
    textTlacitka.textContent = "Losuj znovu"
    historie.innerHTML += '<br>'
}

// vycisti formular pro dalsi losovani (úkol 3)
function cisti(){
    let vyherniCisla = document.querySelector('#vyherni-cisla');
    vyherniCisla.innerHTML = ""
}