const button = document.querySelectorAll("button");
var input = document.querySelector(".calculation-section");

console.log(input);
var s = "";
var arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        // .target unhi element mai lage skte hai jo ekk current event hooo.
        var val = e.target.innerHTML;
        if (val == "=") {
            s = eval(s);
        }
        else if (val == "DEL") {
            s = s.substring(0,s.length-1);
        }
        else if (val == "AC") {
            s = "";
        }
        else {
            s += val;
        }
        input.value = s;
    })
})

