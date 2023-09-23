const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
//Event Listener
button.addEventListener('click', function() {
    const myItem = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBTN = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBTN);
    listBTN.textcontent = 'Delete';
    list.appendChild(listItem);
    listBTN.addEventListener('click', function() {
        list.removeChild(listItem);
 })
input.focus();
})
