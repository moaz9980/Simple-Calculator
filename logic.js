let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (object) => {
        let value = object.target.innerText; 
        if (value === "AC") {
            string = "";
            input.value = string;
        } else if (value === "=") {
            
            try {
                // Using eval just for learning (not for production projects)
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
            }
        } else {
            string += value;
            input.value = string;
        }
    });
});

