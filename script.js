

const timer = document.querySelector('.header__timer-extra')

function time() {
    if(timer.innerHTML == 100){
        timer.innerHTML = 0
        // interval()
    }else{
        timer.innerHTML++
    }
    setTimeout((interval))
    // setTimeout((time),100)
}

function interval() {
    if(timer.innerHTML <= 50){
        setTimeout((time),100)
    }else if (timer.innerHTML <= 80 ){
        setTimeout((time),300)
    }else{setTimeout((time),700)}
}

time()