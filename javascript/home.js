
// Creating the functionality of the Slider ...

var watchNameElem = document.getElementById('watchName');
var watchDescElem = document.getElementById('watchdesc');
var bodyElem = document.getElementsByClassName('top')[0];
let names = ['Breitling','Omega','Rolex','Cartier'];
let watchDesc = ["Breitling watches can also be the better choice for you . It contains designs including polished cases , braceletes etc with sveral other components which can improve readability",
    "Omega watches can also be the better choice for you . If you want the beautiful design with added luxury you can use our shopping platform to buy it.",
    "Rolex watches can also be the better choic for you . If you want the luxurious essentiality in your watch then rolex watches can be best for you. You can easily get it to buy in our platform.",
    "Cartier watches can also be the better choice for you . We hava several cartier watchess with varietiess of features in it . You can easily buy it from product page."
];

// Scripting the previous and after button

function prevButton() {
    
    let currentname = watchNameElem.textContent;
    let currentDesc = watchDescElem.textContent;
     
    watchNameElem.textContent = names[0];
    var originalname3 = names[3];
    names[3] = currentname;
    names[0] = names[1];
    names[1] = names[2];
    names[2] = originalname3;

    watchDescElem.textContent = watchDesc[0];
    var originalDesc3 = watchDesc[3];
    watchDesc[3] = currentDesc;
    watchDesc[0] = watchDesc[1];
    watchDesc[1] = watchDesc[2];
    watchDesc[2] = originalDesc3;
    

    var style = window.getComputedStyle(bodyElem);
    var currentimage = style.backgroundImage;  
    var filePath = currentimage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

    let newimg = item1.src;

    bodyElem.style.backgroundImage = 'url(' + newimg + ')';
   
    var originalfour = item4.src;
    item4.src = filePath;
    item1.src = item2.src;
    item2.src = item3.src;
    item3.src = originalfour;
    
   
    
    
}
function afterButton() {
    
    let currentname = watchNameElem.textContent;
    let currentDesc = watchDescElem.textContent;
    
     
    watchNameElem.textContent = names[3];
    var originalname0 = names[0];
    names[0] = currentname;
    names[3] = names[2];
    names[2] = names[1];
    names[1] = originalname0;

    watchDescElem.textContent = watchDesc[3];
    var originalDesc0 = watchDesc[0];
    watchDesc[0] = currentDesc;
    watchDesc[3] = watchDesc[2];
    watchDesc[2] = watchDesc[1];
    watchDesc[1] = originalDesc0;
    
    var style = window.getComputedStyle(bodyElem);
    var currentimage = style.backgroundImage;  
    var filePath = currentimage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

    let newimg = item4.src;
    bodyElem.style.backgroundImage = 'url(' + newimg + ')';
   
    var originalone = item1.src;
    item1.src = filePath;
    item4.src = item3.src;
    item3.src = item2.src;
    item2.src = originalone;
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
  

// Maintaining the navigation to product.html when clicked on certain image in the slider and also handling the search engine optimization ...

function itemClicked(itemgiver) {
    var itemsrc = itemgiver.src;

    var itemNameWithExtension = itemsrc.split('/').pop();
    var itemName = itemNameWithExtension.split('.')[0].toLowerCase();
    localStorage.setItem('data', itemName);
    window.location.href = "product.html";
}

// Refreshing the page when clicked on logo ...

function refresh() {
    localStorage.clear();
    location.reload();
}

// Best seller horizontal slider ...

function prev(){
      document.getElementById('bestSellingItems').scrollLeft -= 100;
}

function next(){
    document.getElementById('bestSellingItems').scrollLeft += 100;
}

// Handling the logic of navigation to categories in home page

var normalBtn = document.getElementById('normalBtn');
var smartBtn = document.getElementById('smartBtn');
var luxuryBtn = document.getElementById('luxuryBtn');
var normallBtn = document.getElementById('normall');
var smarttBtn = document.getElementById('smartt');
var luxuryyBtn = document.getElementById('luxuryy');

myList = [normalBtn,smartBtn,luxuryBtn];
myyList = [normallBtn,smarttBtn,luxuryyBtn];

myList.forEach(element => {
    element.addEventListener('click', function() {

        localStorage.setItem('name', element.id);

        window.location.href = 'product.html'; 
    });
});

myyList.forEach(element => {
    element.addEventListener('click', function() {

        localStorage.setItem('namee', element.id);

        window.location.href = 'product.html'; 
    });
});

