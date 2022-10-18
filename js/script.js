let btn = document.querySelector('button');

function play(){

console.log("Let's Go!!!")
let numeroCelle;
const numeroBombe = 16;
let arrayBombe = [];

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
console.log(arrayBombe)
let numericlick = [];
function GeneraCelle(nCelle){
    let Nlato = Math.sqrt(numeroCelle)
    let cella = document.createElement('div');
    cella.classList.add('box');
    cella.style.width = `calc(100% / ${Nlato})`
    cella.style.height = `calc(100% / ${Nlato})`
    cella.innerHTML = `
    <p>${nCelle}</p>
    `;
  
    cella.addEventListener('click', function(){
        console.log(cella.innerText)
        if(!arrayBombe.includes(parseInt(cella.innerText))){
            cella.classList.add('verde');

        }else{
            cella.classList.add('bomba')
            console.log('bomba')
        }
        numericlick.push(cella.innerText);
        console.log(numericlick)

    })
    return cella;
}

function GeneraGriglia(){
    griglia.classList.add('griglia');
    for(let x = 1; x <= numeroCelle; x++){
        let cella = GeneraCelle(x);
        griglia.append(cella);
    }
 campo.append(griglia)
}

GeneraGriglia()

}


btn.addEventListener('click', play);