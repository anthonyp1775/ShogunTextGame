class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

const shogun = new Character("Shogun");
shogun.health = 10;
shogun.inventory = ["Katana", "potion", "artifact"];
shogun.companion = {
  name: "Leo",
  subCompanion: {
    name: "Frank",
    type: "Flea",
    inventory: ["Small Hat", "Sunglasses"]
  },
  type: "Cat"
};

console.log(`The Shogun's primary weapon is the ${shogun.inventory[0]}`);

const inventoryItems = ["Katana", "potion", "artifact"];
inventoryItems.forEach((item) => {
  console.log(item);
});

shogun.roll();