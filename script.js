document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.main-nav-ul');
    
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});

function openTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the first button as active when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const firstButton = document.querySelector('.tablinks');
    if (firstButton) {
        firstButton.className += " active";
        // Optionally, you can trigger the associated action
        openTab(null, 'tab1'); // Pass the appropriate tab name
    }
});