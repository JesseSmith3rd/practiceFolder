var beginningScenarios = ["You wake up in the hospital. It is eerily quiet. You tiptoe to the door and peek out." , "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.",
"Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods.", "Suddenly, the skies get dark, and you begin to see, a unusual army coming before thee, they do not speak, only growl, there's a bad stinch in the air oh how fowl",
"Eyes open up, and then you realize, things are about to change and you can't see why, things look normal, but trash everywhere, where did the humans go, we got to get out of here!" ];

function randomNumber(range){
    return Math.round(Math.random() * range);
}
alert( beginningScenarios[ randomNumber( beginningScenarios.length -1)] );

var weaponList = ["44 magnum", "knife", "axe", "shovel", "baseball bat", "rubber chicken", "granade", "Kool-aid jug", "old shoe","iron rod", "number 2 pencil" ];

var weapon = weaponList[randomNumber(weaponList.length -1)];
alert("Being that it is the zombie apocalyspe, you decide to search for a weapon first. After surveying your surroundings you notice and grab a " + weapon + ".");

alert("Suddenly a zombie burst through the door! You ready your " + weapon + " and advance towards the zombie");

var survival = randomNumber(2);

if(survival === 0){
  alert("Ouch!! Zombie bites you. Ah man you lose!!!");
} else if(survival > 0){
  alert("You kill a zombie with your " + weapon + ". You win! The world is saved!" );
}
