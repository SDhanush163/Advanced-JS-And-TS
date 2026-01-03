// -----------------------------------------------------------
// Challenge is to change the below code to ES6 model with the
// help of topics from 01 to 03 on the below code block

// -----------------------------------------------------------
/* function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: "United States",
    };
    document.getElementById(
        "body"
    ).innerText = `${newAddress.city} ${newAddress.state}, ${newAddress.country}`;
}

addressMaker({ city: "Austin", state: "Texas" }); */
// -----------------------------------------------------------
function addressMaker({ city, state, country = "United States" }) {
    document.getElementById("body").innerText = `${city} ${state}, ${country}`;
}

addressMaker({ city: "Austin", state: "Texas" });
