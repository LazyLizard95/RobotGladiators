var playerName = window.prompt("Please enter your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
//function that starts a new game
var startGame = function() { 
    //set player base stats
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;

    for(i = 0; i < enemyNames.length; i++){
        if (playerHealth > 0){
        var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    }
    else {
        window.alert(playerName + " has suffered critical damage! Game Over!");
        break;
    }
  }
}
//end game function that displays stats.
var endGame = function(){
    window.alert("After hauling " + playerName + " to the scrapyard you took some time to reflect.");
};

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators, " + playerName + "." + " Round: " + ( i + 1) + " You have " + playerHealth + " HitPoints remaining!" + "You currently have " + playerMoney + " Buckeroos!");
    //debugger will pause the script to check whats going on
    debugger;
    //pass the pickedEnemyName var into the fight function. It wil assume the value of the enemyName parameter. 
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
            playerMoney = playerMoney + 15;
            break;
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
        var confirmBribe = window.confirm("After groveling to " + enemyName + " it's been decided that the amount of 10.00 will provide mercy. Is this okay?")
        if (confirmBribe >= playerMoney) {
            window.alert(playerName + " has paid off " + enemyName + "!");
        //Remove money from player
        playerMoney = playerMoney - 10;
        console.log("playermoney: ", playerMoney);
        break;
    } else{
            fight();
        }
    } else {
        window.alert("Does not compute! Please enter a valid option!");
    }
    }
}
};  
startGame(); //initiate game