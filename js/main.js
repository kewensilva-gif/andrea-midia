const teclas = document.querySelectorAll('.tecla');
const audio = document.querySelectorAll('.audio');

// usar com click
teclas.forEach((tecla, index) => {
        tecla.onclick = function(){
            if(tecla.classList.toggle('tocando')){
                tecla.classList.add('ativa')
                audio[index].play();
            }
            else {
                tecla.classList.remove('ativa')
                audio[index].pause();
            }
        }
  
})

// Uso de teclas para comandar o teclado
document.body.onkeydown = (event) => {
    teclas.forEach((tecla, index) => {
        if(event.code === tecla.value){
            if(tecla.classList.toggle('tocando')){
                tecla.classList.add('ativa')
                audio[index].play();
            }
            else {
                tecla.classList.remove('ativa')
                audio[index].pause();
            }
        }
    }) 
}


