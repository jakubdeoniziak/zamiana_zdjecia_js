function zmiana()
{
    let zdjecie = document.getElementById('zdjecie').src;
    let sciezka = zdjecie.replace(/^.*[\\/]/, '');
    zdjecie = sciezka

    if (zdjecie == "zdjecie1.jpeg")
    {
        document.getElementById("zdjecie").src = "zdjecie2.jpeg"
        document.getElementById("przycisk").innerText = "Dbanie o środowisko"
    }
    else
    {
        document.getElementById("zdjecie").src = "zdjecie1.jpeg"
        document.getElementById("przycisk").innerText = "Niszczenie środowiska"
    }



}