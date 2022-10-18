let btn = document.querySelector('button');

function play(){

console.log("Let's Go!!!")
let numeroCelle;
const numeroBombe = 16;
let arrayBombe = [];
let score = 0;
let campo = document.getElementById('campo');
let griglia = document.createElement('div');
let livello = document.getElementById('livelli').value;
campo.innerHTML= '';
switch(livello){
    case '1':
        numeroCelle = 100;
        break;
    case '2':
        numeroCelle = 81;
        break;
    case '3':
        numeroCelle = 49;
    break;

}
    while (arrayBombe.length < numeroBombe){
    let bomba = randomNumber(1, numeroCelle);
    if(!arrayBombe.includes(bomba)){
        arrayBombe.push(bomba);
    }
}
let maxAttempt = numeroCelle - numeroBombe

console.log(arrayBombe)
let numericlick = [];
function GeneraCelle(nCelle){
    let Nlato = Math.sqrt(numeroCelle)
    const cella = document.createElement('div');
    cella.classList.add('box');
    cella.style.width = `calc(100% / ${Nlato})`
    cella.style.height = `calc(100% / ${Nlato})`
    cella.innerHTML = `
    <p>${nCelle}</p>
    `;
  
    cella.addEventListener('click', listener);
        numericlick.push(parseInt(cella.innerText));
        console.log(numericlick)
        return cella;

}

function listener(){
    console.log(this.innerText)
    if(!arrayBombe.includes(parseInt(this.innerText))){
        this.classList.add('verde');
        true;
        score ++


    }else{
        this.classList.add('bomba')
        console.log('bomba')
        this.removeEventListener('click', listener)
        false;
        endGame();
        
    }
    console.log(score)

}
function GeneraGriglia(){
    griglia.classList.add('griglia');
    for(let x = 1; x <= numeroCelle; x++){
        let cella = GeneraCelle(x);
        griglia.append(cella);
    }
 campo.append(griglia)
}
let risultato = document.getElementById('risultato')
GeneraGriglia()
function endGame(){
    const squares = document.querySelectorAll('.box')
    console.log(squares)
    for(let i = 0 ; i < numeroCelle; i++){
        squares[i].removeEventListener('click', listener)
    }
    if(score == maxAttempt){
        risultato.innerText = `
        Hai vinto !!!!`
    }else{
        console.log('Hai perso il numer odi tentativi è stato x')
        risultato.innerText = `
        Hai perso , il numero di tentativi è stato : ${score}`
    }
}
}

btn.addEventListener('click', play);