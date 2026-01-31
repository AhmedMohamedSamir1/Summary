const searchInput = document.querySelector('.input-search');
const searchOverlay = document.querySelector('.search-overlay');
const searchBtn = document.querySelector('.btn-search')

// Show overlay when input is focused
searchInput.addEventListener("focus", function () {
    searchOverlay.style.display = 'block';

});


searchInput.addEventListener("keydown", function (event) {

    if (event.key == "Escape") { // Use "Escape" instead of "Esc"
        searchOverlay.style.display = 'none';
        searchInput.blur();
    }

    if (event.key === "Enter") {
        const form = event.target.closest('form');
        if (form) {

            //const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
            //form.dispatchEvent(submitEvent); // Trigger the submit event
            
            form.submit();  // this makes browser does not trigger the submit event, Directly submits the form
        }
        searchInput.blur();
    }

});

// Hide overlay when input loses focus
searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        searchOverlay.style.display = 'none';
    }, 200);
});


searchBtn.addEventListener("click", function (event) {

    const form = event.target.closest('form');
    if (form) {
        //const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        //form.dispatchEvent(submitEvent); 
        form.submit(); 
    }
    searchInput.blur();

})



