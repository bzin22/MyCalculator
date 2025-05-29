const bottomButtons = document.querySelector(".bottom-buttons");

function createButtons(){
    for(let row = 0; row < 20; row++){
        const numericalButton = document.createElement("div");
        numericalButton.setAttribute("class", "numerical-button");

        // change color on hover
        numericalButton.addEventListener("click", () => {
            alert("Clicked");
        });

        bottomButtons.appendChild(numericalButton);
    };
}

createButtons();