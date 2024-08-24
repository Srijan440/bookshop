<script>
   let slideIndex = 0;
   const slides = document.querySelectorAll('.slide');
   const totalSlides = slides.length;

   // Function to update the slide position
   function updateSlider() {
       const slider = document.querySelector('.slider');
       slider.style.transform = `translateX(${-slideIndex * 100}%)`;
   }

   // Move to the next slide
   document.querySelector('.next').addEventListener('click', function() {
       slideIndex = (slideIndex + 1) % totalSlides;
       updateSlider();
   });

   // Move to the previous slide
   document.querySelector('.prev').addEventListener('click', function() {
       slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
       updateSlider();
   });

   // Initialize slider to first slide
   updateSlider();
</script>
