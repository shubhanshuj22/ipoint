const datata ='{"Iwatch": {"Apple Watch Series 4": {"Apple Watch Screen|Display Repair &amp; Replacement": 8500}, "Apple Watch Series 5": {"Apple Watch Battery Repair &amp; Replacement": 7500}}, "iPhone": {"iPhone 7": {"Screen|Display Replacement": 4500, "Battery Replacement": 2500, "Charging Flex|Strip Replacement": 2500, "Speaker|Ringer Replacement": 1500, "Mic Replacement": 2500, "Ear Speaker Replacement": 1500, "Back Camra Replacement": 3500, "Front Camera Replacement": 2200}, "iPhone XS": {"Front Camera Replacement": 4500, "Ear Speaker Replacement": 4500, "Battery Replacement": 5500, "Screen|Display Replacement": 15500, "Charging Flex|Strip Replacement": 4500, "Mic Replacement": 5500, "Back Camra Replacement": 5500, "Back Glass Damage": 6500}, "iPhone 11": {"Ear Speaker Replacement": 4500, "Battery Replacement": 5500, "Screen|Display Replacement": 14500, "Charging Flex|Strip Replacement": 5500, "Mic Replacement": 5500, "Back Camra Replacement": 5500, "Back Glass Damage": 6500}, "iPhone 11 Pro Max": {"Ear Speaker Replacement": 6000, "Battery Replacement": 6500, "Screen|Display Replacement": 19500, "Charging Flex|Strip Replacement": 7500, "Mic Replacement": 7500, "Back Camra Replacement": 9500, "Back Glass Damage": 9500}, "iPhone 8": {"Front Camera Replacement": 3000, "Ear Speaker Replacement": 2500, "Battery Replacement": 2500, "Screen|Display Replacement": 6500, "Back Camra Replacement": 3500, "Charging Flex|Strip Replacement": 3500, "Mic Replacement": 3500}, "iPhone 11 Pro": {"Ear Speaker Replacement": 5500, "Battery Replacement": 6500, "Screen|Display Replacement": 18500, "Charging Flex|Strip Replacement": 6500, "Mic Replacement": 6500, "Back Camra Replacement": 7500, "Back Glass Damage": 7500}, "iPhone 8 Pluse": {"Front Camera Replacement": 3500, "Ear Speaker Replacement": 2500, "Battery Replacement": 3000, "Screen|Display Replacement": 7500, "Charging Flex|Strip Replacement": 4000, "Mic Replacement": 4000, "Back Camra Replacement": 5800}, "iPhone 7 Pluse": {"Screen|Display Replacement": 6000, "Battery Replacement": 2500, "Charging Flex|Strip Replacement": 2800, "Speaker|Ringer Replacement": 2500, "Mic Replacement": 3000, "Ear Speaker Replacement": 2500, "Back Camra Replacement": 5500, "Front Camera Replacement": 2500}, "iPhone XR": {"Front Camera Replacement": 3500, "Ear Speaker Replacement": 3500, "Battery Replacement": 5500, "Screen|Display Replacement": 9500, "Charging Flex|Strip Replacement": 3500, "Mic Replacement": 4500, "Back Camra Replacement": 3500, "Back Glass Damage": 5500}, "iPhone XS Max": {"Ear Speaker Replacement": 5500, "Battery Replacement": 6500, "Screen|Display Replacement": 16500, "Charging Flex|Strip Replacement": 5500, "Mic Replacement": 5500, "Back Camra Replacement": 7500, "Back Glass Damage": 7500}, "iPhone X": {"Front Camera Replacement": 5500, "Ear Speaker Replacement": 3500, "Battery Replacement": 3500, "Screen|Display Replacement": 14500, "Charging Flex|Strip Replacement": 4500, "Mic Replacement": 4500, "Back Camra Replacement": 5999, "Back Glass Damage": 4500}, "iPhone 6": {"Screen|Display Replacement": 2500, "Battery Replacement": 2100, "Charging Flex Strip Replacement": 2200, "Speaker Ringer Replacement": 1500, "Mic Replacement": 2200, "Ear Speaker Replacement": 1500, "Front Camera Replacement": 1500}}, "Ipad": {"Ipad Mini": {"Battery Repair &amp; Replacement": 6500, "Charging Flex|Strip Repair &amp; Replacement": 3500, "Speaker|Ringer Repair &amp; Replacement": 1800, "Mic Repair &amp; Replacement": 3000, "Ear Speaker Repair &amp; Replacement": 1900, "Front Camera Repair &amp; Replacement": 2000}, "Ipad Pro": {"Screen|Display Repair &amp; Replacement": 8500, "Battery Repair &amp; Replacement": 7500, "Charging Flex|Strip Repair &amp; Replacement": 4500, "Speaker|Ringer Repair &amp; Replacement": 3500, "Mic Repair &amp; Replacement": 4200, "Ear Speaker Repair &amp; Replacement": 4500, "Front Camera Repair &amp; Replacement": 4800}}, "MacBook": {"MacBook Pro Retina Touch Bar": {"MacBook Pro Screen|Display Repair &amp; Replacement": 28000, "MacBook Pro Motherboard Repair": 9000, "Mac OSX support": 2500, "MacBook Pro Battery &amp; Replacement": 17000, "MacBook Pro Keyboard &amp; Replacement": 16500}, "MacBook Pro": {"MacBook Pro Screen|Display Repair &amp; Replacement": 9500, "MacBook Pro Hard Disk Drive Repair &amp; Replacement": 4500, "MacBook Pro Motherboard Repair": 8500, "MacBook Pro RAM Addition, Repair &amp; Replacement": 4500, "Mac OSX support": 1500, "MacBook Pro Battery &amp; Replacement": 6500, "MacBook Pro Keyboard Repair &amp; Replacement": 3500}, "MacBook Pro Retina": {"MacBook Pro Screen|Display Repair &amp; Replacement": 26000, "MacBook Pro Motherboard Repair": 9500, "Mac OSX support": 2000, "MacBook Pro Battery &amp; Replacement": 9500, "MacBook Pro Keyboard Repair &amp; Replacement": 4500}, "MacBook Air": {"MacBook Screen|Display Repair &amp; Replacement": 9500, "MacBook Hard Disk Drive Repair &amp; Replacement": 6000, "MacBook Motherboard Repair &amp; Replacement": 8000, "MacBook RAM Addition, Repair &amp; Replacement": 3500, "Mac OSX support": 1500, "MacBook Battery Repair &amp; Replacement": 7500, "MacBookPro Keyboard Repair &amp; Replacement": 3500}}}'
var nnn = JSON.parse(datata);            




const slidePage = document.querySelector(".slidepage");
const firstNextButton = document.querySelector(".nextBtn");
const firstPreviousButton = document.querySelector(".prev-1");
const secondNextButton = document.querySelector(".next-1");
const secondPreviousButton = document.querySelector(".prev-2");
const thirdPreviousButton = document.querySelector(".prev-3");
const fourthPreviousButton = document.querySelector(".prev-4");
const thirdNextButton = document.querySelector(".next-2");
const fourthNextButton = document.querySelector(".next-3");
const FinalSubmit = document.querySelector(".next-4");
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
var bill = 0;
const otp = document.querySelector("#otp");
const otplabel = document.querySelector("#otplabel");
const submit = document.querySelector(".Submit");
const phone  = document.querySelector("#phone");
const fullname  = document.querySelector("#fullname");
const email  = document.querySelector("#email");
const address  = document.querySelector("#address");
const pickup  = document.querySelector("#pickup");
// const extraCharge  = document.querySelector("#extraCharge");

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
        document.getElementById("page1").style.display = "None"
        document.getElementById("page2").style.display = "block"
        progressBullet[current-1].classList.add("active");
        progressCheck[current-1].classList.add("active");
        progressText[current-1].classList.add("active");
        current +=1;

        var temp = nnn[setname.value];
        var temp = Object.keys(temp)
        var chch = document.getElementById("modelname")
        ans = '<option value="">Select Model</option> \n';
        for(let i=0;i<temp.length;i++){
            ans+='<option value="'+temp[i]+'">'+temp[i]+'</option> \n'
            // console.log(temp[i])
        }
        chch.innerHTML = ans;
    }

})
firstPreviousButton.addEventListener("click",(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "0%";
    current -=1;
    
    document.getElementById("page2").style.display = "None"
    document.getElementById("page1").style.display = "block"
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
        
        document.getElementById("page2").style.display = "None"
        document.getElementById("page3").style.display = "block"
        setinfo1.innerHTML = `Device Name : ${setname.value}`;
        modelinfo.innerHTML = `Model Name : ${modelname.value}`;
        slidePage.style.marginLeft = "-50%";
        progressBullet[current-1].classList.add("active");
        progressCheck[current-1].classList.add("active");
        progressText[current-1].classList.add("active");
        current +=1;

        var temp = nnn[setname.value][modelname.value];
        var temp = Object.keys(temp)
        $('.issue')
        .find('option')
        .remove()
        .end()
        ;
        
        $(".issue").selectpicker('refresh');
        $('#issue').append(`<option value="">Select Issue</option> `)

        // chch.innerHTML = ans;
        // var chch = document.getElementsByClassName("issue")
        // ans = '<option value="">Select Issue</option> \n';
        // chch.innerHTML = ans;

        for(let i=0;i<temp.length;i++){
            // ans+='<option value='+temp[i]+'>'+temp[i]+'</option> \n'
            $('#issue').append(`<option value="${temp[i]}">${temp[i]} </option>`)
            // console.log(temp[i])
        }
        // console.log(ans)
        // chch.innerHTML = ans;
        
    $(".issue").selectpicker('refresh');
    }

})
secondPreviousButton.addEventListener("click",(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "-25%";
    current -=1;
    
    document.getElementById("page3").style.display = "None"
    document.getElementById("page2").style.display = "block"
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
        
        
        var temp = document.getElementsByClassName("filter-option-inner-inner")
        var strArr = temp[0]["innerHTML"].split(", ")
        console.log(strArr)
        var ans = 0;
        for(var i=0;i<strArr.length;i++){
            var x = nnn[setname.value][modelname.value][strArr[i]];
            
            console.log(x);
            ans+=parseInt(x)
        }
        console.log(ans)
        bill = ans;
        var r = confirm("Approx charges for select issues is : Rs. "+ans+". Do you want to continue?");
        if(r==true){
            
            document.getElementById("bill").value = bill;
            document.getElementById("page3").style.display = "None"
            document.getElementById("page5").style.display = "block"
            slidePage.style.marginLeft = "-75%";
            progressBullet[current-1].classList.add("active");
            progressCheck[current-1].classList.add("active");
            progressText[current-1].classList.add("active");
            current +=1;
            $(document).keypress(
                function(event){
                if (event.which == '13') {
                    event.preventDefault();
                }
            });
    }
    }
})

thirdPreviousButton.addEventListener("click",(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "-50%";
    current -=1;
    
    document.getElementById("page4").style.display = "None"
    document.getElementById("page3").style.display = "block"
    progressBullet[current-1].classList.remove("active");
    progressCheck[current-1].classList.remove("active");
    progressText[current-1].classList.remove("active");
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

fourthNextButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if (otp.value==="") {
        alert("Please Enter Otp");
    }
    else{
        document.getElementById("page4").style.display = "None"
        document.getElementById("page5").style.display = "block"
        slidePage.style.marginLeft = "-75%";
        progressBullet[current-1].classList.add("active");
        progressCheck[current-1].classList.add("active");
        progressText[current-1].classList.add("active");
        current +=1;
    }
})
fourthPreviousButton.addEventListener("click",(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "-50%";
    current -=1;
    
    document.getElementById("page5").style.display = "None"
    document.getElementById("page3").style.display = "block"
    progressBullet[current-1].classList.remove("active");
    progressCheck[current-1].classList.remove("active");
    progressText[current-1].classList.remove("active");
})

pickup.addEventListener("click",(e)=>{
    var extraCharge = document.getElementById("extraCharge")
    if (pickup.checked == true){
        address.disabled = false;
        address.required = true;
        
        address.value = "";

    }
    else{
        address.disabled = true;
        address.required = false;
        
        address.value = "GF-16, LSC, PLOT NO.-10, NEW RAJHDHANI ENCLAVE, PREET VIHAR, NEW DELHI, Delhi, India 110092";
    }
})
FinalSubmit.addEventListener("click",(e)=>{
    if(address.value=="" || fullname.value=="" || email.valuconst datata ='{"Iwatch": {"Apple Watch Series 4": {"Apple Watch Screen|Display Repair &amp; Replacement": 8500}, "Apple Watch Series 5": {"Apple Watch Battery Repair &amp; Replacement": 7500}}, "iPhone": {"iPhone 7": {"Screen|Display Replacement": 4500, "Battery Replacement": 2500, "Charging Flex|Strip Replacement": 2500, "Speaker|Ringer Replacement": 1500, "Mic Replacement": 2500, "Ear Speaker Replacement": 1500, "Back Camra Replacement": 3500, "Front Camera Replacement": 2200}, "iPhone XS": {"Front Camera Replacement": 4500, "Ear Speaker Replacement": 4500, "Battery Replacement": 5500, "Screen|Display Replacement": 15500, "Charging Flex|Strip Replacement": 4500, "Mic Replacement": 5500, "Back Camra Replacement": 5500, "Back Glass Damage": 6500}, "iPhone 11": {"Ear Speaker Replacement": 4500, "Battery Replacement": 5500, "Screen|Display Replacement": 14500, "Charging Flex|Strip Replacement": 5500, "Mic Replacement": 5500, "Back Camra Replacement": 5500, "Back Glass Damage": 6500}, "iPhone 11 Pro Max": {"Ear Speaker Replacement": 6000, "Battery Replacement": 6500, "Screen|Display Replacement": 19500, "Charging Flex|Strip Replacement": 7500, "Mic Replacement": 7500, "Back Camra Replacement": 9500, "Back Glass Damage": 9500}, "iPhone 8": {"Front Camera Replacement": 3000, "Ear Speaker Replacement": 2500, "Battery Replacement": 2500, "Screen|Display Replacement": 6500, "Back Camra Replacement": 3500, "Charging Flex|Strip Replacement": 3500, "Mic Replacement": 3500}, "iPhone 11 Pro": {"Ear Speaker Replacement": 5500, "Battery Replacement": 6500, "Screen|Display Replacement": 18500, "Charging Flex|Strip Replacement": 6500, "Mic Replacement": 6500, "Back Camra Replacement": 7500, "Back Glass Damage": 7500}, "iPhone 8 Pluse": {"Front Camera Replacement": 3500, "Ear Speaker Replacement": 2500, "Battery Replacement": 3000, "Screen|Display Replacement": 7500, "Charging Flex|Strip Replacement": 4000, "Mic Replacement": 4000, "Back Camra Replacement": 5800}, "iPhone 7 Pluse": {"Screen|Display Replacement": 6000, "Battery Replacement": 2500, "Charging Flex|Strip Replacement": 2800, "Speaker|Ringer Replacement": 2500, "Mic Replacement": 3000, "Ear Speaker Replacement": 2500, "Back Camra Replacement": 5500, "Front Camera Replacement": 2500}, "iPhone XR": {"Front Camera Replacement": 3500, "Ear Speaker Replacement": 3500, "Battery Replacement": 5500, "Screen|Display Replacement": 9500, "Charging Flex|Strip Replacement": 3500, "Mic Replacement": 4500, "Back Camra Replacement": 3500, "Back Glass Damage": 5500}, "iPhone XS Max": {"Ear Speaker Replacement": 5500, "Battery Replacement": 6500, "Screen|Display Replacement": 16500, "Charging Flex|Strip Replacement": 5500, "Mic Replacement": 5500, "Back Camra Replacement": 7500, "Back Glass Damage": 7500}, "iPhone X": {"Front Camera Replacement": 5500, "Ear Speaker Replacement": 3500, "Battery Replacement": 3500, "Screen|Display Replacement": 14500, "Charging Flex|Strip Replacement": 4500, "Mic Replacement": 4500, "Back Camra Replacement": 5999, "Back Glass Damage": 4500}, "iPhone 6": {"Screen|Display Replacement": 2500, "Battery Replacement": 2100, "Charging Flex Strip Replacement": 2200, "Speaker Ringer Replacement": 1500, "Mic Replacement": 2200, "Ear Speaker Replacement": 1500, "Front Camera Replacement": 1500}}, "Ipad": {"Ipad Mini": {"Battery Repair &amp; Replacement": 6500, "Charging Flex|Strip Repair &amp; Replacement": 3500, "Speaker|Ringer Repair &amp; Replacement": 1800, "Mic Repair &amp; Replacement": 3000, "Ear Speaker Repair &amp; Replacement": 1900, "Front Camera Repair &amp; Replacement": 2000}, "Ipad Pro": {"Screen|Display Repair &amp; Replacement": 8500, "Battery Repair &amp; Replacement": 7500, "Charging Flex|Strip Repair &amp; Replacement": 4500, "Speaker|Ringer Repair &amp; Replacement": 3500, "Mic Repair &amp; Replacement": 4200, "Ear Speaker Repair &amp; Replacement": 4500, "Front Camera Repair &amp; Replacement": 4800}}, "MacBook": {"MacBook Pro Retina Touch Bar": {"MacBook Pro Screen|Display Repair &amp; Replacement": 28000, "MacBook Pro Motherboard Repair": 9000, "Mac OSX support": 2500, "MacBook Pro Battery &amp; Replacement": 17000, "MacBook Pro Keyboard &amp; Replacement": 16500}, "MacBook Pro": {"MacBook Pro Screen|Display Repair &amp; Replacement": 9500, "MacBook Pro Hard Disk Drive Repair &amp; Replacement": 4500, "MacBook Pro Motherboard Repair": 8500, "MacBook Pro RAM Addition, Repair &amp; Replacement": 4500, "Mac OSX support": 1500, "MacBook Pro Battery &amp; Replacement": 6500, "MacBook Pro Keyboard Repair &amp; Replacement": 3500}, "MacBook Pro Retina": {"MacBook Pro Screen|Display Repair &amp; Replacement": 26000, "MacBook Pro Motherboard Repair": 9500, "Mac OSX support": 2000, "MacBook Pro Battery &amp; Replacement": 9500, "MacBook Pro Keyboard Repair &amp; Replacement": 4500}, "MacBook Air": {"MacBook Screen|Display Repair &amp; Replacement": 9500, "MacBook Hard Disk Drive Repair &amp; Replacement": 6000, "MacBook Motherboard Repair &amp; Replacement": 8000, "MacBook RAM Addition, Repair &amp; Replacement": 3500, "Mac OSX support": 1500, "MacBook Battery Repair &amp; Replacement": 7500, "MacBookPro Keyboard Repair &amp; Replacement": 3500}}}'
var nnn = JSON.parse(datata);            




const slidePage = document.querySelector(".slidepage");
const firstNextButton = document.querySelector(".nextBtn");
const firstPreviousButton = document.querySelector(".prev-1");
const secondNextButton = document.querySelector(".next-1");
const secondPreviousButton = document.querySelector(".prev-2");
const thirdPreviousButton = document.querySelector(".prev-3");
const fourthPreviousButton = document.querySelector(".prev-4");
const thirdNextButton = document.querySelector(".next-2");
const fourthNextButton = document.querySelector(".next-3");
const FinalSubmit = document.querySelector(".next-4");
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
var bill = 0;
const otp = document.querySelector("#otp");
const otplabel = document.querySelector("#otplabel");
const submit = document.querySelector(".Submit");
const phone  = document.querySelector("#phone");
const fullname  = document.querySelector("#fullname");
const email  = document.querySelector("#email");
const address  = document.querySelector("#address");
const pickup  = document.querySelector("#pickup");
// const extraCharge  = document.querySelector("#extraCharge");

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
        document.getElementById("page1").style.display = "None"
        document.getElementById("page2").style.display = "block"
        progressBullet[current-1].classList.add("active");
        progressCheck[current-1].classList.add("active");
        progressText[current-1].classList.add("active");
        current +=1;

        var temp = nnn[setname.value];
        var temp = Object.keys(temp)
        var chch = document.getElementById("modelname")
        ans = '<option value="">Select Model</option> \n';
        for(let i=0;i<temp.length;i++){
            ans+='<option value="'+temp[i]+'">'+temp[i]+'</option> \n'
            // console.log(temp[i])
        }
        chch.innerHTML = ans;
    }

})
firstPreviousButton.addEventListener("click",(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "0%";
    current -=1;
    
    document.getElementById("page2").style.display = "None"
    document.getElementById("page1").style.display = "block"
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
        
        document.getElementById("page2").style.display = "None"
        document.getElementById("page3").style.display = "block"
        setinfo1.innerHTML = `Device Name : ${setname.value}`;
        modelinfo.innerHTML = `Model Name : ${modelname.value}`;
        slidePage.style.marginLeft = "-50%";
        progressBullet[current-1].classList.add("active");
        progressCheck[current-1].classList.add("active");
        progressText[current-1].classList.add("active");
        current +=1;

        var temp = nnn[setname.value][modelname.value];
        var temp = Object.keys(temp)
        $('.issue')
        .find('option')
        .remove()
        .end()
        ;
        
        $(".issue").selectpicker('refresh');
        $('#issue').append(`<option value="">Select Issue</option> `)

        // chch.innerHTML = ans;
        // var chch = document.getElementsByClassName("issue")
        // ans = '<option value="">Select Issue</option> \n';
        // chch.innerHTML = ans;

        for(let i=0;i<temp.length;i++){
            // ans+='<option value='+temp[i]+'>'+temp[i]+'</option> \n'
            $('#issue').append(`<option value="${temp[i]}">${temp[i]} </option>`)
            // console.log(temp[i])
        }
        // console.log(ans)
        // chch.innerHTML = ans;
        
    $(".issue").selectpicker('refresh');
    }

})
secondPreviousButton.addEventListener("click",(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "-25%";
    current -=1;
    
    document.getElementById("page3").style.display = "None"
    document.getElementById("page2").style.display = "block"
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
        
        
        var temp = document.getElementsByClassName("filter-option-inner-inner")
        var strArr = temp[0]["innerHTML"].split(", ")
        console.log(strArr)
        var ans = 0;
        for(var i=0;i<strArr.length;i++){
            var x = nnn[setname.value][modelname.value][strArr[i]];
            
            console.log(x);
            ans+=parseInt(x)
        }
        console.log(ans)
        bill = ans;
        var r = confirm("Approx charges for select issues is : Rs. "+ans+". Do you want to continue?");
        if(r==true){
            
            document.getElementById("bill").value = bill;
            document.getElementById("page3").style.display = "None"
            document.getElementById("page5").style.display = "block"
            slidePage.style.marginLeft = "-75%";
            progressBullet[current-1].classList.add("active");
            progressCheck[current-1].classList.add("active");
            progressText[current-1].classList.add("active");
            current +=1;
            $(document).keypress(
                function(event){
                if (event.which == '13') {
                    event.preventDefault();
                }
            });
    }
    }
})

thirdPreviousButton.addEventListener("click",(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "-50%";
    current -=1;
    
    document.getElementById("page4").style.display = "None"
    document.getElementById("page3").style.display = "block"
    progressBullet[current-1].classList.remove("active");
    progressCheck[current-1].classList.remove("active");
    progressText[current-1].classList.remove("active");
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

fourthNextButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if (otp.value==="") {
        alert("Please Enter Otp");
    }
    else{
        document.getElementById("page4").style.display = "None"
        document.getElementById("page5").style.display = "block"
        slidePage.style.marginLeft = "-75%";
        progressBullet[current-1].classList.add("active");
        progressCheck[current-1].classList.add("active");
        progressText[current-1].classList.add("active");
        current +=1;
    }
})
fourthPreviousButton.addEventListener("click",(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "-50%";
    current -=1;
    
    document.getElementById("page5").style.display = "None"
    document.getElementById("page3").style.display = "block"
    progressBullet[current-1].classList.remove("active");
    progressCheck[current-1].classList.remove("active");
    progressText[current-1].classList.remove("active");
})

pickup.addEventListener("click",(e)=>{
    var extraCharge = document.getElementById("extraCharge")
    if (pickup.checked == true){
        address.disabled = false;
        address.required = true;
        
        address.value = "";

    }
    else{
        address.disabled = true;
        address.required = false;
        
        address.value = "GF-16, LSC, PLOT NO.-10, NEW RAJHDHANI ENCLAVE, PREET VIHAR, NEW DELHI, Delhi, India 110092";
    }
})
FinalSubmit.addEventListener("click",(e)=>{
    if(address.value=="" || fullname.value=="" || email.value==""){
        alert("Every Field is requied")
    }
    else{
        
    alert("Subbmitted");
    }
})













// Addtional Add

e==""){
        alert("Every Field is requied")
    }
    else{
        
    alert("Subbmitted");
    }
})













// Addtional Add

