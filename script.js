window.addEventListener("load", ()=>{
    document.getElementById("style-button").addEventListener("click", ()=>{
        var b=document.getElementById("b");
        if(b.style.color==="white"){
            b.style.color="black";
            b.style.background="white";
        }else{
            b.style.color="white";
            b.style.background="black";
        };
    });
})