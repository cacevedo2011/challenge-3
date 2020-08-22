// Assignment Code

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start Password variable values: 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Space is for the Uppercase conversion
space = [];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;

// converts letters to uppercase 
var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a variable for uppercase conversion
letters2 = letters.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  generatingPassword = generatePassword();
  document.getElementById("password").placeholder = generatePassword;
});

// Start function to generate password
function generatePassword() {
    //Welcomes User to the Password Generator
    window.alert("Welcome to Password Generator")
  
    // Asks for user input
    enter = parseInt(prompt("Lets start with how long would you like your password to be? It has to be between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated

        confirmNumber = confirm("In this password would you like to have any special characters?");

        confirmCharacter = confirm("Do you want this password to contain numbers?");

        confirmUppercase = confirm("Would you like your password to contain to lowercase letters?");

        confirmLowercase = confirm("Lastly, would you like your password to contain uppercase letters?");

        window.alert("Here is your random password, have a great day!");
    };

    //If the User doesn't choose any of the options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("Sorry, can't generate password! Try again...");

    }
    //If the User chooses 4 options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(numbers, letters, letters2);
    }

    //If the User chooses 3 options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(numbers, letters2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(numbers, letters);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(letters, letters2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(letters, letters2);
    }

    //If the User chooses 2 options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(numbers);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(letters);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(letters2);
    }

    //If the User chooses 1 option
    else if (confirmLowercase && confirmNumber) {
        choices = letters.concat(numbers);

  } else if (confirmLowercase && confirmUppercase) {
        choices = letters.concat(letters2);

  } else if (confirmNumber && confirmUppercase) {
        choices = numbers.concat(letters2);
  }

  // Else if for 1 positive option
  else if (confirmCharacter) {
      choices = character;
  }
  else if (confirmNumber) {
      choices = numbers;
  }
  else if (confirmLowercase) {
      choices = letters;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUppercase) {
      choices = space.concat(letters2);
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables:
  // Random selection for all variables: 
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
    console.log = generatePassword
}
// This joins the password array and converts it to a string
var generatingPassword = password.join("");
UserInput(generatingPassword);
return generatingPassword;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(generatingPassword) {
document.getElementById("password").textContent = generatingPassword;

}

