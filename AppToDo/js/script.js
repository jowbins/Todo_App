let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formValidation();
});

let formValidation = ()=>{
    if (textInput.value === "") {
        console.log("Falhou!");
        msg.innerHTML = "Campo obrigatório!";        
    } else {
        console.log("Sucesso!");
        msg.innerHTML = "";
    }
};

let data = {};

let aceptData = ()=>{
    data.push();

    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
};
