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

window.addEventListener('scroll', function(){
    
    let footer = document.querySelectorAll('.animacionFooter');
    
    for(i = 0; i < footer.length; i++){
        let altura = window.innerHeight/1.1;
        let distancia = footer[i].getBoundingClientRect().top;
        footer[i].classList.add('transform_up');
        if(distancia <= altura){
            footer[i].classList.add('mostrar');
        } else {
            footer[i].classList.remove('mostrar')
        }
    }
})


window.addEventListener('scroll', function(){

    function slide(direction){
        let ingrediente = document.querySelectorAll('.slide-'+direction);
        for(i = 0; i < ingrediente.length; i++){
            let altura = window.innerHeight/1.1;
            
            let distancia = ingrediente[i].getBoundingClientRect().top;
            ingrediente[i].classList.add('pizza-'+direction);
            if(distancia <= altura){
                ingrediente[i].classList.add('mostrar');
            } else {
                ingrediente[i].classList.remove('mostrar')
            }
        }
    }
    slide('right')
    slide('left')
    
})