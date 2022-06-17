var random_number = Math.floor((Math.random() * (82 - 1)) + 1);
document.body.style = 'background: url("images/' + random_number.toString() + '.jpg"); background-position: center top; background-repeat: no-repeat;'

function set_time(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    year = momentoActual.getFullYear()
    month = momentoActual.getMonth()
    day = momentoActual.getDate()
    week_day = momentoActual.getDay()

    week_days = ["MON", "TUE", "WED", "THU", "FRY", "SAT", "SUN"]

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto;
    fecha_imprimible = week_days[week_day] + " " + day + " - " + month + " - " + year;

    document.getElementById("time").innerHTML = horaImprimible;
    document.getElementById("date").innerHTML = fecha_imprimible;

    setTimeout(() => {
        set_time()
    }, 5000)
}

set_time()