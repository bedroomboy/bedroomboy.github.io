/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Tidal (1996)";

if (myHeading.textContent === "Tidal (1996)") {
    alert ("YAY!");
}

else {
    alert ("Yayo");
}

function multiply(num1, num2) {
let times = num1 * num2;
return times;
}

alert (multiply (6, 6))

document.querySelector("html").addEventListener("click", function () {
    alert ("Don't poke me!");
});

//Below is an arrow function
document.querySelector("h1").addEventListener("click", ()=> {
    alert("Yeah Nigga!");
});*/

const myImage = document.querySelector("img");

myImage.onclick = ()=> {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/tidal-cover.webp") {
        myImage.setAttribute("src", "images/ginger.jpeg")
    }    
    /*if (mySrc === "images/ginger.jpeg") {
        myImage.setAttribute("src", "images/bandana.jpeg")
    } 
    if (mySrc === "images/bandana.jpeg") {
        myImage.setAttribute("src", "images/tidal-cover.webp")
    }*/
    else {
            myImage.setAttribute("src", "images/tidal-cover.webp")
    }
};

/*const myImage = document.querySelector("img");
function changeImage() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/tidal-cover.webp") {
        myImage.setAttribute("src", "images/ginger.jpeg");
    }
    else {
        myImage.setAttribute("src", "images/tidal-cover.webp");
    }
}
myImage.onclick = changeImage;*/

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUserName() {
    const myName = prompt("Enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const myStoredName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${myStoredName}`;
}

myButton.onclick = () => {
    setUserName();
}

/*const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");

function setUserName () {
    const yourName = prompt("Enter your name.");
    if (!yourName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", yourName);
        myHeading.textContent = `Welcome, ${yourName}.`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}.`;
}

myButton.onclick = setUserName;*/