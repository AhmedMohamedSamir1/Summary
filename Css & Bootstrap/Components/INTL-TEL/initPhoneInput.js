window.initPhoneInput = function (id) {
    const input = document.getElementById(id);
    if (input) {
        const originalClass = input.parentElement.className; // store your class

        // loaded from intl-tel-input library
        window.intlTelInput(input, {
            initialCountry: "auto",
            separateDialCode: true, // shows the +XX next to country in dropdown
            geoIpLookup: function (success, failure) {
                fetch('https://ipapi.co/json')
                    .then(res => res.json())
                    .then(data => success(data.country_code))
                    .catch(() => success("US"));
            }
        });
        input.parentElement.className += ` ${originalClass}`;
    }
};