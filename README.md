# challenge-3

## Summary

The challenge of this week is to generate the password using javascript.  I created 

_var enter;_

_var confirmNumber;_

_var confirmCharacter;_

_var confirmUppercase;_

_var confirmLowercase;_

After that I created: _character_, _number_, _letters_ with each character in there.

The first thing I encounter is that the button is not working when you pressed to generate the password.  So what I did to work is that I created _function generatePassword()_.  Afterwards, I created if, else if function that tells the user instructions of what to do in each situation.  For instance, 

_enter = parseInt(prompt("Lets start with how long would you like your password to be? It has to be between 8 and 128"));_

    _// First if statement for user validation_

    _if (!enter) {_

        _alert("This needs a value");_

    _} else if (enter < 8 || enter > 128) {_

        _enter = parseInt(prompt("You must choose between 8 and 128"));_

In this code it first ask the user "how long would you like your password to be? It has to be between 8 and 128", and it says if you don't put any response it would display _alert("This needs a value");_ or if you put between 8 through 128 characters it would display _enter = parseInt(prompt("You must choose between 8 and 128"));_.