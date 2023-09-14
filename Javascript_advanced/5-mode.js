#!/usr/bin/node
// Changing DOM with closure
function changeMode(size, weight, tranform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }

}

function main() {
    const spooky = changeMode(9, bold, uppercase, pink, green);
    const darkMode = changeMode(12, bold, capitalize, black, white);
    const screamMode = changeMode(12, normal, lowercase, white, black);

    const para = document.createElement("p");
    para.innerText = "Welcome Holberton!";
    body.appendchild(p);


    const button = document.createElement("button");
    button.innerText = "Spooky";
    body.appendchild(button);
    const dbutton = document.createElement("button");
    button.innerText = "Dark mode";
    body.appendchild(button);
    const sbutton = document.createElement("button");
    button.innerText = "Scream mode";
    body.appendchild(button);

    spookyButton.addEventListener('click', spooky);
    darkModeButton.addEventListener('click', darkMode);
    screamModeButton.addEventListener('click', screamMode);

}
main();