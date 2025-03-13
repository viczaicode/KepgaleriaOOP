export default class Kep {


    #src;
    #cim;
    #index;
    constructor(src, cim,index, szuloElem) {
        this.#src = src;
        this.#cim = cim;
        this.#index = index;
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.kepElem = document.querySelector(".kep:last-child")
        this.kepElem.addEventListener("click", ()=> {
            console.log(this.#index);
            

            const e = new CustomEvent("kivalaszt", {detail:this.#index})
            window.dispatchEvent(e)
        })
    }

    //setcim(ujcim) {
    //    this.#cim = ujcim
    //}

    //getcim() {
    //    return this.#cim
    //}

    //getSrc() {
    //    return this.#src;
    //}


    megjelenit() {
        let html = `         
        <div class="kep">
            <img src="${this.#src}" alt="${this.#cim}">
        </div>`
        this.szuloElem.insertAdjacentHTML("beforeend", html)
    }

}