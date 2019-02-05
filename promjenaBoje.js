var brojKocki = 6;
var boje = arrayNasumicnihBoja(brojKocki);

var kocke = document.querySelectorAll(".kocka");
var ciljnaBoja = nasumicanOdabirBoje(brojKocki);
var bojaEkran = document.getElementById("bojaEkran");
var h1 = document.querySelector("h1");
//gumbi
var reset = document.querySelector("#reset");
var easyGumb = document.querySelector("#easy");
var hardGumb = document.querySelector("#hard");

bojaEkran.textContent = ciljnaBoja;

//gumbi

hardGumb.addEventListener("click", function () {
    boje = arrayNasumicnihBoja(brojKocki);
    ciljnaBoja = nasumicanOdabirBoje(brojKocki);
    bojaEkran.textContent = ciljnaBoja
    for (var i = 0; i < kocke.length; i++) {
        kocke[i].style.backgroundColor = boje[i];
    };
    kocke[4].style.display = "block";
    kocke[5].style.display = "block";
    kocke[3].style.display = "block";
    hardGumb.classList.add("oznaceno");
    easyGumb.classList.remove("oznaceno");
})

easyGumb.addEventListener("click", function () {
    brojKocki = 3
    boje = arrayNasumicnihBoja(brojKocki);
    ciljnaBoja = nasumicanOdabirBoje(brojKocki);
    bojaEkran.textContent = ciljnaBoja
    for (var i = 0; i < kocke.length; i++) {
        kocke[i].style.backgroundColor = boje[i];
    };
    kocke[4].style.display = "none";
    kocke[5].style.display = "none";
    kocke[3].style.display = "none";
    hardGumb.classList.remove("oznaceno");
    easyGumb.classList.add("oznaceno");
})

reset.addEventListener("click", function () {
    boje = arrayNasumicnihBoja(brojKocki);
    ciljnaBoja = nasumicanOdabirBoje(brojKocki);
    bojaEkran.textContent = ciljnaBoja
    h1.style.backgroundColor = "black";
    for (var i = 0; i < kocke.length; i++) {
        kocke[i].style.backgroundColor = boje[i];
    }
    reset.textContent = "Nova boja"
    poruka.textContent =" "
})



for (var i = 0; i < kocke.length; i++) {
    kocke[i].style.backgroundColor = boje[i];

    kocke[i].addEventListener("click", function () {
        var kliknutaBoja = this.style.backgroundColor;
        console.log(ciljnaBoja, kliknutaBoja)
        if (kliknutaBoja === ciljnaBoja) {          
            h1.style.backgroundColor = ciljnaBoja
            poruka.textContent = "bravo";
            promijeniBojeSvihKockiUIstuBoju(kliknutaBoja); //ne mora funkcija imati nešto = njoj. Funkcija se zove promijeniBojeSvihKocki, a ono što mijenja "color" u
                                                    //funkciji je kliknutaBoja. Dakle, za sve što color vrijedi u funkciji, ovdje ide kliknutaBoja
            reset.textContent = "Ponovno igrati?"
            
        } else {
            poruka.textContent = "Pokusaj ponovo"
            this.style.backgroundColor = "#232323"
        }
    })
};


function nasumicanOdabirBoje() { //pickColor
    var nasumicno = Math.floor(Math.random() * boje.length);
    return boje[nasumicno]
}

function generirajNasumicnuBoju() { //randomColor
    var boja1 = Math.floor(Math.random() * 255);
    var boja2 = Math.floor(Math.random() * 255);
    var boja3 = Math.floor(Math.random() * 255);
    return "rgb(" + boja1 + ", " + boja2 + ", " + boja3 + ")"

};

function arrayNasumicnihBoja(num) { //generateRandomColors(num)
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(generirajNasumicnuBoju())
    }
    return arr
} 

function promijeniBojeSvihKockiUIstuBoju(color) {  //changeColors
    //loop through all squares
    for (var i = 0; i < kocke.length; i++) {
        //change each color to match given color
        kocke[i].style.backgroundColor = color;
    }
}