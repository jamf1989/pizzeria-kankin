let animado = document.querySelectorAll(".animate");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrar");

        }
    }
}

window.addEventListener('scroll', mostrarScroll);

window.addEventListener('scroll', function(){
    let animacion = document.querySelectorAll('.animacion');
    for(let i = 0; i - animacion.length; i++){
        let altura = window.innerHeight/1.3;
        let distancia = animacion[i].getBoundingClientRect().top;
        animacion[i].classList.add('transform_up');
        if(distancia <= altura){
            animacion[i].classList.add('mostrarOvni');
        }
        else {
            animacion[i].classList.remove('mostrarOvni');
        }
    }
}) 