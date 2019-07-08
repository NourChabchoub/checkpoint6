function changeSize(){


var val=document.getElementById("size").value;
console.log(val);
document.getElementById("myText").style.fontSize=val;

}
 function makeBold(){
     document.getElementById("myText").style.fontWeight="bold";
 }
 function makeItalic(){
    document.getElementById("myText").style.fontStyle="italic";
}
function makeUnderline(){
    document.getElementById("myText").style.textDecoration="underline";
}

function changePolice(){
var val=document.getElementById("police").value;
document.getElementById("myText").style.fontFamily=val;
}





