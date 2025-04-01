let season = prompt("Mövsümü daxil edin (yaz, yay, payız, qış):");

switch (season) {
    case "yaz":
        alert("Mart, Aprel, May");
        break;
    case "yay":
        alert("İyun, İyul, Avqust");
        break;
    case "payız":
        alert("Sentyabr, Oktyabr, Noyabr");
        break;
    case "qış":
        alert("Dekabr, Yanvar, Fevral");
        break;
    default:
        alert("Düzgün mövsüm adı daxil edin!");
        break;
}