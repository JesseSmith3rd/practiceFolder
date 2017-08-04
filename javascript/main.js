var outcome;

window.alert("One day you wake up and the world as you know it has ended. The dead come to life and prey on the living. There is no hope, no cure, only survival. Welcome to the Zombie Apocalyspe");

var beginningScenarios = ["You wake up in the hospital. It is eerily quiet. You tiptoe to the door and peek out." , "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.",
"Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods."];

function randomNumber(range){
  "use strict";
  if(typeOf range === "number"){
    return Math.round(Math.random() * range);
  }
}
window.alert( beginningScenarios[ randomNumber( beginningScenarios.length -1)] );

var character = {
  health: 5,
  strength: 0,
  stealth: 0,
  name:window.prompt("What is your name?"),
  characterClass: window.prompt("These times test the strength of our character. What were you before the war? (Choose from: soldier, doctor, or politician)").tolowerCase()
};

if(!character.name ){
  character.name = window.prompt("I don't know what to call you if you don't enter a name. If you don't answer I will be forced to name you myself...Last chance. What is your name?");
  if(!character.name){
    window.alert("Well I did try to warn you. Gunther Piddles it is then");
    character.name = "Gunther Piddles";
  }
}
if(character.characterClass === "soldier"){
  character.strength = 5;
}
if(character.characterClass === "politician"){
  character.stealth = 5;
}
if(character.characterClass === "doctor"){
  character.health = 7;
}
var choice = window.prompt("The brave adventurer and former " + character.characterClass + " " + character.name + " enters a store for some loot. You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or attempt to sneak by the zombie? ").tolowerCase();

if(choice === "attack") {
  if(character.strength === 5){
    window.alert("Using only your bare hands, you slay that zombie! Success! You loot the store for goods and find an axe, a pack of batteries, and three cans of beenie weenies.");
    outcome = "win";
    character.strength++;
  }else if(character.strength <= 5){
    window.alert("You fearlessly charge the zombie with all of your strenth. Using your mighty powers you crush thy foe as if it were a sheet of paper you needed to shred.");
    window.alert("Just kidding. You are immediately bitten by the zomebie and die. But not all is lost -- if time spent together makes one friends, then you and the zombie become best friends, and live together for eternity with half skin. The End!");
    outcome = "loose";
  }
}
if (choice === "sneak" || choice === "sneak by the zombie"){
  if(character.stealth === 5) {
    window.alert("You sneak by the zombie, you clever so and so! ");
  }
  if(character.stealth < 5) {
    window.alert("You try to slip by the zombie, but you accidently stumble over a can of beenie weenies, alerting the zombie of your presence. It slowly turns its head and shuffles towards you!!");
    if(character.strength === 5) {
      window.alert("Although you have alerted the zombie to your presence you are able to crush its skull with your bare hands.");
      outcome = "win";
    }else {
      window.alert("Weaponless and weak the zombie chomps down on your arm as you flail widly in its general direction.");
      outcome = "lose";
    }
  }
}
if(outcome === 'lose'){
  window.alert("You lose!");
}else if(outcome === "win"){
  window.alert("You win!");
// }
// var weaponList = ["44 magnum", "knife", "axe", "shovel", "baseball bat", "rubber chicken", "granade", "Kool-aid jug", "old shoe","iron rod", "number 2 pencil" ];
//
// var weapon = weaponList[randomNumber(weaponList.length -1)];
// alert("Being that it is the zombie apocalyspe, you decide to search for a weapon first. After surveying your surroundings you notice and grab a " + weapon + ".");
//
// alert("Suddenly a zombie burst through the door! You ready your " + weapon + " and advance towards the zombie");
//
// var survival = randomNumber(2);
//
// if(survival === 0){
//   alert("Ouch!! Zombie bites you. Ah man you lose!!!");
// } else if(survival > 0){
//   alert("You kill a zombie with your " + weapon + ". You win! The world is saved!" );
// }
