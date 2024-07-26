document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('mobile-menu-active');
    })

    //
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    let currentIndex = 0;
    const maxIndex = carouselItems.length - 1;

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex;
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const carouselInner = document.querySelector('.carousel-inner');
        const offset = -currentIndex * 100 + '%';
        carouselInner.style.transform = `translateX(${offset})`;
    }
})

function initMap() {
    const torreQuadrata = {lat: 19.393124, lng: -99.239168}; 

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: torreQuadrata});
        
    var marker = new google.maps.Marker({position: torreQuadrata, map: map});
}

document.getElementById('formularioPrestamo').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const monto = document.getElementById('monto').value;
    const plazos = document.getElementById('plazos').value;
    
    const pago1 = (monto / plazos) + (monto * 0.0198 / 2)
    const pago2 = (monto / plazos) + (monto * 0.0298 / 2)
    const pago3 = (monto / plazos) + (monto * 0.0398 / 2)

    let result1 = document.getElementById('one')
    result1.innerHTML = `
        <p><strong>$${pago1.toFixed(2)}</strong></p>
    `;
    
    let result2 = document.getElementById('two')
    result2.innerHTML = `
        <p><strong>$${pago2.toFixed(2)}</strong></p>
    `;

    let result3 = document.getElementById('three')
    result3.innerHTML = `
        <p><strong>$${pago3.toFixed(2)}</strong></p>
    `;
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}