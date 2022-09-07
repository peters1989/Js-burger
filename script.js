
/* header - изменяющий скорость цикл */
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


/* база данных */

const base = {
    plainBurger:{
        name: 'plainBurger',
        img:'images/product2.jpg',
        price:10000,
        amount: 0,
        get totalSum(){
            return this.price * this.amount
        }

    },
    freshBurger:{
        name:'freshBurger',
        img:'images/product1.jpg',
        price:20500,
        amount: 0,
        get totalSum(){
            return this.price * this. amount
        }
        
    },
    freshCombo:{
        name:'freshCombo',
        img:'images/product3.jpg',
        price:31900,
        amount: 0,
        get totalSum(){
            return this.price * this. amount
        }
    }

}




const buttonOrder = document.querySelector('.addCart'),
      burgerCheck = document.querySelector('.receipt'),
      burgerCheckList = document.querySelector('.receipt__window'),
      burgers = document.querySelectorAll('.main__product')
 let burgerPrice

      


buttonOrder.addEventListener('click', () => {
    burgerCheck.classList.add('active')
})

// burgers.forEach(btn => {
//     btn.addEventListener('click', function () {
//         // burgerSerch(this)
        
//     })
// })


// function burgerSerch(element) {
//     let burgerClass = element.closest('.main__product')
//     // console.log(burgerClass);
//     let burgerClassId = burgerClass.getAttribute('id')
    
//     base[burgerClassId].amount++
//     num()
//     burgerSum()
   
    

   
    
// }

function num() {
    

    for(const key in base){
        
        let burgerObj = base[key]
        let burgerName = document.querySelector(`#${burgerObj.name}`),
        burgerNum = burgerName.querySelector('.main__product-num')
        
        if(burgerObj.amount){
            
            burgerNum.innerHTML = burgerObj.amount
        }else{
            burgerNum.innerHTML =''
        }
    }
    
    
    
    
}

window.addEventListener('click', (e) => {

    if(e.target.classList.contains('main__product-btn')){
        const attr = e.target.getAttribute('data-symbol')
        const burger = e.target.closest('.main__product')
        const burgerId = burger.getAttribute('id')
        
        
          
            
            if(attr == '-') base[burgerId].amount--
            else if(attr == '+') base[burgerId].amount++


            num()
            burgerSum()
        
    }
})

function burgerSum() {
    
    for(const key in base){
        
        let burgerObj = base[key]
        let burgerName = document.querySelector(`#${burgerObj.name}`)
        burgerPrice = burgerName.querySelector('.main__product-price')
        if(burgerObj.amount){
            burgerPrice.innerHTML = burgerObj.totalSum
        }else{
            burgerPrice.innerHTML = ''
        }

        
    }
    burgerTotalPrice.innerHTML = `${totalSum()} Сум`
    
}

function totalSum() {
    let total = 0
    for(const key in base){
        total += base[key].totalSum
    }
    return total
}


const burgerTotalPrice = document.querySelector('.receipt__window-priceSum')



