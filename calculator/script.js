let string = "";
let previousVal ="";
let previousHistory = "";

let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
       
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
            previousHistory = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'X'){
            string =  previousVal.substring(0,previousVal.length-1)
            document.querySelector('input').value = string;


        }
        else if(e.target.innerHTML == '/'){
            string =  localStorage.getItem("previousHistory");
            document.querySelector('input').value = string;


        }

        else{
            console.log(e.target);
            string = string+ e.target.innerHTML;
            previousVal = string;
            document.querySelector('input').value = string;
        }

        localStorage.setItem("previousHistory",previousHistory);
    })
    
})

