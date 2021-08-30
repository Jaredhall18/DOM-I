const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//Adding Nav Content
// Linking each Anchor to a new variable using nextElement.
const navText1 = document.querySelector('nav a');
const navText2 = navText1.nextElementSibling;
const navText3 = navText2.nextElementSibling;
const navText4 = navText3.nextElementSibling;
const navText5 = navText4.nextElementSibling;
const navText6 = navText5.nextElementSibling;
//Linking variables for each Anchor tag to Objects within siteContent Array
navText1.textContent = siteContent['nav']['nav-item-1'];
navText1.style.color = 'green';
navText2.textContent = siteContent['nav']['nav-item-2'];
navText2.style.color = 'green';
navText3.textContent = siteContent['nav']['nav-item-3'];
navText3.style.color = 'green';
navText4.textContent = siteContent['nav']['nav-item-4'];
navText4.style.color = 'green';
navText5.textContent = siteContent['nav']['nav-item-5'];
navText5.style.color = 'green';
navText6.textContent = siteContent['nav']['nav-item-6'];
navText6.style.color = 'green';


//Append and Prepend new Nav Options
const news = document.createElement('a');
news.textContent = 'News';
news.href = '#';
document.querySelector('nav').append(news);
news.style.color = "green";

const blog = document.createElement('a');
blog.textContent = 'Blog';
blog.href = '#';
document.querySelector('nav').prepend(blog);
blog.style.color = "green";


// Call to Action Content Block
const sectionOne = document.querySelector('.cta');
const titleSectionOne = sectionOne.querySelector('h1');
titleSectionOne.textContent = siteContent['cta']['h1'];
//titleSectionOne.innerHTML = Dom<br> i
const buttonSectionOne = sectionOne.querySelector('button');
buttonSectionOne.textContent = siteContent['cta']['button'];

//Call to Action Image
const ctaImage = sectionOne.querySelector('img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

//Main  Content Text Block
//Features Text
const sectionTwo = document.querySelector('.text-content');
const featuresHead = sectionTwo.querySelector('h4');
featuresHead.textContent = siteContent['main-content']['features-h4'];

const featuresBody = sectionTwo.querySelector('p');
featuresBody.textContent = siteContent['main-content']['features-content'];

//Content Text
const contentBlock2 = sectionTwo.nextElementSibling;
const aboutHead = contentBlock2.querySelector('h4');
aboutHead.textContent = siteContent['main-content']['about-h4'];

const aboutBody = contentBlock2.querySelector('p');
aboutBody.textContent = siteContent['main-content']['about-content'];

//Middle Image
const mainImage = document.querySelector('.middle-img');
mainImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Services Text
// const services = contentBlock2.nextElementSibling;
// const servicesHead = services.querySelector('h4');
// servicesHead.textContent = siteContent['main-content']['services-h4'];
// const services = document.querySelector('.bottom-content', '.text-content');
// const servicesHead = services.querySelector('h4');
// servicesHead.textContent = siteContent['main-content']['services-h4'];

// const servicesBody = services.querySelector('p');
// servicesBody.textContent = siteContent['main-content']['services-content'];
// // Products Text
// const products = services.nextElementSibling;
// const productHead = products.querySelector('h4');
// productHead.textContent = siteContent['main-content']['product-h4'];

// const productBody = products.querySelector('p');
// productBody.textContent = siteContent['main-content']['product-content'];
//Visions Text

//Contact Section
const contactSection = document.querySelector('.contact');
const contactHeader = contactSection.querySelector('h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

contactSection.querySelector('p').innerHTML = '123 Way 456 Street <br> Somewhere, USA'
const phone = contactSection.querySelector('p').nextElementSibling;
phone.textContent = siteContent['contact']['phone'];
const email = phone.nextElementSibling;
email.textContent = siteContent['contact']['email'];

//Footer Section
const bottomFooter = document.querySelector('footer');
const copyright = bottomFooter.querySelector('p');
copyright.textContent = siteContent['footer']['copyright'];