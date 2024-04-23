#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 6000;
const pinNumber = 6698;
const pinAnswer = await inquirer.prompt([{
        name: "userGivenPin",
        type: "number",
        message: "Please enter your pin number"
    }]);
if (pinAnswer.userGivenPin === pinNumber) {
    console.log("Valid pinnumber..");
    const Operation = await inquirer.prompt([{
            name: "userAction",
            type: "list",
            message: " Select what operation would you like to perform..",
            choices: ["withdrawCash", "checkCurrentBalance"]
        }]);
    if (Operation.userAction === "withdrawCash") {
        let amount = await inquirer.prompt([{
                name: "withdrawAmount",
                type: "number",
                message: "Enter how much amount you want to withdraw?"
            }]);
        if (myBalance < amount.withdrawAmount) {
            console.log("Your account balance is less than the amount you want to withdraw..");
        }
        else {
            myBalance -= amount.withdrawAmount;
            console.log("Congratulations! Your withdrawal is successfully approved..");
            console.log("your remaining balance is :" + myBalance);
        }
        ;
    }
    else if (Operation.userAction === "checkCurrentBalance") {
        console.log("Your current account balance is : " + myBalance);
    }
}
else {
    console.log("You enter invalid number please try again..!!");
}
;
