import Kep from "./Kep.js";
import Galeria from "./Galeria.js";
import KiemeltKep from "./KiemeltKep.js";
import { KEPEKLISTA } from "./adat.js";
import NagyKep from "./NagyKep.js";


let galeriaELem = document.getElementsByClassName("galeria")[0]

new Galeria(KEPEKLISTA, galeriaELem)
new NagyKep(KEPEKLISTA);



/*let aktIndex = 0
let nagykepELem = document.getElementsByClassName("kiemeltkep")[0]
const NAGYKEP = new KiemeltKep(KEPEKLISTA[aktIndex].src, KEPEKLISTA[aktIndex].cim, nagykepELem); 


let balElem = document.querySelector('.bal');
let jobbElem = document.querySelector('.jobb');
balElem.addEventListener('click', function() {
    aktIndex--;
    aktIndex<0? (aktIndex = KEPEKLISTA.length-1) : (aktIndex = aktIndex);
    const NAGYKEP = new KiemeltKep(KEPEKLISTA[aktIndex].src, KEPEKLISTA[aktIndex].cim, nagykepELem); 
    
});

jobbElem.addEventListener('click', function() {
    aktIndex++;
    aktIndex > KEPEKLISTA.length -1 ? (aktIndex = 0) : (aktIndex = aktIndex)
    const NAGYKEP = new KiemeltKep(KEPEKLISTA[aktIndex].src, KEPEKLISTA[aktIndex].cim, nagykepELem); 
}); */