var input1 = document.getElementById('input1');
var btn = document.getElementById('btn');
var para = document.getElementById('para');

btn.addEventListener('click',function(){
    para.style.display='block';
    if(input1.value.length ===0){
        para.innerHTML="Please Enter Something in Input Box."
    }else{
        para.innerHTML = input1.value.split('').map((c)=> c===c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
    }
})