function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
};

const btnSi = document.getElementById("btn_si");
const btnNo = document.getElementById("btn_no");
const divModosexo = document.getElementsClassNAme("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabia que dirias qe SI. Casemonos ya y tengamos hijos. TE AMO!!! <3')

    divModosexo.style.display = 'block';
    const cancion = new Audio ('img\\modo_hot.mp3');
    cancion.play();
});