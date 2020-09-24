let list = ['FFFC31','a','b','c','d','e','f'];
let hex = "";
let reset ="";
document.querySelector("#colorPicker").addEventListener("click", selectColor);
document.querySelector("#reset").addEventListener("click", resetColor);
document.querySelector("#colorInput").addEventListener("input", setColor);
function selectColor(){
    for(let i = 0; i < 6; i++){
    let selector = Math.floor(Math.random()*2);
    biSelector(selector);
    }
}
function setColor(){
    let value = document.querySelector("#colorInput").value;
    document.querySelector("#colorInput").value = value.toLowerCase();
    if(value.length == 6)
        changeColor(value);
}
function resetColor(){
    changeColor(list[0], reset);
}
function biSelector(selector){
    if(selector == 0){
        let number = Math.floor(Math.random()*10);
        combine(number);
        return;
    }
    if(selector == 1){
        let alph = Math.floor(Math.random()*6)+1;
        combine(list[alph]);
        return;
    }
}
function combine(char){
    hex = hex + char;
    if(hex.length == 6){
        let reset = hex;
        changeColor(hex, reset);
        hex = "";
        reset = "";
    }
}
function changeColor(hex, reset){
    document.querySelector("body").style.background = "#" + hex;
    document.querySelector("#colorPicker").style.background = "#" + hex;
    document.querySelector("#reset").style.background = "#" + hex;
    document.querySelector("#colorInput").style.background = "#" + hex;
    document.querySelector("#colorInput").value = reset.toLowerCase();
    document.querySelector("body").classList.add("animation");
}
