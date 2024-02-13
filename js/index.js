const navbar = document.querySelector(".navbar");
const topBtn = document.getElementById("topBtn");
const navbarMenu = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const closeNavLink = document.querySelectorAll(".close_nav");

// NAVBAR SCROLL ANIMATION
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("animate");
    topBtn.classList.add("icon-animate");
  } else {
    navbar.classList.remove("animate");
    topBtn.classList.remove("icon-animate");
  }
});

// Add click event listener to each nav link
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    // Remove active class from all nav links
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    // Add active class to the clicked nav link
    this.classList.add("active");
  });
});


// CLOSE NAVBAR MENU WHEN USER CLICK ON NAV LINK
closeNavLink.forEach(element => {
    element.addEventListener('click' , () => {
        navbarMenu.classList.remove('show')
    })
})

// TOP BTN ANIMATION

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topBtn.classList.add("icon-animate");
  } else {
    topBtn.classList.remove("icon-animate");
  }
});

const scrollAnimation = () => {
  const windowHeight = window.innerHeight;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientScroll = document.documentElement.scrollTop;
  const currentScroll = (clientScroll / (scrollHeight - windowHeight)) * 100;

  const gradientColor = `conic-gradient(#2fbf71 ${currentScroll}%, #ffffff1a ${currentScroll}%)`;

  // Apply the gradient background to the button
  topBtn.style.background = gradientColor;
};

// Add event listener to update the gradient on scroll
window.addEventListener("scroll", scrollAnimation);
