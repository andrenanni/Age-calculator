var btn = document.querySelector('.button');

btn.addEventListener("click", function(){
    let day = document.querySelector('#Day').value;
    let numDay = Number(day);

    let month = document.querySelector('#Month').value;
    let numMonth = Number(month);
    
    let year = document.querySelector('#Year').value;
    let numYear = Number(year);

    let resultYear = document.querySelector('#resultYear');
    let resultMonth = document.querySelector('#resultMonth');
    let resultDay = document.querySelector('#resultDay');

    let infoDay = document.querySelector('#infoDay');
    let infoMonth = document.querySelector('#infoMonth');
    let infoYear = document.querySelector('#infoYear');
    
    infoDay.innerHTML = null;
    infoMonth.innerHTML = null;
    infoYear.innerHTML = null;

    if (numDay == false){
        infoDay.innerHTML = "Campo obrigatório";
        resultDay.innerHTML = "--";
        return;
    }
    else if (numDay > 31){
        infoDay.innerHTML = "Dia inválido";
        resultDay.innerHTML = "--";
        return;
    }

    if (numMonth == false){
        infoMonth.innerHTML = "Campo obrigatório";
        resultMonth.innerHTML = "--";
        return;
    }
    else if (numMonth > 12){
        infoMonth.innerHTML = "Mês inválido";
        resultMonth.innerHTML = "--";
        return;
    }

    if (numYear == false){
        infoYear.innerHTML = "Campo obrigatório";
        resultYear.innerHTML = "--";
        return;
    }
    else if (numYear > new Date().getFullYear()){
        infoYear.innerHTML = "Ano inválido";
        resultYear.innerHTML = "--";
        return;
    }

    // age calculator

    var userYear = new Date().getFullYear() - numYear;
    var userMonth = new Date().getMonth() - numMonth + 1;

    if (userMonth < 0){
        userMonth = userMonth + 12;
    };
    
    var userDay = new Date().getDay() + 1;
    
    resultDay.innerHTML = userDay;
    resultMonth.innerHTML = userMonth;
    resultYear.innerHTML = userYear;
});