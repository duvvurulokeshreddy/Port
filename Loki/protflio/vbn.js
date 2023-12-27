// Add this to a file named "main.js" and include it in your HTML file

prompt(Enter )
    console.log("Enter the Name");


document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// let button =document.getElementById("button")
// button.addEventListener("click" ,()=>{
//     let p=document.getElementById("demo")
//     p.innerHTML="😊"
// })



