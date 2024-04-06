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
else{
    alert('Please enter only 1,2')
}

