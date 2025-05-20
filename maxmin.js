let ent1 = document.getElementById('Entier-1');
let ent2 = document.getElementById('Entier-2');
let ent3 = document.getElementById('Entier-3');
let ent = document.querySelectorAll('.ent');
let min = document.getElementById('min');
let max = document.getElementById('max');
let verification = document.getElementById('verification');

function maxmin() {
    let num1 = parseFloat(ent1.value);
    let num2 = parseFloat(ent2.value);
    let num3 = parseFloat(ent3.value);
    
    for (let i = 0; i < ent.length; i++) {
        if (ent[i].value.trim() === '') {
            ent[i].style.backgroundColor = "red";
        } else {
            ent[i].style.backgroundColor = "green";
        }
    }
        

    let maximum = Math.max(num1, num2, num3);
    let minimum = Math.min(num1, num2, num3);

    max.value = maximum;
    min.value = minimum;
}

function clear() {
    for (let index = 0; index < ent.length; index++) {
        ent[index].value = '';
    }
    ent[0].focus();
}
