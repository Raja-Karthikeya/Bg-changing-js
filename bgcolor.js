let input1=document.getElementById("bgcolor")
let input2=document.getElementById("bradius")
let image=document.querySelector("img")

function color(a){
    console.log(a)
    if(a.key==="Enter"){
        document.body.style.backgroundColor=`${input1.value}`
    }
}

function bradius(a){
    console.log(a)
    if(a.key==="Enter"){
        image.style.borderRadius=`${input2.value}px`
    }
}