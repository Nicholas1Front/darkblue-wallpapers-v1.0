document.addEventListener('DOMContentLoaded', function () {
    var advertisement = document.querySelector('.advertisement');
    var menuFixed = document.getElementById("menu-fixed");
    
    if (advertisement && (advertisement.offsetHeight === 0 || advertisement.offsetWidth === 0)) {
        document.getElementById("overlay").style.display = "block";
        document.getElementById(popupId).style.display = "block";
        document.body.style.overflow = 'hidden';
    
        menuFixed.style.top = "-200px";
    }
});