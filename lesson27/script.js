function nameOfUser (){
    let username = prompt("What is your name?");
    let rez = "Привіт, " + username

    alert(rez);
}

function ageOfUser (){
    let age = prompt("Your year of birth");
    const num = 2022;
    let rez = num-age;

    alert(`Your age is ${rez}`);
}

function perOfSquare (){
    const num = parseInt(prompt('Enter the length of the side of the square'));
    const rez = num*4;

    alert(rez);

}

function circleRadius (){
    const num = parseInt(prompt('Enter circle radius'));
    const S = 3.14;
    const rez = S*num**2;

    alert(rez);
}

function speed (){
    const s = parseInt(prompt('Enter distance in kilometers between two cities'));
    const t = parseInt(prompt('Enyer how many hours do you want to get there'));
    const v = s/t;

    alert(v);

}

function converter (){
    const dollar = parseInt(prompt('Enter dollar'));
    const euro = dollar*0.95;

    alert(`${euro} euro(s)`);

}

function numbers (){
    const fivedigit = +prompt('Enter five-digit number');
    const firstnum = fivedigit % 10;
    const num = Math.floor(fivedigit / 10);
    const rez = (firstnum * 10000) + num;

    alert(rez);
}

function salary (){
    const sales = parseInt(prompt('Total monthly sales'));
    const rez = (sales*0.1) + 250;

    alert(rez)

}