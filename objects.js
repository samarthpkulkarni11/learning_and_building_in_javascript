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

