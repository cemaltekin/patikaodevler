function isimAl() {
    var name = prompt("Adınız nedir?");
    document.getElementById("myName").innerText = name;
}

function showTime() {
    var date = new Date();
    var saat = date.getHours();
    var dakika = date.getMinutes();
    var saniye = date.getSeconds();
    var field = date.getDay();

    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    if (field == 1) {
        field = "Pazartesi";
    } else if (field == 2) {
        field = "Salı";
    } else if (field == 3) {
        field = "Çarşamba";
    } else if (field == 4) {
        field = "Perşembe";
    } else if (field == 5) {
        field = "Cuma";
    } else if (field == 6) {
        field = "Cumartesi";
    } else if (field == 7) {
        field = "Pazar";
    }

    var time = saat + ":" + dakika + ":" + saniye + " " + field;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);
}
isimAl()
showTime()