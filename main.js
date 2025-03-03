document.querySelectorAll(".slides").forEach(slide =>{
    const items= document.querySelectorAll(".slide-item");
    const buttonHtml = Array.from(items, () =>{
        return `<span class="slide-button"></span>`;
    });

    slide.insertAdjacentHTML("beforeend", `
        
        <div class="slide-nav">

            ${ buttonHtml.join("") }

        </div>

    `);

    const buttons = slide.querySelectorAll(".slide-button");

    buttons.forEach((button, i) => {

        button.addEventListener("click", ()=>{

            items.forEach(item => item.classList.remove("slide-active"));
            buttons.forEach(button => button.classList.remove("slide-button-active"));

            items[i].classList.add("slide-active");
            button.classList.add("slide-button-active");

        });

    });

    items[0].classList.add("slide-active");
    buttons[0].classList.add("slide-button-active");

});


