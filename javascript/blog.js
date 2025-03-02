
 
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
  

// Refreshing the page when clicked on logo ...

function refresh() {
    localStorage.clear();
    location.reload();
}

// Creating Clickable Articles

function clickedonArticle(element) {
    document.getElementById('articles').style.display = "none";
    document.getElementById('singlearticle').style.display = "flex";

    var elementId = element.id;
    console.log(elementId);

    const articleIds = ['firstarticle', 'secondarticle', 'thirdarticle', 'fourtharticle', 'fiftharticle'];


    articleIds.forEach((id) => {
        if (id === elementId + 'article') {
            document.getElementById(id).style.display = "flex"; 
        } else {
            document.getElementById(id).style.display = "none"; 
        }
    });
}

// Creating Related Article Logic

function showArticle(articleId) {

    const articles = document.querySelectorAll('#singlearticle > article');
    articles.forEach(article => {
        article.style.display = 'none';
    });

    
    document.getElementById(articleId).style.display = 'flex';
}

function positiveCase() {
    showArticle('secondarticle');
}

function howCase() {
    showArticle('fourtharticle');
}

function negativeCase() {
    showArticle('thirdarticle');
}

function aboutCase() {
    showArticle('firstarticle');
}

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
