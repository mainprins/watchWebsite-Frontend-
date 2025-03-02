const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('content');

toggleButton.addEventListener('click', () => {
  if (content.style.display === 'none') {
    content.style.display = 'block';
    toggleButton.textContent = 'Hide details';
  } else {
    content.style.display = 'none';
    toggleButton.textContent = 'Show details ';
  }
});

 
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


// Refreshing the page when clicked on logo ...

function refresh() {
  localStorage.clear();
  location.reload();
}