# challenge-3

### Deployed Website

https://cacevedo2011.github.io/challenge-3/

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

    if (!enter) {

        alert("This needs a value");

    } else if (enter < 8 || enter > 128) {

        enter = parseInt(prompt("You must choose between 8 and 128"));

In this code it first ask the user "how long would you like your password to be? It has to be between 8 and 128", and it says if you don't put any response it would display _alert("This needs a value");_ or if you put between 8 through 128 characters it would display _enter = parseInt(prompt("You must choose between 8 and 128"));_.

The rest of the code I have the same thing with else if statements to make the user choose between the options that are prompted in the code.

At the end of all the options that the user chooses, the code stores it and I told the code to randomize it and display it on the window.

This is the code,

    // Start random selection variables:

    for (var i = 0; i < enter; i++) {

    var pickChoices = choices[Math.floor(Math.random() * choices.length)];

    password.push(pickChoices);

    console.log = generatePassword

}

The only thing I'm encountering and still can't find the way to solve it is when starting the prompts and it asks between 8 - 128 characters and you choose a different number the code would display _enter = parseInt(prompt("You must choose between 8 and 128"));_ but after you change put the correct one, the code just go to the if statement,

Statement:

     if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {

        choices = alert("Sorry, can't generate password! Try again...");

    }

I want to keep going through the code but for some reason, it doesn't let me.  As for the rest of the code it works as I expected.

## Looking at the code play by play

### Step 1:
#### When pressed "Generate Password" it would prompt a window welcoming the user. (Cosmetic doesn't affect the code)

<img width="1280" alt="step1" src="https://user-images.githubusercontent.com/18291317/90965280-b4edd680-e494-11ea-8052-71cba94db34f.png">

### Step 2:
#### Ask the User how many characters the code is going to generate.  Is between 8 - 128 characters.

<img width="1280" alt="step2" src="https://user-images.githubusercontent.com/18291317/90965284-c33bf280-e494-11ea-92aa-7da969c7ac19.png">

### Step 3:
#### Ask the User for any special characters to display the code.

<img width="1280" alt="step3" src="https://user-images.githubusercontent.com/18291317/90965290-d058e180-e494-11ea-92f0-7e62edcaf85e.png">

### Step 4:
#### Ask the User for any number characters to display the code.

<img width="1280" alt="step4" src="https://user-images.githubusercontent.com/18291317/90965296-dc44a380-e494-11ea-848e-fa31cecfe7c9.png">

### Step 5:
#### Ask the User for any lower case characters to display the code.

<img width="1280" alt="step5" src="https://user-images.githubusercontent.com/18291317/90965302-e666a200-e494-11ea-96c9-e50c6e6c279b.png">

### Step 6:
#### Ask the User for any upper case characters to display the code.

<img width="1280" alt="step6" src="https://user-images.githubusercontent.com/18291317/90965312-fa120880-e494-11ea-9fe8-d61aa929bad4.png">

### Step 7:
#### Thank the User for using the Password Generator. (Cosmetic doesn't affect the code)

<img width="1280" alt="step7" src="https://user-images.githubusercontent.com/18291317/90965316-04340700-e495-11ea-9280-ecedb20f81a2.png">

### Step 8:
#### The generated password would be displayed in the website.

<img width="1280" alt="step8" src="https://user-images.githubusercontent.com/18291317/90965320-0e560580-e495-11ea-8311-adfd9a89ec14.png">
