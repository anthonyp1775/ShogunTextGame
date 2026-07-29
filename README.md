# Adventure Game

A small JavaScript exercise demonstrating classes, inheritance, and static properties through a text-based adventure game.

## Requirements

- [Node.js](https://nodejs.org/)

## Running

```
node game.js
```

## Classes

### `Character`

The base class for any character in the game.

- `static MAX_HEALTH` — the maximum health a character can have (100).
- `constructor(name)` — creates a character with 100 health and an empty inventory.
- `roll(mod = 0)` — rolls a 20-sided die, adds an optional modifier, logs the result, and returns it.

### `Adventurer extends Character`

A `Character` with a role and adventuring gear.

- `static ROLES` — valid roles: `"Fighter"`, `"Healer"`, `"Wizard"`.
- `constructor(name, role)` — creates an adventurer with the given role (throws if the role isn't valid) and adds `"bedroll"` and `"50 gold coins"` to its inventory.
- `scout()` — logs that the adventurer is scouting ahead and performs a roll.
- `duel(opponent)` — challenges another `Adventurer` to a duel:
  - Each round, both adventurers roll.
  - The adventurer with the lower roll loses 1 health (ties cause no damage).
  - Each round's rolls and current health totals are logged.
  - The duel repeats until one adventurer's health drops to 50.
  - The remaining adventurer above 50 health is logged and returned as the winner.

### `AdventurerFactory`

A helper for creating and looking up `Adventurer` instances that share a role.

- `constructor(role)` — creates a factory for the given role.
- `generate(name)` — creates a new `Adventurer` with that role and adds it to the factory's list.
- `findByIndex(index)` — returns the adventurer at the given index.
- `findByName(name)` — returns the adventurer with the given name.

## Example

```js
const aria = new Adventurer("Aria", "Fighter");
const bram = new Adventurer("Bram", "Healer");
aria.duel(bram);
```
