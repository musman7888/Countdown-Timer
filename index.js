#! /usr/bin/env node
import inquirer from "inquirer";
import Timer from "./Timer.js";
let userInput = await inquirer.prompt([
    {
        message: "Please enter Contdown time in seconds: ",
        name: "seconds",
        type: "number"
    }
]);
const timer = new Timer(userInput.seconds);
timer.start();
