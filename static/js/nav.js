document.getElementById("name-container").setAttribute("style","display:none");var position=$(window).scrollTop();function scrollToTop(){document.getElementsByClassName("menus_items")[1].setAttribute("style",""),document.getElementById("name-container").setAttribute("style","display:none"),btf.scrollToDest(0,500)}$(window).scroll((function(){var e=$(window).scrollTop();e>position?(document.getElementById("name-container").setAttribute("style",""),document.getElementsByClassName("menus_items")[1].setAttribute("style","display:none!important")):(document.getElementsByClassName("menus_items")[1].setAttribute("style",""),document.getElementById("name-container").setAttribute("style","display:none")),position=e})),document.getElementById("page-name").innerText=document.title.split(" | Fomalhaut🥝")[0];