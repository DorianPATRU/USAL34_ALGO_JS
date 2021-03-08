let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
console.log(button2)



function clicsurbutton2(){
    let test = document.querySelector("#test")
    let input = document.createElement("INPUT");

    input.setAttribute("type", "text");
    test.appendChild(input );

}


button2.addEventListener("click", clicsurbutton2);
