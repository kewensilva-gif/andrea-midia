const tecla = document.querySelectorAll('.tecla');
const audio = document.querySelectorAll('.audio');
let flag = false;
for(let i = 0; i < tecla.length; i++){
    tecla[i].onclick = function(){
        flag = !flag
        if(flag){
            audio[i].play();
        }
        else{
            audio[i].pause();
        }
    }

}

let teclasPress = {
    teclaQ: 'KeyQ',
    teclaW: 'KeyW',
    teclaE: 'KeyE',
    teclaA: 'KeyA',
    teclaS: 'KeyS',
    teclaD: 'KeyD',
    teclaZ: 'KeyZ',
    teclaX: 'KeyX',
    teclaC: 'KeyC',
}

// Insere a possibilidade de tocar com o teclado
document.body.onkeydown = (event)=>{
    if(event.code === teclasPress.teclaQ){
        audio[0].play();
        tecla[0].classList.add('ativa')
    }
    if(event.code === teclasPress.teclaW){
        audio[1].play();
        tecla[1].classList.add('ativa')
    }
    if(event.code === teclasPress.teclaE){
        audio[2].play();
        tecla[2].classList.add('ativa')
    }
    if(event.code === teclasPress.teclaA){
        audio[3].play();
        tecla[3].classList.add('ativa')
    }
    if(event.code === teclasPress.teclaS){
        audio[4].play();
        tecla[4].classList.add('ativa')
    }
    if(event.code === teclasPress.teclaD){
        audio[5].play();
        tecla[5].classList.add('ativa')
    }
    if(event.code === teclasPress.teclaZ){
        audio[6].play();
        tecla[6].classList.add('ativa')
    }
    if(event.code === teclasPress.teclaX){
        audio[7].play();
        tecla[7].classList.add('ativa')
    }
    if(event.code === teclasPress.teclaC){
        audio[8].play();
        tecla[8].classList.add('ativa')
    }
}

document.body.onkeyup = (event)=>{
    if(event.code === teclasPress.teclaQ){
        tecla[0].classList.remove('ativa')
    }
    if(event.code === teclasPress.teclaW){
        tecla[1].classList.remove('ativa')
    }
    if(event.code === teclasPress.teclaE){
        tecla[2].classList.remove('ativa')
    }
    if(event.code === teclasPress.teclaA){
        tecla[3].classList.remove('ativa')
    }
    if(event.code === teclasPress.teclaS){
        tecla[4].classList.remove('ativa')
    }
    if(event.code === teclasPress.teclaD){
        tecla[5].classList.remove('ativa')
    }
    if(event.code === teclasPress.teclaZ){
        tecla[6].classList.remove('ativa')
    }
    if(event.code === teclasPress.teclaX){
        tecla[7].classList.remove('ativa')
    }
    if(event.code === teclasPress.teclaC){
        tecla[8].classList.remove('ativa')
    }
}

