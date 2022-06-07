let btn = document.getElementById("btn");
console.log("working");

btn.addEventListener("click",()=>{
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let i1 = 0;
    let i2 = 0;
    for(let i=0;i<input1.length;i++){
        i1+=input1.charCodeAt(i);
    }
    for(let j=0;j<input2.length;j++){
        i2+=input2.charCodeAt(j);
    }
    
    let i3 = i1.toString() + ' ' + i2.toString();
    document.getElementById("input3").value =i3;
})