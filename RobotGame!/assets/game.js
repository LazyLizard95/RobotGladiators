var playerName = window.prompt("Please enter your robot's name");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators");
    enemyHealth = enemyHealth - playerAttack;
    playerHealth = playerHealth - enemyAttack;
    console.log(
        playerName + " attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining!"

    );

    
    


};



if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

if (playerHealth <= 0) {
    window.alert(playerName + " has died!");

}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
