let guests: string[] = ["Albert Einstein", "Issac Newton", "Nikola Tesla"];

let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replacing the guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});