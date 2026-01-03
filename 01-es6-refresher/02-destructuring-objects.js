// -----------------------------------------------------------
// Set up of data
// -----------------------------------------------------------
const personalDetails = {
    firstName: "Alan",
    lastName: "Alore",
    city: "Mumbai",
    zip: 400001,
};

const { firstName, lastName } = personalDetails;
console.log(`Var destructured - ${firstName} ${lastName}`); // No need to refer with personalDetails

const { firstName: fn, lastName: ln } = personalDetails;
console.log(`Var reassigned   - ${fn} ${ln}`);

// -----------------------------------------------------------
// Object Literal
// -----------------------------------------------------------
function addressMaker(city, state) {
    const newAddress = { city, state }; // Dont have to define as {city: city}
    console.log(newAddress);
}

addressMaker("Noida", "UP");
