'use strict'

//nav declarations Dom
const overlay = document.querySelector('.overlay');
const imageMenu = document.querySelector('.image-menu');
const navBtnWrapper = document.querySelector('.nav_btn_wrapper');

//close Btn
const closeBtnNav = document.querySelector('.closeBtnNav'); 




function hideNav(){
    navBtnWrapper.style.transform = 'translateX(-200%)';
    overlay.style.display = 'none';
}

overlay.addEventListener('click',hideNav)
closeBtnNav.addEventListener('click',hideNav)

imageMenu.addEventListener('click',function(){
    navBtnWrapper.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
})





////////////////////////////////////// Addd Minus Btn

const number_add_cart = document.querySelector('#number_add_cart');
const addBtn = document.querySelector('#add_btn');
const minusBtn = document.querySelector('#minus_btn');

let numberHolder = 0;

addBtn.addEventListener('click',function(){
    numberHolder += 1;
    
    number_add_cart.textContent = numberHolder;
})

minusBtn.addEventListener('click',function(){

    if(numberHolder){
        numberHolder -= 1;

        number_add_cart.textContent = numberHolder;
    }
})

////////////////////////////////////// cart notification checkout

const imageCartWrapper = document.querySelector('#image_cart_wrapper');
const cart_items_wrapper = document.querySelector('.cart_items_wrapper');

imageCartWrapper.addEventListener('click',function(){

    cart_items_wrapper.classList.toggle('cart_show_1');

})






//add to cart btn
const addToCartBtn = document.querySelector('#add_to_cart_btn');

const btn_add_minus_wrapper = document.querySelector('.btn_add_minus_wrapper');

//notif number
const number_items_cart = document.querySelector('.number_items_cart');


// items storage
const items = [];

//checkoutBtn
const checkoutBtn = document.querySelector('#checkoutBtn');

/////////items array wrapper
let items_array = document.querySelector('#items_array')

addToCartBtn.addEventListener('click',function(){

    if(numberHolder){
        items.push(numberHolder);
    }else{
        btn_add_minus_wrapper.style.border = '1px solid red';

        setTimeout(function(){
            btn_add_minus_wrapper.style.border = 'none';
        },2000)
    }
    
    // console.log(items);
    // console.log(items.length);


    // console.log("This",items.length)

    if(items.length){

        items_array.innerHTML = "";
    
        for(let i = 0 ; i < items.length ; i++ ){

            
            items_array.innerHTML +=   `<div class='items_wrapper'>
                                            <img src='images/image-product-1-thumbnail.jpg' alt='image'>
    
                                            <div class='items_description_wrapper'>
                                            <p>Fall Limited Edition Sneakers</p>
                                            <p>$125 x <span>${items[i]}</span> <span class='total_price'>$${125 * items[i]}</span></p>
                                            </div>
                                            <img src='images/icon-delete.svg' alt='Delete' id='delete_btn'> 
                                        </div>
                                        <br>`;
            
        }
    }
    
    if(items.length){
                
        number_items_cart.textContent = items.length;
        
        number_items_cart.style.display = 'block';
        
        checkoutBtn.style.display = 'block'
    }


    function autoRun(){
        const delete_btn = document.querySelectorAll('#delete_btn');

        delete_btn.forEach(function(btn,btnIndex){

            btn.addEventListener('click',function(){

                // alert('sa')

                console.log(items)
                items.splice(btnIndex,1)
                console.log(items)
                console.log(`this is length ${items.length}`)

                items_array.innerHTML = "";
                
                for(let i = 0 ; i < items.length ; i++ ){

            
                    items_array.innerHTML +=   `<div class='items_wrapper'>
                                                    <img src='images/image-product-1-thumbnail.jpg' alt='image'>
            
                                                    <div class='items_description_wrapper'>
                                                    <p>Fall Limited Edition Sneakers</p>
                                                    <p>$125 x <span>${items[i]}</span> <span class='total_price'>$${125 * items[i]}</span></p>
                                                    </div>
                                                    <img src='images/icon-delete.svg' alt='Delete' id='delete_btn'> 
                                                </div>
                                                <br>`;
    
                    
                }


                if(items.length){
                
                                number_items_cart.textContent = items.length;
                                
                            }



                if(!items.length){
                                        items_array.innerHTML +=   `<div class='no_items_wrapper'>
                                                                            <p>Your cart is empty</p>
                                                                        </div>`;
                                
                                        number_items_cart.style.display = 'none';
                                        checkoutBtn.style.display = 'none'
                                    }
                
                autoRun();
            })
        })
    }
    autoRun();
}) 


    if(!items.length){
        items_array.innerHTML +=   `<div class='no_items_wrapper'>
                                            <p>Your cart is empty</p>
                                        </div>`;

        checkoutBtn.style.display = 'none'
    }






    



