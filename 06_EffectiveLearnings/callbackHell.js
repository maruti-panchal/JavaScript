const headOne=document.querySelector(".heading1");
const headTwo=document.querySelector(".heading2");
const headThree=document.querySelector(".heading3");
const headFour=document.querySelector(".heading4");
const headFive=document.querySelector(".heading5");
const headSix=document.querySelector(".heading6");
const headSeven=document.querySelector(".heading7");

setTimeout(()=>{
    headOne.textContent="Heading 1";
    headOne.style.color='Red';
    setTimeout(()=>{
        headTwo.textContent="Heading 2";
        headTwo.style.color='Green';
        setTimeout(() => {
            headThree.textContent="Heading 3";
            headThree.style.color='Yellow';
            setTimeout(() => {
                headFour.textContent="Heading 4";
                headFour.style.color='Purple';
                setTimeout(() => {
                    headFive.textContent="Heading Five";
                    headFive.style.color="Blue";
                    setTimeout(() => {
                        headSix.textContent="Heading Six";
                        headSix.style.color="Orange";
                        setTimeout(()=>{
                            headSeven.textContent="Heading Seven";
                            headSeven.style.color="Olive";
                        },1000)
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    },1000)
    
},1000);