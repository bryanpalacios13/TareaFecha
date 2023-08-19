console.log("Calcular fecha");

function day(dayV) {
    e = dayV;
    return e;
};

function weekDay(f1, f2, f3, f4, f5) {

    let ans = f1 + f2 + f3 + f4 + f5;

    for (; ans >= 7; ans -= 7) {
        if (ans >= 0 && ans <= 6) {
            break; // Salir del ciclo
        }
    }
    return ans;
};

function laborDay(f6) {
    let result = "";
    switch (f6) {
        case 1:
            result = "Lunes, día laborable";
            break;
        case 2:
            result = "Martes, día laborable";
            break;
        case 3:
            result = "Miércoles, día laborable";
            break;
        case 4:
            result = "Jueves, día laborable";
            break;
        case 5:
            result = "Viernes, día laborable";
            break;
        case 6:
            result = "Sábado, fin de semana";
            break;
        case 0:
            result = "Domingo, fin de semana";
            break;

        default:
            break;
    }
    return result;
};

function month(monthV) {
    let d = "";
    switch (monthV) {
        case 5:
            d = 0;
            break;
        case 8:
            d = 1;
            break;
        case 2:
        case 3:
        case 11:
            d = 2;
            break;
        case 6:
            d = 3;
            break;
        case 9:
        case 12:
            d = 4;
            break;
        case 4:
        case 7:
            d = 5;
            break;
        case 1:
        case 10:
            d = 6;
            break;

        default:

            break;
    };
    return d
};

function century(year) {
    let a = "";

    if (year >= 1700 && year <= 1799) a = +5;
    else if (year >= 1800 && year <= 1899) a = +3;
    else if (year >= 1900 && year <= 1999) a = +1;
    else if (year >= 2000 && year <= 2099) a = +0;
    else if (year >= 2100 && year <= 2199) a = -2;
    else if (year >= 2200 && year <= 2299) a = -4;

    return a;

};

function year(year) {
    let x = (year % 100);
    b = Math.floor(x * 1.25);


    return b;

};

function bi(year) {
    let c = "";

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
        c = 1;
    else
        c = 0;

    return c;

};





function showDate() {
    const yearValue = parseInt(document.getElementById("year").value);
    const monthValue = parseInt(document.getElementById("month").value);
    const dayValue = parseInt(document.getElementById("day").value);

    // console.log(number1, number2, number3);

    const centuryResult = century(yearValue);
    // console.log("Century:", centuryResult);

    const yearResult = year(yearValue);
    // console.log("Year:", yearResult);

    const biResult = bi(yearValue);
    // console.log("Bi:", biResult);

    const monthResult = month(monthValue);
    // console.log("Month:", monthResult);

    const dayResult = day(dayValue);
    // console.log("Day:", dayResult);

    const weekDayResult = weekDay(centuryResult, yearResult, biResult, monthResult, dayResult);
    // console.log("WeekDay:", weekDayResult);

    const laborDayResult = laborDay(weekDayResult);
    // console.log("LaborDay:", laborDayResult);

    document.getElementById("test").innerHTML = laborDayResult;
};