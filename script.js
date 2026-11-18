//your JS code here. If required.

const blockInput = document.getElementById("block_id");
const colorInput = document.getElementById("colour_id");

const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

const blocks = document.querySelectorAll(".grid-item");


changeButton.addEventListener("click", function () {

    const blockId = blockInput.value;
    const color = colorInput.value;

    
    blocks.forEach(block => {
        block.style.backgroundColor = "transparent";
    });

    // Find the selected block
    const selectedBlock = document.getElementById(blockId);

    
    if (selectedBlock && blockId >= 1 && blockId <= 9 && color !== "") {
        selectedBlock.style.backgroundColor = color;
    }
});


resetButton.addEventListener("click", function () {

    blocks.forEach(block => {
        block.style.backgroundColor = "transparent";
    });

    blockInput.value = "";
    colorInput.value = "";
});
