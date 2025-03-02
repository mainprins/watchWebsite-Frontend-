
    //  Adding the rating functionality ...

    function rate(e){
    if (e.classList.contains('checked')) {
    
        e.classList.remove('checked');
    } else {
        
        e.classList.add('checked');
    }
    }

  
 // Maintaining Navigation to other pages 

 function home() {
    window.location.href = "home.html";
    localStorage.clear();
    }
    function blog() {
    window.location.href = "blog.html";
    localStorage.clear();
    }
    function research() {
    window.location.href = "research.html";
    localStorage.clear();
        }
    function product() {
    window.location.href = "product.html";
    localStorage.clear();
            }
    function about() {
    window.location.href = "aboutUs.html";
    localStorage.clear();
            }
  

    // Maintaining the SEO(Search Engine Optimization) ...

    function searchProducts() {
    const searchProducts = document.getElementById('searchProducts').value.toLowerCase();

    const products = document.querySelectorAll('.product');
    let boolean = false;

    products.forEach(product => {
        const productName = product.querySelector('.nameSection').textContent.toLowerCase();
        
        if (productName.includes(searchProducts)) {
            product.style.display = 'flex';
            boolean = true;
        } else {
            product.style.display = 'none';
        }
    });

    const productListElement = document.getElementById('productsList');

    if (!boolean && searchProducts !== "") {
        const noResults = document.getElementById('noResults');
        if (!noResults) {
            const message = document.createElement('div');
            message.id = 'noResults';
            message.textContent = "No Results Found.";
            message.style.color = 'white';
            message.style.textAlign = 'center';
            productListElement.appendChild(message);
        }
    } else {

        const noResults = document.getElementById('noResults');
        if (noResults) {
            noResults.remove();
        }
    }
    }

    // Handling the logic when the window gets loaded

    window.onload = function() {

    var data = localStorage.getItem('data');


    if (data) {
        document.getElementById('searchProducts').value = data;
        var eventName = new Event('keyup');
        document.getElementById('searchProducts').dispatchEvent(eventName);
    }

    const Name = localStorage.getItem('name');
    if (Name) {
        
        const elementToFocus = document.getElementById(Name.slice(0,-3));

        if (elementToFocus) {
            elementToFocus.focus();
        }

    }
    const Namee = localStorage.getItem('namee');
    if (Namee) {
        
        const elementToFocuss = document.getElementById(Namee.slice(0,-1));

        if (elementToFocuss) {
            elementToFocuss.focus();
        }

    }
    }

    // Refreshing the page when clicked on logo ...

    function refresh() {
    localStorage.clear();
    location.reload();
    document.getElementById('searchProducts').value = null;

    }

    // Responsive Navigation 
    let i = 0;

    function clickedBar(button) {

    if (i == 0) {
        document.getElementById('bar').style.display = "none";
        document.getElementById('cross').style.display = "block";    
        document.getElementById('menus').classList.add('mobileMenus');  
        document.getElementById('menus').removeAttribute('id'); 
        i = 1;
    } else {
        document.getElementById('cross').style.display = "none";
        document.getElementById('bar').style.display = "block"; 
        document.getElementsByClassName('mobileMenus')[0].id = "menus";
        document.getElementsByClassName('mobileMenus')[0].classList.remove('mobileMenus');   
        i = 0;
    }
    }

    // Implementing Logic For Your Cart Section....

    function add(element) {
    const targetImgSrc = element.parentElement.getElementsByTagName('img')[0].src; 
    const list = document.getElementById('list'); 


    const alreadyAdded = Array.from(list.getElementsByTagName('img')).some(img => img.src === targetImgSrc);

    if (alreadyAdded) {
        alert("This element is already added.");
    } else {
        
        const newDiv = document.createElement("div");
        newDiv.className = "cartElem";

        
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.min = "0";
        quantityInput.value = "1";
        quantityInput.title = "Quantity Selector";

        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            newDiv.remove();
            noItems(); 
        });


        const Image = document.createElement("img");
        Image.src = targetImgSrc;

        
        newDiv.appendChild(Image);
        newDiv.appendChild(quantityInput);
        newDiv.appendChild(removeButton);


        list.appendChild(newDiv);
    }

    noItems(); 
    }


    // Implementing logic for the condition of not having any items in the cart.

    function noItems(){
    if (document.getElementById('list').children.length > 1) {
        document.getElementById('noItems').style.display = 'none';
    } else {
        document.getElementById('noItems').style.display = 'flex';
    }
    }


    function purchase() {

    }

    // Writing the code for filtering functionality

    var allChecker = document.getElementById('all');
    var smartChecker = document.getElementById('smart');
    var luxuryChecker = document.getElementById('luxury');
    var normalChecker = document.getElementById('normal');


    List = [allChecker,smartChecker,luxuryChecker,normalChecker];

    document.addEventListener('click', function(event) {

        const clickedOutsideElements = !List.some(elem => elem.contains(event.target));

        if (clickedOutsideElements) {
            
            const products = document.querySelectorAll('.product');
            products.forEach(product =>{
                product.style.display = 'flex';
            });
        }
    });


    allChecker.addEventListener('focus',()=>{
    const products = document.querySelectorAll('.product');
    products.forEach(product =>{
        if (product.classList.contains('all')){
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    })
    });

    luxuryChecker.addEventListener('focus',()=>{
    const products = document.querySelectorAll('.product');
    products.forEach(product =>{
        if (product.classList.contains('luxury')){
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    })
    });

    normalChecker.addEventListener('focus',()=>{
    const products = document.querySelectorAll('.product');
    products.forEach(product =>{
        if (product.classList.contains('normal')){
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    })
    });

    smartChecker.addEventListener('focus',()=>{
    const products = document.querySelectorAll('.product');
    products.forEach(product =>{
        if (product.classList.contains('smart')){
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    })
    });

 // Handling the logic of navigation to categories in home page


var normallBtn = document.getElementById('normall');
var smarttBtn = document.getElementById('smartt');
var luxuryyBtn = document.getElementById('luxuryy');


myyList = [normallBtn,smarttBtn,luxuryyBtn];

myyList.forEach(element => {
    element.addEventListener('click', function() {

        localStorage.setItem('namee', element.id);

        window.location.href = 'product.html'; 
    });
});


