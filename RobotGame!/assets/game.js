var playerName = window.prompt("Please enter your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators");

var fight = function(enemyName) {
    while(enemyHealth > 0){
    var promptFight = window.prompt("Would you like to FIGHT or BRIBE?");
    promptFight = promptFight.toUpperCase(); //converts players input to uppercase
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
}
};

for(i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}


