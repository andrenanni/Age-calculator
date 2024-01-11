function CalInput(){
    var day = document.getElementById('Day').value;
    var num = Number(day);
    var result = document.getElementById('resultYear');
    var info = document.getElementById('infoDay');

    info.innerHTML = null;

    if (num == false){
        info.innerHTML = "Campo obrigatório";
        result.innerHTML = "--";
        return;
    }
    else if (num > 31){
        info.innerHTML = "Dia inválido";
        result.innerHTML = "--";
        return;
    }
    else{
        result.innerHTML = num;
    }
}