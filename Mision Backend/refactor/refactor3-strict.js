//'use strict'

var leti = 10;
console.log(leti);


// Esta variable no esta declarada y debe arrojar error
let variableNoDeclarada = 10;
console.log(variableNoDeclarada);

function funcionEstricta() {
    'use strict'

    var leti = 'Estricta'
    console.log(leti);
}

function funcionNoEstricta() { 
    var leti = 'No estricta'
    console.log(leti);
}