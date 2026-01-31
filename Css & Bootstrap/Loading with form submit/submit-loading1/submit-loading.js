
const spinner = document.querySelector('.loading');

function showSpinner() {
    if (spinner) spinner.style.display = 'block';
}

function hideSpinner() {
    if (spinner) spinner.style.display = 'none';
}

// Show spinner on any form submission
document.addEventListener('submit', function (event) {
    if (event.target.tagName === 'FORM') {
        showSpinner();
    }
});

// Show spinner on internal link navigation (excluding anchor/hash links and external)
document.addEventListener('click', function (event) {
    const link = event.target.closest('a');
    if (link && link.href &&link.origin === location.origin &&link.getAttribute('href') &&
        !link.getAttribute('href').startsWith('#') && !link.hasAttribute('data-no-spinner'))
    {
        showSpinner();
    }
});

// Show spinner before page unload (catching full navigations like location.href)
window.addEventListener('beforeunload', function () {
    showSpinner();
});

// Intercept fetch API globally
if (window.fetch) {
    const originalFetch = window.fetch;
    window.fetch = function (...args) {
        showSpinner();
        return originalFetch.apply(this, args).finally(() => hideSpinner());
    };
}

// Optional: hide spinner after page load (in case it was shown during navigation)
document.addEventListener('DOMContentLoaded', function () {
    hideSpinner();
});

