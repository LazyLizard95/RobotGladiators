var playerName = window.prompt("Please enter your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators");
    var promptFight = window.prompt("Would you like to FIGHT or BRIBE?");
    promptFight = promptFight.toUpperCase(); //converts players inputt to uppercase
    if(promptFight){
        if(promptFight === "FIGHT"){
            enemyHealth = enemyHealth - playerAttack;
             console.log(
                    playerName + " attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining!"
             );
        //check enemy hp
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
    //remove player hp
        playerHealth = playerHealth - enemyAttack;
        console.log(
        playerName + " attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining!"
 );       
    }else if (promptFight === "BRIBE"){
        //confirm player decision
        var confirmBribe = window.confirm("After groveling to " + enemyName + " it's been decided that the amount of 2.00 will provide mercy. Is this okay?")
        if (confirmBribe) {
        window.alert(playerName + " has paid off " + enemyName + "!");
        //Remove money from player
        playerMoney = playerMoney - 2;
        } else{
            fight();
        }
    } else {
        window.alert("Does not compute! Please enter a valid option!");
    }
    }
};
fight();
// if (enemyHealth <= 0) {
//     window.alert(enemyName + " has died!");

// }
// else {
//     window.alert(enemyName + " still has " + enemyHealth + " health left.");
// }

// if (playerHealth <= 0) {
//     window.alert(playerName + " has died!");

// }
// else {
//     window.alert(playerName + " still has " + playerHealth + " health left.");
// }

