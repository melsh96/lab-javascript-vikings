// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;

  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

receiveDamage(damage) {
  this.health -= damage;
  if (this.health > 0)
    return `${this.name} has received ${damage} points of damage`;
  else
    return `${this.name} has died in act of combat`;
}

battleCry() {
  return "Odin Owns You All!"
}
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }

receiveDamage(damage) {
  this.health -= damage;
  if (this.health > 0) 
    return `A Saxon has received ${damage} points of damage`;
  else
    return "A Saxon has died in combat";
}
}

// War
class War {

  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

//Math.random returns value between 0&1
    // Math.random will be a float => we will use Math.floor(Math.random() * arr.length)

  vikingAttack() {
    let getRandomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[getRandomSaxonIndex];

    let getRandomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[getRandomVikingIndex];

    let damagedSaxon = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0)
      this.saxonArmy.splice(getRandomSaxonIndex, 1);
    
    return damagedSaxon;
  }

  saxonAttack() {
    let getRandomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[getRandomSaxonIndex];

    let getRandomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[getRandomVikingIndex];

    const damagedViking = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0)
      this.vikingArmy.splice(getRandomVikingIndex, 1);

    return damagedViking;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) 
      return "Vikings have won the war of the century!";
    else if (this.vikingArmy.length === 0) 
      return "Saxons have fought for their lives and survived another day...";
    else //(War.saxonArmy.length >= 1 && War.vikingArmy.length >= 1)
      return "Vikings and Saxons are still in the thick of battle.";
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
