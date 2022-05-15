function rightNumber (){
    let sum = 0.1 + 0.2; 

    alert( sum.toFixed(2) );
}

function taskNumbers (){
    const num1 = "1";
    const num2 = 2;

    alert(+num1+num2);
}

function files (){
    let num = parseInt(prompt('Enter flash drive volume in GB'));
    let rez = Math.floor((num * 1024) / 820);

    alert(`The flash drive will hold ${rez} files of 820 MB`);
}

function chocolate (){
    let num = parseInt(prompt('Enter the amount of money in the wallet'));
    let num2 = parseInt(prompt('Enter the price of one chocolate bar'));
    let choc = Math.floor(num / num2);

    alert(`${choc} chocolate(s) you can buy`);
    alert(`${num-(num2*choc)} is left`);
}

function numberBackwards (){
    const abc = parseInt(prompt('Enter the three digit number'));
    const a = abc % 10;
    const ab = ((abc - a) / 10);
    const b = ab % 10;
    const c = (ab - b) / 10 
    const rez = (a * 100) + (b * 10) + c;

    alert(rez);
	
}

function percentage() {
    const x = parseInt(prompt('Enter the deposit amount')); 
    const y = parseInt(prompt('Indicate the term of the contribution in months')); 
    const a = x * 0.05;
    const b = a / 12; 
    const rez = (b * y).toFixed(2);

    alert(`The amount of accrued interest: ${rez}`);
}

function returnExpression() {
    const a = 2 && 0 && 3;
    const b = 2 || 0 || 3;
    const c = 2 && 0 || 3;
    alert(`Result: ${a}, ${b}, ${c}`);

}