alert("You are Welcome to number Guessing Game!")

var guessnumber = Math.floor(Math.random() * 20) + 1;

var choosenumber = prompt("You are Guess the number between 1 to 20");

if (choosenumber === guessnumber) {
    alert("Many Congraulats! Guess the Right Number..")
} else if (choosenumber > guessnumber) {
    alert("To high Closs this Number! "  + guessnumber)
} else if (choosenumber > guessnumber) {
    alert("To low Closs this Number! "  + guessnumber)
}else{
    alert("Try Again Your Guess is incorect!")
}