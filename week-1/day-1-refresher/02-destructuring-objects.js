// Set up of data
const personalDetails = {
    firsName: "Alan",
    lastName: "Alore",
    city: "Mumbai",
    zip: 400001,
};

// -----------------------------------------------------------
const { firsName, lastName } = personalDetails;
console.log(`Var destructured - ${firsName} ${lastName}`); // No need to refer with personalDetails

const { firsName: fn, lastName: ln } = personalDetails;
console.log(`Var reassigned   - ${fn} ${ln}`);
