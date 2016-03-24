//lets build the html elements
//create a div 
var content = document.createElement("div");

//place the content div in the body
document.body.appendChild(content);

//put some words in the content div

content.innerHTML = "Hello World!";

//increase font size
content.style.fontSize = "50px";

// change background 
 content.style.backgroundColor = "teal";
 
 // fit half the screen
 content.style.width = "50%";
 
 //center the text in the content div
 content.style.textAlign ="center";
 
 //
 content.style.margin  = "10% auto";
 
 //
 content.style.fontFamily = "sans-serif";
 
 //
 content.style.color= "white";