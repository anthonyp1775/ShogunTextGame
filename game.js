const adventurer = {
  name: "Shogun",

  health: 10,

  inventory: ["Katana", "potion", "artifact"],

  companion: {
    name: "Leo",
        subCompanion: {
        name: "Frank",
        type: "Flea",
        inventory: ["Small Hat", "Sunglasses"]
    },
    type: "Cat"
  },

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
  }
};
adventurer.inventory[0];
console.log("The Shogun's primary weapon is the " + adventurer.inventory[0]);

const inventoryItems = ["Katana", "potion", "artifact"];

inventoryItems.forEach((item) => {
  console.log(item);
});

return adventurer.roll()