const header = document.querySelector("#myHeader");
const top_area = document.querySelector(".header_top_area");
const bottom_area = document.querySelector(".header_bottom_area");
const btm_first_area = document.querySelector("#pc_nav");
const _bars = document.querySelector(".bar__close");
const _btn_close = document.querySelector(".close-button");
const close_icon = document.querySelector(".icon-close");
const bars_icon = document.querySelector(".icon-bars");
const input_search = document.querySelector("#phone--search");
const fade = document.querySelector(".fade_");
let _closed = true;

[_bars,_btn_close].forEach(e => {
    e.addEventListener("click", (e) => {
        if(_closed) {
            open_menu();
        } else {
            close_menu();
        }
    })
});
[_bars,_btn_close].forEach(e => {
    e.addEventListener("keydown", (e) => {
       if((e.key === "Enter" || e.key === " ")) {
           if(_closed) {
               open_menu();
           } else {
               close_menu();
           }
       } 
    })
});

window.addEventListener("resize", () => {
    if( !(document.activeElement == input_search) && !(_closed) ) {
            close_menu();
    }
})

document.addEventListener("click", (event) => {
    if(!top_area.contains(event.target) && !bottom_area.contains(event.target) && !(_closed)) {
            close_menu();

    }
})


const animated_bullet = document.createElement("div");
animated_bullet.className = "animate_bullet";

const open_menu = () => {
    bottom_area.classList.add("header_bottom_area_transform")
    top_area.appendChild(animated_bullet);
        bars_icon.style.scale = "0";
        close_icon.style.scale = "1";
        fade.style.display = "block";
        _closed = false;
}
const close_menu = () => {
    bottom_area.classList.remove("header_bottom_area_transform")
    top_area.removeChild(animated_bullet);
        bars_icon.style.scale = "1";
        close_icon.style.scale = "0";
        fade.style.display = "none";
        _closed = true;
}
