const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});


const optionMenu2 = document.querySelector(".select-menu2"),
       selectBtn2 = optionMenu2.querySelector(".select-btn"),
       options2 = optionMenu2.querySelectorAll(".option"),
       sBtn_text2 = optionMenu2.querySelector(".sBtn-text");

selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));       

options2.forEach(option2 =>{
    option2.addEventListener("click", ()=>{
        let selectedOption2 = option2.querySelector(".option-text").innerText;
        sBtn_text2.innerText = selectedOption2;

        optionMenu2.classList.remove("active");
    });
});


const mosquitoButton=document.querySelector(".mosquitoAlteration").style.transform="translate(500px,0px )"

