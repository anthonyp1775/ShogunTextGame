class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
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

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor (name, role) {

    super(name);

    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(`${role} is not a valid role. Must be one of: ${Adventurer.ROLES.join(", ")}`);
    }

    this.role = role;


    this.inventory.push("bedroll", "50 gold coins");

  }

 

  scout () {

    console.log(`${this.name} is scouting ahead...`);

    super.roll();

  }

  duel (opponent) {

    console.log(`${this.name} challenges ${opponent.name} to a duel!`);

    while (this.health > 50 && opponent.health > 50) {

      const myRoll = this.roll();
      const opponentRoll = opponent.roll();

      if (myRoll < opponentRoll) {
        this.health -= 1;
      } else if (opponentRoll < myRoll) {
        opponent.health -= 1;
      }

      console.log(`Round result: ${this.name} rolled ${myRoll} (health: ${this.health}), ${opponent.name} rolled ${opponentRoll} (health: ${opponent.health}).`);

    }

    const winner = this.health > 50 ? this : opponent;
    console.log(`${winner.name} wins the duel!`);

    return winner;

  }

}

class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Showgun");

const aria = new Adventurer("Aria", "Fighter");
const bram = new Adventurer("Bram", "Healer");
aria.duel(bram);