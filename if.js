// 1. we need a username, so we create an empty variable
let username;

// 2. we need a condition, james. So we make a variable and give it the value james
const condition = 'james'

// 3. we need a message to show, make an empty html element and get the ID and assign it here as 'let message'
let message = document.getElementById("message")

// Now we make the function, when the button is clicked, the instructions in this function will activate.
function check(){
    // remember the username in step 1, we finally give it the value of whatever you typed in the box
    username = document.getElementById('inputbar').value // ".value" just means, give me the text in the box

    // Now lets check if THE VALUE IN THE BOX(username)
    // is matching 'james'(condition)
    if(username === condition){
        // if so, get the element from step3
        // put this text in it so we know it succesfully matched
        message.innerHTML = "Oh Hi James"
    }else{
        // if it doesnt match, put this text in
        message.innerHTML = "You are not JAMES!!"
    }
}

