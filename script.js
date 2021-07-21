var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
var hoje = new Date();
var horas = hoje.getHours();
var minutos = hoje.getMinutes();
var dia = hoje.getDay();

function Tempo(){
    var hoje = new Date();
    var horas = hoje.getHours();
    var minutos = hoje.getMinutes();
    var segundos = hoje.getSeconds();
    segundos = Zeros(segundos);
    minutos = Zeros(minutos);
    horas = Zeros(horas)
    document.getElementById('horas').innerHTML = horas + ":" + minutos + ":" + segundos;
    var temporizador = setTimeout(Tempo, 1000)
    Dia()

    var texto = document.getElementById('texto').value;
    var horasValue = document.getElementById('horasValue').value;
    var minutosValue = document.getElementById('minutosValue').value;
    var segundosValue = document.getElementById('segundosValue').value;
    document.getElementById('texto2').innerHTML = "Site: " + texto + "<br>" + " Horário: " + horasValue + ":" + minutosValue + ":" + segundosValue;

    if(horasValue == horas && minutosValue == minutos && segundosValue == segundos){
        window.open(texto); 
        console.log(texto)
    }

    var minutosRegressivos

    horasRegressiva

    var horasRegressiva = horasValue - horas;

    if(minutosValue < minutos){
        minutosRegressivos = minutos - minutosValue - 1;
    }else if(minutosValue > minutos){
        minutosRegressivos = minutosValue - minutos - 1;
    }else if(minutosValue == 00){
        minutosValue = 58;
        minutosRegressivos = minutosValue - minutos - 1;
    }
    
    var segundosRegressivos = 60 - segundos;
    segundosRegressivos = Zeros(segundosRegressivos)
    horasRegressiva = Zeros(horasRegressiva)
    minutosRegressivos = Zeros(minutosRegressivos)



    document.getElementById('contagemRegressiva').innerHTML = horasRegressiva + ":" + minutosRegressivos + ":" + segundosRegressivos;

}

//Adicionar os zeros antes do 10
function Zeros(z){
    if(z < 10)  {
        z = "0" + z
    };
    return z;
}

//Dia da Semana
function Dia(){
    document.getElementById('diaSemana').innerHTML = dias[dia]

    var Aulas = [
        "Fim de Semana",
        "Arte </br> Português </br> Química </br> Sociologia </br> Inglês </br> História </br></br> Mais Educação </br> Edutech",
        "Ed. Financeira </br> Filosofia </br> Português </br> Biologia </br> História </br> Português ",
        "Ed. Financeira </br> Geografia </br> Inglês </br> Física </br> Ed. Física </br> Matemática </br></br> Mais Educação </br> Edutech",
        "Cidadania & Civismo </br> Ed. Fisica </br> Biologia </br> Química </br> Matemática </br> Matemática",
        "Física </br> Geografia </br> Química </br> Português </br> Matemática </br> Português",
        "Fim de Semana"
    ]
    document.getElementById('aulas').innerHTML = Aulas[dia]

}


var horariosHoras = [7, 8, 9, 10, 11]
var horariosMinutos = [00, 15, 30, 45]

//Mais Educação 0
//Edutech 1
//Cidadania & Civismo 2
//Inglês 3
//Português 4
//Educação Física 5
//Arte 6
//História 7
//Educação Financeira 8
//Física 9
//Química 10
//Sociologia 11
//Filosofia 12
//Matemática 13
//Geografia 14
//Biologia 15

var aulas = ["https://classroom.google.com/u/4/c/MjkyMjUxMDkzMTg0",
"https://classroom.google.com/u/4/c/MzIxOTAxOTk2Njk2",
"https://classroom.google.com/u/4/c/MjY1MTEzNDA3NzMw",
"https://classroom.google.com/u/4/c/MjY1MTIxMDcwOTk5",
"https://classroom.google.com/u/4/c/MjYzMTEyMTUwMTMx",
"https://classroom.google.com/u/4/c/MjU0NDcwMjE2NzE1",
"https://classroom.google.com/u/4/c/MjY1MTA2MTEyMDQ5",
"https://classroom.google.com/u/4/c/MjY1MTAwNTQzOTY3",
"https://classroom.google.com/u/4/c/MjY1MTI1MDY1MTYy",
"https://classroom.google.com/u/4/c/MjY1MDkyOTk0NzE1",
"https://classroom.google.com/u/4/c/MjY1MDkzODE0NzU3",
"https://classroom.google.com/u/4/c/MjY1MTMxNjgwNjUz",
"https://classroom.google.com/u/4/c/MjY1MDk0MDk5OTg1",
"https://classroom.google.com/u/4/c/MjY1MTA4MzQ4ODk3",
"https://classroom.google.com/u/4/c/MjY0MTQ0NzE1OTY5",
"https://classroom.google.com/u/4/c/MjY0MTUxMDkxMzE0"
]

function Segunda(){

    var aulas_horarios = [
        [aulas[6], horariosHoras[0], horariosMinutos[1]],
        [aulas[4], horariosHoras[1], horariosMinutos[0]],
        [aulas[10], horariosHoras[1], horariosMinutos[3]],
        [aulas[11], horariosHoras[2], horariosMinutos[3]],
        [aulas[3], horariosHoras[3], horariosMinutos[1]],
        [aulas[7], horariosHoras[4], horariosMinutos[1]]
    ]

    for (i = 0; i < aulas_horarios.length; i++){
        if(horas == aulas_horarios[i][1] && minutos == aulas_horarios[i][2]){
            document.getElementById('link').innerHTML = aulas_horarios[i][0];
        }
    }
}

function Terca(){

    var aulas_horarios = [
        [aulas[8], horariosHoras[0], horariosMinutos[1]],
        [aulas[12], horariosHoras[1], horariosMinutos[0]],
        [aulas[4], horariosHoras[1], horariosMinutos[3]],
        [aulas[15], horariosHoras[2], horariosMinutos[3]],
        [aulas[7], horariosHoras[3], horariosMinutos[1]],
        [aulas[4], horariosHoras[4], horariosMinutos[1]]
    ]

    for (i = 0; i < aulas_horarios.length; i++){
        if(horas == aulas_horarios[i][1] && minutos == aulas_horarios[i][2]){
            document.getElementById('link').innerHTML = aulas_horarios[i][0];
        }
    }

}

function Quarta(){

    var aulas_horarios = [
        [aulas[8], horariosHoras[0], horariosMinutos[1]],
        [aulas[14], horariosHoras[1], horariosMinutos[0]],
        [aulas[3], horariosHoras[1], horariosMinutos[3]],
        [aulas[9], horariosHoras[2], horariosMinutos[3]],
        [aulas[5], horariosHoras[3], horariosMinutos[1]],
        [aulas[13], horariosHoras[4], horariosMinutos[1]]
    ]

    for (i = 0; i < aulas_horarios.length; i++){
        if(horas == aulas_horarios[i][1] && minutos == aulas_horarios[i][2]){
            document.getElementById('link').innerHTML = aulas_horarios[i][0];
        }
    }

}

function Quinta(){

    var aulas_horarios = [
        [aulas[2], horariosHoras[0], horariosMinutos[1]],
        [aulas[5], horariosHoras[1], horariosMinutos[0]],
        [aulas[15], horariosHoras[1], horariosMinutos[3]],
        [aulas[10], horariosHoras[2], horariosMinutos[3]],
        [aulas[13], horariosHoras[3], horariosMinutos[1]],
        [aulas[13], horariosHoras[4], horariosMinutos[1]]
    ]

    for (i = 0; i < aulas_horarios.length; i++){
        if(horas == aulas_horarios[i][1] && minutos == aulas_horarios[i][2]){
            document.getElementById('link').innerHTML = aulas_horarios[i][0];
        }
    }
    
}

function Sexta(){

    var aulas_horarios = [
        [aulas[9], horariosHoras[0], horariosMinutos[1]],
        [aulas[14], horariosHoras[1], horariosMinutos[0]],
        [aulas[10], horariosHoras[1], horariosMinutos[3]],
        [aulas[4], horariosHoras[2], horariosMinutos[3]],
        [aulas[13], horariosHoras[3], horariosMinutos[1]],
        [aulas[4], horariosHoras[4], horariosMinutos[1]]
    ]

    for (i = 0; i < aulas_horarios.length; i++){
        if(horas == aulas_horarios[i][1] && minutos == aulas_horarios[i][2]){
            document.getElementById('link').innerHTML = aulas_horarios[i][0];
        }
    }

}

function fimDeSemana(){

    document.getElementById('link').innerHTML = "É fim de semana!";

}