function getSternzeichen(day, month) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Widder"; 
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Stier"; 
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Zwillinge"; 
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 21)) {
        return "Krebs"; 
    } else if ((month == 7 && day >= 22) || (month == 8 && day <= 21)) {
        return "Löwe"; 
    } else if ((month == 8 && day >= 22) || (month == 9 && day <= 21)) {
        return "Jungfrau"; 
    } else if ((month == 9 && day >= 22) || (month == 10 && day <= 22)) {
        return "Waage"; 
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) {
        return "Skorpion"; 
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Schütze"; 
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 20)) {
        return "Steinbock"; 
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Wassermann"; 
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Fische"; 
    } else {
        return "Ungültiges Datum"; 
    }
}

// Aufruf=>

console.log(getSternzeichen(21, 3)); //"Widder" 
console.log(getSternzeichen(20, 4)); //"Stier" 
console.log(getSternzeichen(21, 5)); //"Zwillinge" 
console.log(getSternzeichen(21, 6)); //"Krebs" 
console.log(getSternzeichen(22, 7)); //"Löwe"
console.log(getSternzeichen(22, 8)); //"Jungfrau"       
console.log(getSternzeichen(22, 9)); //"Waage" 
console.log(getSternzeichen(23, 10)); //"Skorpion" 
console.log(getSternzeichen(23, 11)); //"Schütze" 
console.log(getSternzeichen(22, 12)); //"Steinbock" 
console.log(getSternzeichen(21, 1)); //"Wassermann" 
console.log(getSternzeichen(19, 2)); //"Fisch" 


