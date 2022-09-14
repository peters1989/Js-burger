
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
        call: 600,
        get totalSum(){
            return this.price * this.amount
        },
        get totalCall(){
            return this.amount * this.call
        }

    },
    freshBurger:{
        name:'freshBurger',
        img:'images/product1.jpg',
        price:20500,
        amount: 0,
        call: 800,
        get totalSum(){
            return this.price * this. amount
        },
        get totalCall(){
            return this.amount * this.call
        }
        
    },
    freshCombo:{
        name:'freshCombo',
        img:'images/product3.jpg',
        price:31900,
        amount: 0,
        call: 900,
        get totalSum(){
            return this.price * this. amount
        },
        get totalCall(){
            return this.amount * this.call
        }
    }

}

const product = {
    doubleMayonnaise:{
      name:'doubleMayonnaise',
      price: 3000,
      call: 500
    },
    lettuce:{
        name:'lettuce',
        price: 2000,
        call: 100
    },
    cheese:{
        name:'cheese',
        price: 4000,
        call: 300
    }
    
}




const buttonOrder = document.querySelector('.addCart'),
      burgerCheck = document.querySelector('.receipt'),
      burgerCheckList = document.querySelector('.receipt__window-box'),
      burgers = document.querySelectorAll('.main__product')
    const buttonPay = document.querySelector('.receipt__window-btn')

 let burgerPrice

      
 

buttonOrder.addEventListener('click', () => {
    burgerCheck.classList.add('active')
})
buttonPay.addEventListener('click', () => {
    burgerCheck.classList.remove('active')
    location.reload()
})

// burgers.forEach(btn => {
//     btn.addEventListener('click', function () {
//         burgerSerch(this)
        
//     })
// })


// function burgerSerch(element) {
//     let burgerClass = element.closest('.main__product')
//     // console.log(burgerClass);
//     let burgerClassId = burgerClass.getAttribute('id')
    
//     base[burgerClassId].amount++
//     num()
//     burgerSum()
   
//     basket()

   
    
// }



function num() {
    

    for(const key in base){
        
        let burgerObj = base[key]
        let burgerName = document.querySelector(`#${burgerObj.name}`),
        burgerNum = burgerName.querySelector('.main__product-num'),
        burgerCall = burgerName.querySelector('.main__product-call span')
        
        if(burgerObj.amount){
            
            burgerNum.innerHTML = burgerObj.amount 
            burgerCall.innerHTML = burgerObj.totalCall

        }else{
            burgerNum.innerHTML = '0'
            burgerCall.innerHTML = '0 '
        }
    }
    
    
   
    
}


window.addEventListener('click', (e) => {
    if(e.target.classList.contains('main__product-checkbox')){
        const attr = e.target.getAttribute('data-extra')
        const burger = e.target.closest('.main__product'),
        burgerId = burger.getAttribute('id'),
        burgerPrice = burger.querySelector('.main__product-price span'),
        burgerCall = burger.querySelector('.main__product-call span'),
        check = e.target.checked

        
        if(check){
            if(attr == 'doubleMayonnaise' && base[burgerId].amount > 0){
                for(const key in product){
                    let productObjPrice = product[attr].price 
                    let productObjCall = product[attr].call
                    burgerPrice.innerHTML = ((productObjPrice )*( base[burgerId].amount)) + (base[burgerId].totalSum) 
                    burgerCall.innerHTML = (productObjCall * base[burgerId].amount) + (base[burgerId].totalCall)
                    
                    
                }
            }else if(attr == 'lettuce' && base[burgerId].amount > 0){
                for(const key in product){
                    let productObjPrice = product[attr].price 
                    let productObjCall = product[attr].call
                    burgerPrice.innerHTML = ((productObjPrice )*( base[burgerId].amount)) + (base[burgerId].totalSum)
                    burgerCall.innerHTML = (productObjCall * base[burgerId].amount) + (base[burgerId].totalCall)
                    
                    
                }
            }else if(attr == 'cheese' && base[burgerId].amount > 0){
                for(const key in product){
                    let productObjPrice = product[attr].price 
                    let productObjCall = product[attr].call
                    burgerPrice.innerHTML = ((productObjPrice )*( base[burgerId].amount)) + (base[burgerId].totalSum)
                    burgerCall.innerHTML = (productObjCall * base[burgerId].amount) + (base[burgerId].totalCall)
                    
                    
                }
            }

            
        }else{
            if(attr == 'doubleMayonnaise' && base[burgerId].amount > 0){
                for(const key in product){
                    let productObjPrice = product[attr].price 
                    let productObjCall = product[attr].call
                    burgerPrice.innerHTML = base[burgerId].totalSum - productObjPrice    
                    burgerCall.innerHTML = base[burgerId].totalCall - productObjCall  
                    
                    
                }
            }else if(attr == 'lettuce' && base[burgerId].amount > 0){
                for(const key in product){
                    let productObjPrice = product[attr].price 
                    let productObjCall = product[attr].call
                    burgerPrice.innerHTML = ((productObjPrice )*( base[burgerId].amount)) - (base[burgerId].totalSum)
                    burgerCall.innerHTML = (productObjCall * base[burgerId].amount) - (base[burgerId].totalCall)
                    
                    
                }
            }else if(attr == 'cheese' && base[burgerId].amount > 0){
                for(const key in product){
                    let productObjPrice = product[attr].price 
                    let productObjCall = product[attr].call
                    burgerPrice.innerHTML = ((productObjPrice )*( base[burgerId].amount)) - (base[burgerId].totalSum)
                    burgerCall.innerHTML = (productObjCall * base[burgerId].amount) - (base[burgerId].totalCall)
                    
                    
                }
            }
        }
   
        
    }
    
})


window.addEventListener('click', (e) => {

    if(e.target.classList.contains('main__product-btn')){
        const attr = e.target.getAttribute('data-symbol')
        const burger = e.target.closest('.main__product')
        const burgerId = burger.getAttribute('id')
        
        
          
            
            if(attr == '-' &&  base[burgerId].amount > 0) base[burgerId].amount--
            else if(attr == '+') base[burgerId].amount++


            num()
            burgerSum()
            basket()
            
            
        
    }
    
})

function burgerSum() {
    
    for(const key in base){
        
        let burgerObj = base[key]
        let burgerName = document.querySelector(`#${burgerObj.name}`)
        burgerPrice = burgerName.querySelector('.main__product-price span')
        if(burgerObj.amount){
            burgerPrice.innerHTML = burgerObj.totalSum
        }else{
            burgerPrice.innerHTML = '0 '
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


/* чек лист */
function basket() {
    const checkArray = []
    for(const key in base){

        let baseObj = base[key]
        let burgerId = document.querySelector(`#${baseObj.name}`)
        
        if(baseObj.amount){
            checkArray.push(baseObj)
        }
        check(baseObj)
    }
    burgerCheckList.innerHTML = ''
    checkArray.forEach(obj => {
        burgerCheckList.innerHTML += check(obj)
    })
}
basket()


function check(data) {
    let {name, price, amount, img} = data
    return`
    <div class="receipt__window-info">
                    <img src=${img} alt="" class="receipt__window-img">
                    <h3 class="receipt__window-tytle">${name}</h3>
                    <span class="receipt__window-quantiti">${amount} шт</span>
                    <span class="receipt__window-sum">${price} сум</span>
                </div>
    
    `
}





