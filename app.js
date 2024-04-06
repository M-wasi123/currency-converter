var userInput = +prompt('In which do you want to convert amount. Press 1 for Dollar to PKR and Press 2 for PKR to Dollar')

if (userInput == 1) {
        var userInput1 = +prompt('Enter an amount in to convert Dollar into PKR')
    var pkr = userInput1*278
    alert('The converted amount is '+pkr+' according to (1$ = 278RS)')
    for (let index = 1; index > 0; index++) {
        var restart = +prompt('If you want to restart the program press 1 or want to end press 2')
if (restart == 1) {
    var chose = +prompt('In which do you want to convert amount. Press 1 for Dollar to PKR and Press 2 for PKR to Dollar')
    if (chose == 1) {
        var userInput1 = +prompt('Enter an amount in to convert Dollar into PKR')
        var pkr = userInput1*278
        alert('The converted amount is '+pkr+' according to (1$ = 278RS)')
    }else if (chose == 2) {
        var userInput1 = +prompt('Enter an amount in to convert PKR into DOLLAR')
        var dollar = userInput1/278
        alert('The converted amount is '+dollar+' according to (1$ = 278RS)')
    }

} else if (restart == 2) {
    alert('Thanks for coming')
    break;
}else{
    alert('Please enter only 1,2')
}
    }
    
}else if (userInput == 2) {
    var userInput2 = +prompt('Enter an amount in to convert PKR into Dollar')
    var dollar = userInput2/278
    alert('The converted amount is '+dollar+' according to (1$ = 278RS)')
    for (let index = 1; index > 0; index++) {
        var restart = +prompt('If you want to restart the program press 1 or want to end press 2')
if (restart == 1) {
    var chose = +prompt('In which do you want to convert amount. Press 1 for Dollar to PKR and Press 2 for PKR to Dollar')
    if (chose == 1) {
        var userInput1 = +prompt('Enter an amount in to convert Dollar into PKR')
        var pkr = userInput1*278
        alert('The converted amount is '+pkr+' according to (1$ = 278RS)')
    }else if (chose == 2) {
        var userInput1 = +prompt('Enter an amount in to convert PKR into DOLLAR')
        var dollar = userInput1/278
        alert('The converted amount is '+dollar+' according to (1$ = 278RS)')
    }
} else if (restart == 2) {
    alert('Thanks for coming')
    break;
}else{
    alert('Please enter only 1,2')
}
    }

}
// else if (userInput < 0 || userInput > 2)(
//     alert('Enter the value 1,2')
// )

// for (var i = 1; i > 0; i++) {
//     var menu = +prompt(`Press 1 to convert DOLLAR into PKR or Press 2 to convert PKR into DOLLAR  `);
//     if (menu == 1) {
//         for (var i = 1; i > 0; i++) {
//             var amount = +prompt("Enter the amount which you want to convert  DOLLAR into PKR");

//             if (amount > 0) {
//                 var dollarToPkr = amount * 270;
//                 alert(amount + "DOLLAR into PKR Is" + dollarToPkr)
//                 break;
//             } else {
//                 alert("Enter the value greater than 0")
//             }
//         }
//         for (var k = 1; k > 0; k++) {
//             var continueOrNot = +prompt("Press 1 to continue or press 2 to exit");
//             if (continueOrNot == 1 || continueOrNot == 2) {
//                 break;
//             }else{
//                 alert("please enter only one and two")
//             }

//         }
//     } else if (menu == 2) {
//         for (var i = 1; i > 0; i++) {
//             var amount = +prompt("Enter the amount which you want to convert PKR into dollar");
//             if (amount > 0) {
//                 var pkrToDollar = amount / 270;
//                 alert(amount + "PKR into DOLLAR is" + pkrToDollar);
//                 break;
//             } else {
//                 alert("Enter the value greater than 0")
//             }
//         }
//         for (var k = 1; k > 0; k++) {
//             var continueOrNot = +prompt("Press 1 to continue or press 2 to exit");
//             if (continueOrNot == 1 || continueOrNot == 2) {
//                 break;
//             }else{
//                 alert("please enter only one and two")
//             }

//         }
        
//     } else {
//         alert("Invalid input!  PLease enter 1 or 2 to perform conversion");
//     }
//     if (continueOrNot == 2) {
//         break;
//     }
// }




// if (userInput == 1) {
//     var userInput1 = +prompt('Enter an amount in to convert Dollar into PKR')
//     var pkr = userInput1*278
//     alert('The converted amount is '+pkr+' according to (1$ = 278RS)')
// for (let i = 0; i < 4000; i++) {
 
// if (restart == 1) {
//         var userInput = +prompt('In which do you want to convert amount. Press 1 for Dollar to PKR and Press 2 for PKR to Dollar')

//         if (userInput == 1) {
//             var userInput1 = +prompt('Enter an amount in to convert Dollar into PKR')
//             var pkr = userInput1*278
//             alert('The converted amount is '+pkr+' according to (1$ = 278RS)')
//         }else if (userInput == 2) {
//             var userInput2 = +prompt('Enter an amount in to convert PKR into Dollar')
//             var dollar = userInput2/278
//             alert('The converted amount is '+dollar+' according to (1$ = 278RS)')
//         }
//         else if (userInput < 0 || userInput > 2)(
//             alert('Enter the value 1,2')
//         )
//     }
    
// }
// }
// else if (userInput == 2) {
//     alert('Thanks for comming')
// }
