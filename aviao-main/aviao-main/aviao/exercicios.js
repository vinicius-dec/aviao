



let numero_de_passageiros_adultos= 3
let numero_de_passageiros_crianca= 2
let numero_total_de_passageiros= numero_de_passageiros_adultos+numero_de_passageiros_crianca


const classe= "executivo"
const destino= "Continente asiatico"

const norte= "Norte do brasil"
const sul= "Sul do brasil"
const asiatico= "Continente asiatico"
const europeu= "Continente europeu"
const africano= "Continente africano"

let norte_economica_adulto= 2500
let norte_economica_crianca= 1800

let norte_executiva_adulto= norte_economica_adulto + (norte_economica_adulto*20 )/100
let norte_executiva_crianca= norte_economica_crianca + (norte_economica_crianca*10 )/100

let sul_economica= 3000
let sul_executivo= 4000  

let asiatico_economica= 4600
let asiatico_executiva= 6000

let europeu_economica= 5800
let europeu_executivo= 7300

let africano_economica= 4200
let africano_executivo= 6900

let custo_economico_norte_adulto= numero_de_passageiros_adultos*norte_economica_adulto
let custo_economico_norte_crianca= numero_de_passageiros_crianca*norte_economica_crianca

let custo_total_norte_economica= custo_economico_norte_adulto+custo_economico_norte_crianca

let custo_executivo_norte_adulto= numero_de_passageiros_adultos*norte_executiva_adulto
let custo_executivo_norte_crianca= norte_executiva_crianca*numero_de_passageiros_crianca

let custo_total_norte_executivo=custo_executivo_norte_adulto+custo_executivo_norte_crianca

let custo_excutivo_sul= sul_executivo*numero_total_de_passageiros
let custo_economico_sul=sul_economica*numero_total_de_passageiros

let custo_excutivo_asicatico= asiatico_executiva*numero_total_de_passageiros
let custo_economica_asiatica= asiatico_economica*numero_total_de_passageiros

let custo_executivo_europeu= europeu_executivo*numero_total_de_passageiros
let custo_economico_europeu= europeu_economica*numero_total_de_passageiros

let custo_executivo_africano= africano_executivo*numero_total_de_passageiros
let custo_economico_africano= africano_economica*numero_total_de_passageiros

let custo_total = 0

if (destino==norte){
    if (classe=="executivo"){
        custo_total = custo_total_norte_executivo
   

    }
    else if(classe=="economico"){
        custo_total = custo_total_norte_economica
     
  
}

}
else if(destino==sul){
    if(classe=="executivo"){
        custo_total=custo_excutivo_sul
    
        
    }
    else if(classe=="economico"){
        custo_total=custo_economico_sul
      

    }
    
}
else if(destino==asiatico){
    if(classe=="executivo"){
        custo_total=custo_excutivo_asicatico
       

        
      

    }
    else if(classe=="economico"){
        custo_total=custo_economica_asiatica
     

    }
}
else if(destino==africano){
    if(classe=="executivo"){
        custo_total=custo_executivo_africano
      

    }
    else if(classe=="economica"){
        custo_total=custo_economico_africano
       

    }

}
else if(destino==europeu){
    if(classe=="executivo"){
        custo_total= custo_executivo_europeu
       
    }
    else if(classe=="economica"){
        custo_total=custo_economico_europeu
       
    }
}

console.log("*** O custo total do seu pacote é:")
console.log()
console.log("A Quantidade de Passageiros Adultos é:", numero_de_passageiros_adultos)
console.log()
console.log("A Quantidade de Passageiros Infantis é:",numero_de_passageiros_crianca)
console.log()
console.log("O destino escolhido é:",destino)
console.log()
console.log("A Classe do Seu Voo é:",classe)
console.log()
console.log("O custo total da viagem é:", custo_total)
console.log()
console.log("*** Fim do programa ***")