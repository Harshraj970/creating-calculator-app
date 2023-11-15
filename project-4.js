let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'RESET') {
            screenValue = " ";
            screen.value = '0';
        }
        else if (buttonText == 'DEL') {
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue = "";
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }


    });
}

// let string ="";
// let buttons= document.querySelectorAll('.box');
// Array.from(buttons).forEach((box)=>{
//     box.addEventListener('click',(e)=>{
//         console.log(e.target);
//         string=string + e.target.innerText;
//         document.querySelector("first").value = string ;
//     })

// })