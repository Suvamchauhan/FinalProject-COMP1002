randomNumber = Math.ceil(Math.random() * 10)//generates a random number from range 1-10
let clicks = 1 //initialize click counter for calculating the number of tries
function runGame(userNumber) {//creating a function for the click event
    userNumber = document.getElementById('user-input').value // pulling user input value from the input box
    if (randomNumber != userNumber) { //if the user guesses wrong number
        if (clicks > 3) {
            alert("You have tried too many times and failed to guess the correct number, the number was " + randomNumber + ". Try Again")
            location.reload()
        } else {
            clicks += 1 // increase number of tries by 1
            event.preventDefault() // prevent page from reloading to retain the same random number and tries
            document.getElementById('tries').value = "Tries: " + clicks // replacing input box text for each tries
            alert("Inorrect guess. Try Again") // show an alert box saying the guess is incorrect
        }

    } else {
        alert("Correct guess. " + randomNumber + " was our number. Tries: " + clicks) // if the user guesses correctly, this shows the number of tries
        reload();
    }
}