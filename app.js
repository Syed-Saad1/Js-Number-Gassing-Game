alert("You are Welcome to number Guessing Game!")

var guessnumber = Math.floor(Math.random() * 20) + 1;

var choosenumber = prompt("You are Guess the number between 1 to 20");

if (choosenumber === guessnumber) {
    document.write("Many Congraulats! Guess the Right Number..")
} else if (choosenumber > guessnumber) {
    document.write("To high Closs this Number! "  + guessnumber)
} else if (choosenumber > guessnumber) {
    document.write("To low Closs this Number! "  + guessnumber)
}else{
    document.write("Try Again Your Guess is incorect!")
}