// window.initPhoneInput = function (id) {
//     const input = document.getElementById(id);
//     if (input) {
//         const originalClass = input.parentElement.className; // store your class

//         // loaded from intl-tel-input library
//         window.intlTelInput(input, {
//             initialCountry: "auto",
//             separateDialCode: true, // shows the +XX next to country in dropdown
//             geoIpLookup: function (success, failure) {
//                 fetch('https://ipapi.co/json')
//                     .then(res => res.json())
//                     .then(data => success(data.country_code))
//                     .catch(() => success("US"));
//             }
//         });
//         input.parentElement.className += ` ${originalClass}`;
//     }
// };


// Automatically initialize any <input> with [intl-phone] attribute
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll("input[intl-phone]").forEach(input => {
//         const originalClass = input.parentElement.className;

//         window.intlTelInput(input, {
//             initialCountry: "auto",
//             separateDialCode: true, // shows the +XX next to country in dropdown
//             geoIpLookup: function (success, failure) {
//                 fetch('https://ipapi.co/json')
//                     .then(res => res.json())
//                     .then(data => success(data.country_code))
//                     .catch(() => success("US"));
//             }
//         });

//         // Restore your parent class if intl-tel-input overrides it
//         input.parentElement.className += ` ${originalClass}`;
//     });
    
//     document.querySelector("#checkBtn").addEventListener("click", function () {
//            if (iti.isValidNumber()) {
//                alert("✅ Valid number: " + iti.getNumber());
//            } else {
//                alert("❌ Invalid number for " + iti.getSelectedCountryData().name);
//            }
//        });
// });



window.ahmed = function(){
    console.log("ahmed");
}


window.amr = function(){
    console.log("ahmed");
}

document.addEventListener("DOMContentLoaded", function () {
    // keep references for each input
    const phoneInputs = [];

    document.querySelectorAll("input[intl-phone]").forEach(input => {
        const originalClass = input.parentElement.className;

        const iti = window.intlTelInput(input, {
            initialCountry: "auto",
            separateDialCode: true,
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // needed for validation
            geoIpLookup: function (success, failure) {
                fetch('https://ipapi.co/json')
                    .then(res => res.json())
                    .then(data => success(data.country_code))
                    .catch(() => success("US"));
            }
        });

        // save reference
        phoneInputs.push(iti);

        // restore parent class
        input.parentElement.className += ` ${originalClass}`;
    });

    document.querySelector("#checkBtn").addEventListener("click", function (e) {
        // prevent form navigation if still using type="submit"
        e.preventDefault();

        
        // validate all intl-phone inputs
        phoneInputs.forEach(iti => {
            const countryData = iti.getSelectedCountryData();
            const countryName = countryData.name;
            const countryAbbr = countryData.iso2;

            console.log(countryData, iti.getNumber())

            if (iti.isValidNumber()) {
            alert(`✅ Valid number: ${iti.getNumber()} \nCountry: ${countryName} (${countryAbbr})`);
            } else {
                alert(`❌ Invalid number ${iti.getNumber()} for ${countryName} (${countryAbbr})`);
            }
        });
    });
});

