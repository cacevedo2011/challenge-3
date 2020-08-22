# challenge-3

## Summary

The challenge of this week is to generate the password using javascript.  I created 

_var enter;_

_var confirmNumber;_

_var confirmCharacter;_

_var confirmUppercase;_

_var confirmLowercase;_

After that I created: _character_, _number_, _letters_ with each character in there.

The first thing I encounter is that the button is not working when you pressed to generate the password.  So what I did to work is that I created _function generatePassword()_.  Afterwards, I created if, else if function that tells the user instructions of what to do in each situation.  

For instance, 

    enter = parseInt(prompt("Lets start with how long would you like your password to be? It has to be between 8 and 128"));

    // First if statement for user validation

    if (!enter) {

        alert("This needs a value");

    } else if (enter < 8 || enter > 128) {

        enter = parseInt(prompt("You must choose between 8 and 128"));

In this code it first ask the user "how long would you like your password to be? It has to be between 8 and 128", and it says if you don't put any response it would display _alert("This needs a value");_ or if you put between 8 through 128 characters it would display _enter = parseInt(prompt("You must choose between 8 and 128"));_.

The rest of the code I have the same thing with else if statements to make the user choose between the options that are prompted in the code.  The only thing I'm encountering and still can't find the way to solve it is when starting the prompts and it ask between 8 - 128 characters and you choose a different number the code would display _enter = parseInt(prompt("You must choose between 8 and 128"));_ but after you change put the correct one, the code just go to the if statement,

Statement:

     if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {

        choices = alert("Sorry, can't generate password! Try again...");

    }

I want to keep going through the code but for some reason it doesnt let me.  As for the rest of the code it works as I expected.