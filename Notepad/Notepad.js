document.querySelector("textarea").addEventListener("input",wordCount);
document.querySelector(".fontSelector").addEventListener("change",fontChange);
function wordCount(){
    let text = document.querySelector("textarea").value;
    let count = text.length;
    if(count > 0){
    document.querySelector("#count").innerText = count;
    return;
    }
    if(count==0){
        document.querySelector("#count").innerText = "";
        return;
    }
}
function fontChange(){
    let font = document.querySelector(".fontSelector").value;
    document.querySelector("textarea").style.fontFamily = font;
}
