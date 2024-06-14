import inquirer from "inquirer"

let myBalance = 10000;
let myPin = 12233;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    },
]);
if (pinAnswer.pin === 12233) {
    console.log("correct pin code!!!")
    let operationAns =await inquirer.prompt([
        {name:"operation",
         message:"please select option",
         type:"list",
         choices:["whitdraw", "check balance"]

        }
    ])
    if (operationAns.operation === "whitdraw"){
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                message:"enter your amount",
                type:"number"
            }
        ]);
      
    if ( myBalance< amountAns.amount){
        console.log("insufficient balance");
    }
    else if (myBalance -= amountAns.amount)
       { console.log("your remaining balance is :" + myBalance);
        console.log("thank you for using our service");}
    }

    
    else if (operationAns.operation === "check balance"){
        console.log("your remaining balance is :" + myBalance);
    }
} else {
    console.log("incorrect pin number")
}
