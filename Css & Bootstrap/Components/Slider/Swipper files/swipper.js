
window.addEventListener('load', function () {
    // Initialize a new Swiper instance targeting the element with class "mySwiper"
    const swiper = new Swiper(".clients-swipper",
        {
            slidesPerView: 4,   // Number of slides visible at once (default)
            slidesPerGroup: 1,  //  total slides a multiple of slidesPerGroup

            //spaceBetween: 20,     // Space in pixels between each slide
            loop: true,           // Enables continuous loop mode (slides repeat infinitely)

            navigation:  // Configuration for next and previous navigation arrows
            {
                nextEl: ".swiper-button-next",  // Element that triggers next slide
                prevEl: ".swiper-button-prev"   // Element that triggers previous slide
            },
            pagination:     // Configuration for pagination (dots)
            {
                el: ".swiper-pagination",   // The pagination container
                clickable: true              // Allows clicking on dots to navigate
            },
            autoplay: // Autoplay configuration
            {
                delay: 1000,            // Delay between transitions (in ms)
                disableOnInteraction: false  // Keep autoplay running even after user interacts
            },

            breakpoints: {
                1200: { slidesPerView: 4 },  // ≥1200px: show 5 slides
                992: { slidesPerView: 3 }, // ≥992px: show 4 slides
                768: { slidesPerView: 3 },  // ≥768px: show 3 slides
                576: { slidesPerView: 2 },  // ≥576px: show 2 slides
                0: { slidesPerView: 1, slidesPerGroup: 1 }  // <576px: show 1 slide
            }
        });
});




