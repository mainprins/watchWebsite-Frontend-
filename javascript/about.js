const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const feedback = document.getElementById("feedback").value;

    let mailtoLink = `mailto:np05cp4a240247@iic.edu.np?subject=Message from ${firstname} ${lastname}&body=
    Name: ${firstname} ${lastname}%0A
    Email: ${email}%0A
    Mobile: ${mobile}%0A%0A
    Message:%0A${feedback}`;

    window.location.href = mailtoLink;

    form.reset();
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