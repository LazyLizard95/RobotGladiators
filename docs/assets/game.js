var playerInfo = {
name: window.prompt("Please enter your robot's name"),
health: 100,
attack: 10,
money: 10
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: 12
    },
    {
        name: "Amy Android",
        attack: 14
    },
    {
        name: "Robo Bobo Trumble",
        attack: 20
    }

];

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
//set enemy hp
var pickedEnemyObj = enemyInfo;
//function that starts a new game
var startGame = function() { 
    //set player base stats
     playerInfo.health = 100;
     playerInfo.attack = 10;
     playerInfo.money = 10;

    for(i = 0; i < enemyInfo.length; i++){
        if (playerInfo.health > 0){
        var pickedEnemyObj = enemyInfo[i];
        
            pickedEnemyObj.health = randomNumber(40, 60);
    fight(pickedEnemyObj);
    }
    else {
        window.alert(playerInfo.name + " has suffered critical damage! Game Over!");
        break;
    }
  }
}

var shop = function(){
    var shopMode = window.prompt("A greasey man that smells like moldy cheetos approaches. He offers to REPAIR your robot or UPGRADE it. If you wish to leave, RUN he seems spooky.")
    shopMode = shopMode.toLowerCase();
    switch (shopMode){
        case "repair":
            window.alert("A few rolls of ducktape, dollops of chewed gum and unwelcomed flirtation repairs your robot by 20 health at the cost of 10 buckaroos");
        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 10;
        break;

        case "upgrade":
            window.alert("You gained an understanding of the repairmans ways. Together you composed a fire distrack for your robot. Plus 5 attack only at the cost of ten buckaroos")
        playerInfo.attack = playerInfo.attack + 5;
        playerInfo.money = playerInfo.money - 10;
        break;

        case "run":
            window.alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!");
            break;
            default:
                window.alert("Maybe later, lets do something else instead!");
                shop();
                break;
        
        }

};

//end game function that displays stats.
var endGame = function(){
    //if player is still alive, player wins
    if (playerInfo.health > 0){
        window.alert("Covered in dents, scratches, and oil your malicious mechanist emerges as the leader of the new world order!! ")
    }window.alert("After hauling " + playerInfo.name + " to the scrapyard you took some time to reflect.");
};

var fight = function(enemy) {
    window.alert("Welcome to Robot Gladiators, " + playerInfo.name + "." + " Round: " + ( i + 1) + " You have " + playerInfo.health + " HitPoints remaining!" + "You currently have " + playerInfo.money + " Buckeroos!");
    //debugger will pause the script to check whats going on
    debugger;
    //pass the pickedEnemyObj var into the fight function. It wil assume the value of the enemy.name parameter. 
    while(enemy.health > 0){
    if (i < enemyInfo.length - 1){
        var storeConfirm = window.confirm("Good work! Do you wish to spend your ill gotten gains?")
        if(storeConfirm){
        shop();
        }
    }
        var promptFight = window.prompt("Would you like to FIGHT or BRIBE?");
    promptFight = promptFight.toUpperCase(); //converts players input to uppercase
    if(promptFight){
        if(promptFight === "FIGHT"){
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
             console.log(
                    playerInfo.name + " attacked" + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining!"
             );
        //check enemy hp
        if (enemy.health <= 0){
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 15;
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        
    //remove player hp
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
        playerInfo.name + " attacked" + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining!"
 );       
    }else if (promptFight === "BRIBE"){
        //confirm player decision
        var confirmBribe = window.confirm("After groveling to " + enemy.name + " it's been decided that the amount of 10.00 will provide mercy. Is this okay?")
        if (confirmBribe >= playerInfo.money) {
            window.alert(playerInfo.name + " has paid off " + enemy.name + "!");
        //Remove money from player
        playerInfo.money = playerInfo.money - 10;
        console.log("playerInfo.money: ", playerInfo.money);
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