// 1. we need a username, so we create an empty variable
let username;

// 2. we need a message to show, make an empty html element and get the ID and assign it here as 'let message'
let message = document.getElementById("message")

// Now we make the function, when the button is clicked, the instructions in this function will activate.
function check(){
    // remember the username in step 1, we finally give it the value of whatever you typed in the box
    username = document.getElementById('inputbar').value // ".value" just means, give me the text in the box

    // Now lets check if THE VALUE IN THE BOX(username)
    // is matching the conditions(people we want)
    switch (username) {
        // if username is james, do that
            case 'james':
                message.innerHTML = "Oh Hi James"
                break
        //if its mary, ....
            case 'mary':
                message.innerHTML = "Oh Hi Mary"
                break
        
        // same for john...
            case 'john':
                message.innerHTML = "Oh Hi John"
                break
        
        // default means, if none of them matched
            default: message.innerHTML = "You are none of them!!"
    }
}

