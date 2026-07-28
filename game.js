const adventurer = {

name: "Shogun",

health: 10,

inventory: ["Katana", "potion", "artifact"]

}

adventurer.inventory[0]
console.log("The Shogun's primary weapon is the " + adventurer.inventory[0]);

const inventoryItems = ["Katana", "potion", "artifact"];

inventoryItems.forEach(item => {
    console.log(item);
});