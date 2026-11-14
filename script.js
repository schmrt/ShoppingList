// Ryan Schmelter
// Description: Shopping list handler

function createItem(){
    let itemName = document.querySelector("#shopping-form>input").value;
    let template = document.querySelector("template");
    let myNewItem = document.importNode(template.content,true);
    myNewItem.querySelector(".item-text").innerText = itemName;
    myNewItem.querySelector(".remove-btn").addEventListener("click",removeShippingListItem);
    myNewItem.querySelector("li").addEventListener("click",removeShippingListItem);

    document.querySelector("#shopping-list").appendChild(myNewItem);
    document.querySelector("#shopping-form>input").value = "";
}

// Remove items function
function removeShippingListItem(e){
    if(e.target.getAttribute("class") === "remove-btn" && e.currentTarget.getAttribute("class") != "remove-btn"){
        e.currentTarget.remove();
    }
}

// Creating item
document.querySelector("#shopping-form>button").addEventListener("click",createItem);