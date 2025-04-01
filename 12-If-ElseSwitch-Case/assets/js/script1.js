
let fuel = Number(prompt("Yanacaq növünü seçin:\n1 - Dizel (0.9 AZN/L)\n2 - Adi Benzin (1.0 AZN/L)\n3 - Premium Benzin (1.5 AZN/L)"));

switch (fuel) {
    case 1:
        var fuelPrice = 0.9;
        var fuelName = "Dizel";
        break;
    case 2:
        var fuelPrice = 1.0;
        var fuelName = "Adi Benzin";
        break;
    case 3:
        var fuelPrice = 1.5;
        var fuelName = "Premium Benzin";
        break;

    default:
        alert("Lütfən, düzgün Yanacaq Tipi daxil edin.");
        break;
}

let liter = Number(prompt("Almaq istədiyiniz yanacaq miqdarını (litrlə) daxil edin:"));
if (liter <= 0) {
    alert("Lütfən, düzgün yanacaq miqdarı daxil edin.");
}
let money = Number(prompt("Mövcud balansınızı (AZN) daxil edin:"));
if (money < 0) {
    alert("Lütfən, düzgün balans məbləği daxil edin.");
}

let total = liter * fuelPrice;
let newBalance = money - total;
if (money >= total) {
    alert(`Siz ${liter} litr ${fuelName} aldınız.\n Ümumi xərc: ${total} AZN \n Qalan balansınız: ${newBalance} AZN`);
}
else {
    let missingbalance = total - money;
    alert(`Üzr istəyirik, balansınız kifayət deyil!\nÜmumi xərc: ${total} AZN\nMövcud balansınız: ${money} AZN\nSizin ${missingbalance} AZN çatışmır.`);
}
            
       
    






