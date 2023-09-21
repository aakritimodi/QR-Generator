const imgBox = document.querySelector(".img-Box");
const qrImg = document.querySelector("#qrImg");
const inputText = document.querySelector("#input");
const button = document.querySelector("#btn");

function qrGenerator(){
    if(inputText.value.length>0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
        imgBox.classList.add("show-img");
    }else{
        inputText.classList.add('error');
        setTimeout(()=>{
            inputText.classList.remove('error');
        },1000);
        qrImg.src = ""
    }
    
}

button.addEventListener("click", ()=>{
    qrGenerator();
})