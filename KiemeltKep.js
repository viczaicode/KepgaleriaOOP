export default class KiemeltKep {


    #src
    #cim
    constructor(src, cim, szuloElem) {
        this.#src = src;
        this.#cim = cim;
        this.szuloElem = szuloElem;
        this.megjelenit();
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
            <h3>${this.#cim}</h3>
            <img src="${this.#src}" alt="${this.#cim}">
        </div>`
        this.szuloElem.innerHTML = html;
    }

}