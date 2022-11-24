function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
};

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModosexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabia que dirias qe SI. Casemonos ya y tengamos hijos. TE AMO!!! <3');

    divModosexo.style.display = 'block';
    const cancion = new Audio ('img\\img_modo_hot.mp3');
    cancion.play();
});

divModosexo.addEventListener('click', function(e) {
    const img = document.createElement("img");
    img.src = "https://i.pinimg.com/550x/ca/98/f4/ca98f47f3bf1cf0c28126ed02a14784d.jpg";
    divModosexo.appendChild(img);
}); 

botones = document.getElementsByTagName("button");
console.log(botones);

window.addEventListener('beforeunload', (event) =>{
    event.preventDefault();
    event.returnValue = "";
});
