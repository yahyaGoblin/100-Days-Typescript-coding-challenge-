var guests = ["Albert Einstein", "Issac Newton", "Nikola Tesla"];
var unableToAttend = "Nikola Tesla";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replacing the guest
var newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
