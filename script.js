window.addEventListener('load',function() 
{
    setTimeout(function()
    {
        const prealoader = document.querySelector('.prealoader');
        prealoader.style.display ='none'
    },2000);
});

window.onscroll = function() {
    if (window.innerWidth > 768) { // Adjust the threshold as needed
        scrollFunction();
    }
};

function scrollFunction() {
    var letterN = document.getElementById("letterN");
    var letterS = document.getElementById("letterS");
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    var pageHeight = document.body.offsetHeight;
    var scrollThreshold = pageHeight * 0.79; // Adjust the value as needed

    if (scrollPos >= scrollThreshold) {
        letterN.innerHTML = "NUBI";
        letterN.classList.add("transformed");
        letterS.innerHTML = "SHAS";
        letterS.classList.add("transformed");

        // Center the transformed words vertically
        var transformedN = document.getElementById("transformedN");
        var transformedS = document.getElementById("transformedS");
        var windowHeight = window.innerHeight;
        var nHeight = transformedN.offsetHeight;
        var sHeight = transformedS.offsetHeight;

        transformedN.style.top = (windowHeight - nHeight) / 2 + "px";
        transformedS.style.top = (windowHeight - sHeight) / 2 + "px";
    } else {
        letterN.innerHTML = "N";
        letterN.classList.remove("transformed");
        letterS.innerHTML = "S";
        letterS.classList.remove("transformed");
    }
}










// Click event to redirect to another web link (replace 'https://example.com' with your desired URL)
document.getElementById('cube').addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/nubishas/'
  });
  



  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const customCursor = document.createElement("div");
    customCursor.classList.add("custom-cursor");
    container.appendChild(customCursor);

    document.addEventListener("mousemove", function (e) {
        customCursor.style.left = e.pageX + "px";
        customCursor.style.top = e.pageY + "px";
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const parallaxContainer = document.querySelector(".parallax-container");

    window.addEventListener("scroll", function () {
        let scrollPosition = window.pageYOffset;

        parallaxContainer.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    });
});
