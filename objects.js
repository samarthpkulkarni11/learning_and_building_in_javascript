//We  will be covering objects in js, key-value pairs and working more in depth with objects on modifying the object, how to delete/access a key value pair in objects and so on...


//this is an basic object with some key-value pairs.
const sampleObjectOne = {
    name: "Samarth",
    profession: "Engineering",
    interests: "backend/server-side development",
    age: 23,
    contactDetails: "samarthpkulkarni11@gmail.com"
}

//this is how the key-value pairs are being accessed from the above object.
console.log(sampleObjectOne["name"]);
console.log(sampleObjectOne.name);

//delete any key value pair from the object
delete sampleObjectOne["age"];
console.log(sampleObjectOne)

//let us try to append the object with new property

sampleObjectOne.location = "India";
console.log(sampleObjectOne); //this is updated in memory to include the property with the object.

//let us try to nest object inside object

const sampleObjectTwo = {
        name: "Samarth",
        profession: "Engineering",
        interests: "backend/server-side development",
        age: 23,
        contactDetails: "samarthpkulkarni11@gmail.com",
        address: {
            location: "Bidar, Karnataka",
            pinCode: 585403,
            phoneNumber: 6363944505,
            area: "Basava Nagar, Bidar",
        hobbies: {
        interests: "pata nahi hoga toh hoga",
        update: "seh lenge thoda sa"
        }
    },
}

console.log(sampleObjectTwo.name);
console.log(sampleObjectTwo.address.location);
console.log(sampleObjectTwo.address.hobbies.update)