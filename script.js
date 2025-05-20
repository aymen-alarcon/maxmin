let ent = document.querySelectorAll('.ent');
let min = document.getElementById('min');
let max = document.getElementById('max');
let verification = document.getElementById('verification');

function nouveau() {
    for (let index = 0; index < ent.length; index++) {
        ent[index].value = "";        
    }
    ent[0].focus();
}

function valider() {

    let allFilled = true;

    for (let index = 0; index < ent.length; index++) {
        if (ent[index].value.trim() === '') {
            ent[index].classList.add('red');
            ent[index].classList.remove('green');
            allFilled = false;
        }else{
            ent[index].classList.add('green');
            ent[index].classList.remove('red');
        }       
    }

    if (!allFilled) {
        verification.value = "Veuillez remplir tous les champs";
        return;
    }
    
    let num1 = Number(ent[0].value);
    let num2 = Number(ent[1].value);
    let num3 = Number(ent[2].value);

    let maximum = Math.max(num1,num2,num3);
    let minimum = Math.min(num1,num2,num3);

    max.value = maximum;
    min.value = minimum;

}
