// * Stack (Primitive), Heap (Non-primitive)

let myName = "Abdur Rahman"
let anotherName = myName;
anotherName = "AR Rahman"

console.log(anotherName);

let user1 = {
    email: "user@google.com",
    upi: "user@bl"
}

let user2 = user1

user2.email = "user2@me"

console.log(user1);
console.log(user2);

