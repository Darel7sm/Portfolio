const newTab = document.getElementById(".socials")
const sections = document.querySelectorAll(".section")

function linkedIn() {
  window.open(
    "https://www.linkedin.com/in/siyabonga-darel-mbokazi-583283214/",
    "_blank"
  );
}

function github() {
  window.open("https://github.com/Darel7sm", "_blank");
}

function email() {
  window.open("mailto: darel7sm@hotmail.com", "_blank");
}

/////////////////////////////////////////////////////////////////////

var typed = new Typed(".typed", {
  strings: [
    "<i>First</i> sentence.",
    "Front-End Developer",
    "React js Developer",
    "Javascript Developer",
    "Node js Developer"
  ],
  typeSpeed: 120,
  backspeed: 100,
  loop: true,
});

////////////////////////////////////////////////////////////////////////

function showList(listId) {
  // Hide all lists
  const lists = document.querySelectorAll(".cert-n-skills > div[id]");
  lists.forEach((list) => {
    list.style.display = "none";
  });

  // Show the selected list
  const selectedList = document.getElementById(listId);
  selectedList.style.display = "block";

  // Set the active class to the clicked paragraph
  const skillsTab = document.querySelectorAll(".mySkills > p");
  skillsTab.forEach((tab) => {
    if (tab.innerText === listId.charAt(0).toUpperCase() + listId.slice(1)) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

function reorderElements() {
  const homeContent = document.querySelector(".home-content");
  const imgContainer = document.querySelector(".img");
  const h2Element = document.querySelector("h2");

  if (window.innerWidth <= 767) {
    // Move the image container after the <h2> element
    homeContent.insertBefore(imgContainer, h2Element.nextSibling);
  } else {
    // Move the image container back to its original position
    imgContainer.insertBefore(imgContainer.firstChild);
  }
}
// Call the function initially to set the initial layout
reorderElements();

// Attach a resize event listener to adjust the layout when the screen size changes
window.addEventListener("resize", reorderElements);


////////////////////////////////////////////////////////////////////////

