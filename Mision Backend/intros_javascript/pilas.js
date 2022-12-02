class Pila {

    constructor() {
        this.pila = {};
        this.contador = 0;
    }

    //Mete elemento al final de la pila
    push(element) {
        this.pila[this.contador] = element;
        this.contador++;
        return this.pila;
    }

    // Sacar el ultimo elemento y devolverlo
    pop() {
        this.contador--;
        const element = this.pila[this.contador];
        delete this.pila[this.contador];
        return element;
    }

    // Solo muestra el ultimo elemento
    peek () {
        this.pila[this.contador -1];
    }

    // Devuelve el tamano de la pila
    size() {
        return this.contador;
    }

    print() {
        console.log(this.pila);
    }

}

const miPila = new Pila();
console.log(miPila.size());
console.log(miPila.print());
console.log(miPila.push("La roca"));
miPila.print();
console.log(miPila.print(5));
console.log(miPila.pop());
console.log(miPila.size());