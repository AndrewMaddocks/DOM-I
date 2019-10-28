const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM<br> Is<br> Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street<br> Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo

//nav
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navLinks = document.querySelectorAll("a");
navLinks.forEach(
  (currentValue, i) =>
    (currentValue.textContent = Object.values(siteContent.nav)[i])
);

navLinks.forEach(item => (item.style.color = "green"));

const addLink = document.querySelector("nav");
const newAtag = document.createElement("a");

newAtag.textContent = "HeLLo";
newAtag.href = "#";
newAtag.style.color = "green";
addLink.appendChild(newAtag);

const newTag = document.createElement("a");
newTag.textContent = "ANDREW";
newTag.href = "#";
newTag.style.color = "green";
addLink.prepend(newTag);

//header
let CtaImg = document.getElementById("cta-img");
CtaImg.setAttribute("src", siteContent["cta"]["img-src"]);

document.querySelector("h1").innerHTML = siteContent.cta["h1"];
document.querySelector("button").textContent = siteContent.cta["button"];

let getStarted = document.querySelector("button");
getStarted.addEventListener("click", event => {
  let question = prompt("Is Vick Javariz your favorite TL?");
  if (question === "yes") {
    alert("you are going to heaven");
  } else if (question === "no") {
    alert("you are going to hell");
  } else alert("PUT YES OR NO!");
});

//main-content
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const headingList = document.querySelectorAll("h4");

headingList[0].textContent = siteContent["main-content"]["features-h4"];
headingList[1].textContent = siteContent["main-content"]["about-h4"];
headingList[2].textContent = siteContent["main-content"]["services-h4"];
headingList[3].textContent = siteContent["main-content"]["product-h4"];
headingList[4].textContent = siteContent["main-content"]["vision-h4"];

mainContentText = document.querySelectorAll(".text-content p");

mainContentText[0].textContent =
  siteContent["main-content"]["features-content"];
mainContentText[1].textContent = siteContent["main-content"]["about-content"];
mainContentText[2].textContent =
  siteContent["main-content"]["services-content"];
mainContentText[3].textContent = siteContent["main-content"]["product-content"];
mainContentText[4].textContent = siteContent["main-content"]["vision-content"];

//bottom section
headingList[5].textContent = siteContent["contact"]["contact-h4"];

contactText = document.querySelectorAll(".contact p");

contactText[0].innerHTML = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

//footer
document.querySelector("footer p").textContent =
  siteContent["footer"]["copyright"];
