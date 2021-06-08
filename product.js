
if (document.readyNowState == 'loading') {
    document.addEventListener('DOMContentLoaded', readyNow)
} else {
    readyNow()
}
var count =0;
function readyNow() {
    var removeItemsButtons = document.getElementsByClassName('btun-danger')
    for (var j = 0; j < removeItemsButtons.length; j++) {
        var button = removeItemsButtons[j]
        button.addEventListener('click', removeItems)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var j = 0; j < quantityInputs.length; j++) {
        var input = quantityInputs[j]
        input.addEventListener('change', quantityMove)
    }

    var addToCartButtons = document.getElementsByClassName('sale-item-button')
    for (var j = 0; j < addToCartButtons.length; j++) {

        var button = addToCartButtons[j]
        button.addEventListener('click', addToCartClicked)
        console.log(j);
    }

    document.getElementsByClassName('btun-purchase')[0].addEventListener('click', purchaseNow)
}

function purchaseNow() {
    var cartitms = document.getElementsByClassName('cart-itms')[0]
    console.log(cartitms.length)
    while (cartitms.hasChildNodes()) {
        cartitms.removeChild(cartitms.firstChild)
		
    }
	{alert("your amount is" +cartitms.length()+"Thank You For Using Our Service")
      }
    updateCartsum()
}

function removeItems(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartsum()
}

function quantityMove(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartsum()
}

function addToCartClicked(event) {
    count +=1;
    console.log(count);
    var button = event.target
    var saleItem = button.parentElement.parentElement
    var title = saleItem.getElementsByClassName('sale-item-title')[0].innerText
    var price = saleItem.getElementsByClassName('sale-item-price')[0].innerText
    var imageSrc = saleItem.getElementsByClassName('sale-item-image')[0].src
    getItemsToCart(title, price, imageSrc)
    updateCartsum()
}

function getItemsToCart(title, price, imageSrc) {
    var cartGetter = document.createElement('div')
    cartGetter.classList.add('cart-getter')
    var cartitms = document.getElementsByClassName('cart-itms')[0]
    var cartItemNames = cartitms.getElementsByClassName('cart-item-title')
    for (var j = 0; j < cartItemNames.length; j++) {
        if (cartItemNames[j].innerText == title) {
            alert('This item is alreadyNow added to the cart')
            return
        }
    }
    var cartGetterContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btun btun-danger" type="button">REMOVE</button>
        </div>`
    cartGetter.innerHTML = cartGetterContents
    cartitms.append(cartGetter)
    cartGetter.getElementsByClassName('btun-danger')[0].addEventListener('click', removeItems)
    cartGetter.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityMove)
}

function updateCartsum() {
    var cartItemContainer = document.getElementsByClassName('cart-itms')[0]
    var cartGetters = cartItemContainer.getElementsByClassName('cart-getter')
    var sum = 0
    for (var j = 0; j < cartGetters.length; j++) {
        var cartGetter = cartGetters[j]
        var priceElement = cartGetter.getElementsByClassName('cart-price')[0]
        var quantityElement = cartGetter.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        sum = sum + (price * quantity)
    }
    sum = Math.round(sum * 100) / 100
    document.getElementsByClassName('cart-sum-price')[0].innerText = '$' + sum
}

    