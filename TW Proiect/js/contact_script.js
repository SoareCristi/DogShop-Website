const inpNume = document.getElementById("nume");
const sectionName = document.getElementById("js_create_name");
ok = false;

function submit_name(){
    const nume = inpNume.value;
    if (nume){
        localStorage.setItem("nume", nume);
        if (ok == false){
            ok = true;
            var string = "Multumim ca ne-ai contactat, " + localStorage.getItem("nume") + "!\nAi omis ceva?";
            var p = document.createElement("P");
            p.innerText = string;
            p.style.fontWeight = "600";
            p.style.color = "#0b545f";
            sectionName.appendChild(p);
        }
    }
}