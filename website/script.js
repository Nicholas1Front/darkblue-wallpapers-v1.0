
// Função para mostrar o popup
function showPopup(popupId) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById(popupId).style.display = "block";
    var menuFixed = document.getElementById("menu-fixed");

    menuFixed.style.top = "-200px";

    
}

// Função para fechar o popup
function closePopup(popupId) {
    document.getElementById("overlay").style.display = "none";
    document.getElementById(popupId).style.display = "none";
    var menuFixed = document.getElementById("menu-fixed");

    menuFixed.style.top = "0";
}

//Função para ativar o menu fixado 
window.addEventListener("scroll", function() {

  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var menuNonFixed = document.getElementById("menu-non-fixed");
  var menuFixed = document.getElementById("menu-fixed");

  var scrollThreshold = 120; 

  if (scrollTop > scrollThreshold) {
      menuFixed.style.top = "0";
      menuNonFixed.style.top = "-200px";
  } else {
      menuFixed.style.top = "-200px";
      menuNonFixed.style.top = "0";
  }
});


//Função que rola até uma section especifica
function scrollToSection(event) {
  event.preventDefault();

  var targetId = this.getAttribute("href").substring(1);

  var targetSection = document.getElementById(targetId);

  if (targetSection) {

      window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
      });
    }
  }

  var menuLinksFixed = document.querySelectorAll("#menu-fixed a");

  menuLinksFixed.forEach(function(link) {
    link.addEventListener("click", scrollToSection);
  
  var menuLinksNonFixed = document.querySelectorAll("#menu-non-fixed a");
  
  menuLinksNonFixed.forEach(function(link){
    link.addEventListener("click", scrollToSection);
  })
});