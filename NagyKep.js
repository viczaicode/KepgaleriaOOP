import KiemeltKep from "./KiemeltKep.js";

export default class NagyKep {

    #aktIndex;
    constructor(lista) {
        this.lista = lista;
        this.#aktIndex = 0;
        this.nagykepELem = document.getElementsByClassName("kiemeltkep")[0];
        new KiemeltKep(this.lista[this.#aktIndex].src, this.lista[this.#aktIndex].cim, this.nagykepELem); 
        this.balElem = document.querySelector('.bal');
        this.jobbElem = document.querySelector('.jobb');
        this.esemenykezelo();
    }

    
    esemenykezelo() {
        this.balElem.addEventListener('click', ()=> {
            this.#aktIndex--;
            this.#aktIndex<0? (this.#aktIndex = this.lista.length-1) : (this.#aktIndex = this.#aktIndex);
            const NAGYKEP = new KiemeltKep(this.lista[this.#aktIndex].src, this.lista[this.#aktIndex].cim, this.nagykepELem); 
            
        });
    
        this.jobbElem.addEventListener('click', ()=> {
            this.#aktIndex++;
            this.#aktIndex > this.lista.length -1 ? (this.#aktIndex = 0) : (this.#aktIndex = this.#aktIndex)
            const NAGYKEP = new KiemeltKep(this.lista[this.#aktIndex].src, this.lista[this.#aktIndex].cim, this.nagykepELem); 
        });
    }
    


}