// aita holo card theke product er price total price e add korar jonno function likhsi
function priceAdd(price) {
    const priceAdd = document.getElementById('Total-price');
    const prices = parseFloat(priceAdd.innerText);
    const priceNow =price;
    priceAdd.innerText = prices + priceNow;
    totalPrice = priceAdd.innerText;
    checkActivation();
    return priceAdd.innerText;
    
    
}


// aita holo card er name  iteam name e add korar jonno function likhsi
function items(name){
    const addItem = document.getElementById('items-name');
    const count = addItem.childElementCount;
    const h4 = document.createElement('h4');
    h4.classList.add('my-6');
    h4.innerHTML= `${count}. ${name}`;
    addItem.appendChild(h4);
}

function addTen(price) {
    totalPrice = price;
    totalPriceTag.innerText = totalPrice;
    checkActivation();
}

// agula holo button er id gula

const coupon = document.getElementById('coupon');
const activateButton = document.getElementById("Apply");
const payBtn = document.getElementById("pay");

var totalPrice = 0;


// coupon code apply korar jonno function likha hosse 

document.getElementById('Apply').addEventListener('click', function() {
    const couponCode = coupon.value;
    if (couponCode == "SELL20") {
      const discount = document.getElementById('Discount');
        const discountPrice = parseFloat(discount.innerText);
        const discountNow = (totalPrice * 0.2).toFixed(2);
        discount.innerText = discountNow;   
        const totalPriceTagS = document.getElementById('Total-price-now');
        const totalPriceTag = parseFloat(totalPriceTagS.innerText);
        const priceNow = totalPrice - discountNow;
        totalPriceTagS.innerText = priceNow;


    }
    else {
        alert("Invalid Cupon Code");
    }
    coupon.value = "";
});

// ai ta apply button active er jonno function likhsi

function checkActivation() {
    if (totalPrice >= 200) {
        activateButton.removeAttribute("disabled");
    }
    else if(totalPrice >=1) {
        payBtn.removeAttribute("disabled");
    }
    else {
        activateButton.setAttribute("disabled", true);
        payBtn.setAttribute("disabled", true);
    }
}
