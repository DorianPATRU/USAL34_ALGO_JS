let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let b = document.body;


function clicsurbutton2(){
    let user = document.querySelector("#user")
    let input = document.createElement("INPUT");

    input.setAttribute("type", "text");
    input.setAttribute("id", "participant");
    user.appendChild(input);
}
button2.addEventListener("click", clicsurbutton2);

function getValue() {
    let nombredepart = document.getElementById("saisie").value;
    let participants = document.querySelectorAll("#participant");

    for (let element of participants){
      let texteAffiche = document.createElement('p')
      let contenuTexte = document.createTextNode("Test")
      let test = texteAffiche.appendChild(contenuTexte)

      b.appendChild(test)
    }

}


button1.addEventListener("click", getValue);
