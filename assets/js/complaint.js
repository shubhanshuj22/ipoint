const slidePage = document.querySelector(".slidepage");
const firstNextButton = document.querySelector(".nextBtn");
const firstPreviousButton = document.querySelector(".prev-1");
const secondNextButton = document.querySelector(".next-1");
const secondPreviousButton = document.querySelector(".prev-2");
const thirdPreviousButton = document.querySelector(".prev-3");
const thirdNextButton = document.querySelector(".next-2");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const progressBullet = document.querySelectorAll(".step .bullet");
const setname = document.querySelector("#setname");
const productname = document.querySelector("#productname");
const modelname = document.querySelector("#modelname");
const setinfo = document.querySelector(".setinfo");
const setinfo1 = document.querySelector(".setinfo1");
const modelinfo = document.querySelector(".modelinfo");
const issue = document.querySelector(".issue");
const otp = document.querySelector("#otp");
const otplabel = document.querySelector("#otplabel");
const submit = document.querySelector(".Submit");
const phone  = document.querySelector("#phone");
otplabel.style.display = "none";
otp.style.display = "none";
let max = 4;
let current = 1;

firstNextButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if (productname.value==="" || setname.value==="") {
        alert("Please select appropriate value");
    }
    else{
        setinfo.innerHTML = `Device Name : ${setname.value}`;
        slidePage.style.marginLeft = "-25%";
        progressBullet[current-1].classList.add("active");
        progressCheck[current-1].classList.add("active");
        progressText[current-1].classList.add("active");
        current +=1;
    }
})
firstPreviousButton.addEventListener("click",(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "0%";
    current -=1;
    progressBullet[current-1].classList.remove("active");
    progressCheck[current-1].classList.remove("active");
    progressText[current-1].classList.remove("active");
})

secondNextButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if (modelname.value==="") {
        alert("Please select appropriate value");
    }
    else{
        setinfo1.innerHTML = `Device Name : ${setname.value}`;
        modelinfo.innerHTML = `Model Name : ${modelname.value}`;
        slidePage.style.marginLeft = "-50%";
        progressBullet[current-1].classList.add("active");
        progressCheck[current-1].classList.add("active");
        progressText[current-1].classList.add("active");
        current +=1;
    }
})
secondPreviousButton.addEventListener("click",(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "-25%";
    current -=1;
    progressBullet[current-1].classList.remove("active");
    progressCheck[current-1].classList.remove("active");
    progressText[current-1].classList.remove("active");
})

thirdNextButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if (issue.value==="") {
        alert("Please select appropriate value");
    }
    else{
        slidePage.style.marginLeft = "-75%";
        progressBullet[current-1].classList.add("active");
        progressCheck[current-1].classList.add("active");
        progressText[current-1].classList.add("active");
        current +=1;
    }
})

thirdPreviousButton.addEventListener("click",(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "-50%";
    current -=1;
    progressBullet[current-1].classList.remove("active");
    progressCheck[current-1].classList.remove("active");
    progressText[current-1].classList.remove("active");
})

$(document).ready(function(){
    $(".issue").selectpicker();
})

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if (phone.value==="") {
        alert("Please Enter Details");
    }
    else{
        otp.style.display="block";
        otplabel.style.display = "block";
    }
})