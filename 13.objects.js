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

//can also be deleted like this 
delete sampleObjectOne.contactDetails;
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

//Now let us try to learn about object.seal() v/s object.freeze
//we have seen that our objects can be easily manipulated by adding, deleting or rewriting its properties. To avoid them we have certain methods - seal() and freeze().

//let us declare a sample object.

const sampleObjectThree = {
    name: "Samarth",
    place: "Bidar, karnataka",
    phone: "6363944505",
    profession: "Garibb Engineer",
    laptop: "Acer"
}

//now let us try to seal the object - this does not add or delete the values but the existing values can be altered with new value names.

Object.seal(sampleObjectThree); //once i have sealed the object let us try to alter it with some known operations.

delete sampleObjectThree["place"];
console.log(sampleObjectThree); //returns back the same object as it cannot delte it

sampleObjectThree.work = "Software Development";
console.log(sampleObjectThree); //does not append any new value too

sampleObjectThree["name"] = "SAMMY";
console.log(sampleObjectThree); //okay can alter the pre-declared value for keys.

//let us try now object.freeze() - this does not alter, modify or add anything new to the object 

Object.freeze(sampleObjectThree);

//and let us repeat checking how this works on the object being applied

delete sampleObjectThree["place"];
console.log(sampleObjectThree); //returns back the same object as it cannot delte it

sampleObjectThree.work = "Software Development";
console.log(sampleObjectThree); //does not append any new value too

sampleObjectThree["name"] = "SAMMY";
console.log(sampleObjectThree); //okay can alter the pre-declared value for keys.