let x, y;
document.getElementById("rollbutton").onclick = function() {
    const rollInterval = setInterval(() => {
        document.getElementById("xlabel").innerHTML = Math.floor(Math.random() * 6) + 1;
        document.getElementById("ylabel").innerHTML = Math.floor(Math.random() * 6) + 1;
    }, 100);

    setTimeout(() => {
        clearInterval(rollInterval);
        x = Math.floor(Math.random() * 6) + 1;
        y = Math.floor(Math.random() * 6) + 1;
        document.getElementById("xlabel").innerHTML = x;
        document.getElementById("ylabel").innerHTML = y;
        addPopperEffect();
    }, 2000);
}

function addPopperEffect() {
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.classList.add('popper');
        setTimeout(() => {
            label.classList.remove('popper');
        }, 1000);
    });
}
function setLayout() {
    const container = document.getElementById("container");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.height = "100vh";

    const diceContainer = document.getElementById("dice-container");
    diceContainer.style.display = "flex";
    diceContainer.style.flexDirection = "row";
    diceContainer.style.justifyContent = "center";
    diceContainer.style.alignItems = "center";
    diceContainer.style.marginBottom = "20px";
}

window.onload = setLayout;