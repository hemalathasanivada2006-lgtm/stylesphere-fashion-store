// JavaScript Loaded
console.log("JavaScript Loaded");

// Cart Counter
let cartCount = 0;

// Add to Cart
function addToCart(button) {

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    let productName = button.parentElement.querySelector("h3").innerText;

    let cartItems = document.getElementById("cart-items");

    let li = document.createElement("li");

    li.textContent = productName;

    cartItems.appendChild(li);

    button.innerText = "Added ✓";
    button.disabled = true;
}

// Show / Hide Details
function toggleDetails(button){

    let details = button.nextElementSibling;

    if(details.style.display === "none"){
        details.style.display = "block";
        button.innerText = "Hide Details";
    }
    else{
        details.style.display = "none";
        button.innerText = "Show Details";
    }
}

// Search Products
function searchProducts(){

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(function(card){

        let name = card.querySelector("h3").innerText.toLowerCase();

        if(name.includes(input)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

}

// Contact Form Validation
let form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = form.querySelector("input[type='text']").value;
    let email = form.querySelector("input[type='email']").value;
    let message = form.querySelector("textarea").value;

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields.");
        return;
    }

    alert("Thank you! Your message has been sent.");
    form.reset();

});