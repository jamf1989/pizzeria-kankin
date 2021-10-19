//let animado = document.querySelectorAll(".animate");

//function mostrarScroll() {
//    let scrollTop = document.documentElement.scrollTop;
//    for (let i=0; i < animado.length; i++) {
//        let alturaAnimado = animado[i].offsetTop;
//        if (alturaAnimado < scrollTop) {
//            animado[i].style.opacity = 1;
//            animado[i].classList.add("mostrar");
//
//        }
//    }
//}

//window.addEventListener('scroll', mostrarScroll);

//window.addEventListener('scroll', function(){
//    let animacion = document.querySelectorAll('.animacion');
//    for(let i = 0; i - animacion.length; i++){
//        let altura = window.innerHeight/1.3;
//        let distancia = animacion[i].getBoundingClientRect().top;
//        animacion[i].classList.add('transform_up');
//        if(distancia <= altura){
//            animacion[i].classList.add('mostrarOvni');
//        }
//        else {
//            animacion[i].classList.remove('mostrarOvni');
//        }
//    }
//}) 

window.addEventListener('scroll', function(){
    
    let elemento = document.querySelectorAll('.animacion');
    
    for(i = 0; i < elemento.length; i++){
        let altura = window.innerHeight/1.3;
        let distancia = elemento[i].getBoundingClientRect().top;
        
        elemento[i].classList.add('transform_up');
        if(distancia <= altura){
            elemento[i].classList.add('mostrar');
        } else {
            elemento[i].classList.remove('mostrar')
        }
    }
})

window.addEventListener('scroll', function(){

    function fade(direction){
        let pizza = document.querySelectorAll('.move-'+direction);
        for(i = 0; i < pizza.length; i++){
            let altura = window.innerHeight/3.5;
            console.log(altura);
            let distancia = pizza[i].getBoundingClientRect().top;
            pizza[i].classList.add('pizza-'+direction);
            if(distancia <= altura){
                pizza[i].classList.add('mostrar');
            } else {
                pizza[i].classList.remove('mostrar')
            }
        }
    }
    fade('right')
    fade('left')
    
})