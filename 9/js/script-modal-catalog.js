let button=document.querySelector(".catalog__button-basket"),modal=document.querySelector(".modal");button.addEventListener("click",(function(){modal.classList.remove("modal_open"),document.body.style.overflow="hidden"})),window.onclick=function(o){o.target==modal&&(modal.classList.add("modal_open"),document.body.style.overflow="")};