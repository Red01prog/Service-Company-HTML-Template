
//menu bar
let btn2 = document.getElementById('btn2');
let btnexit = document.getElementById('btnexit');
 btn2.onclick = function(){
        menu.style.right = '0';
        btn2.style.display = 'none';
        btnexit.style.display = 'block';
}
btnexit.onclick = function(){
        menu.style.right = '-180px';
        btn2.style.display = 'block';
        btnexit.style.display = 'none';
}
//theme bar
let theme = document.getElementById('theme');
let forthe = document.getElementById('forthe');
theme.onmouseover = function(){
    forthe.style.display = 'flex';
}
forthe.onmouseover = function(){
    forthe.style.display = 'flex';
}
forthe.onmouseout = function(){
    forthe.style.display = 'none';
}
//animation 
let div2 = document.querySelector('.div2');
let div4 = document.querySelector('.div4');
let box = document.querySelectorAll('.box');
function animation2(){
        let height1 = div4.offsetHeight;
        let topp2 = div4.offsetTop - 100;
       if(window.scrollY  >= topp2 && window.scrollY  < height1 + topp2  ){
        box.forEach((box) => {
            box.classList.add('animate2');     
        }) 
     }
};
let sect = document.querySelectorAll('.div');
function animation1(){
    sect.forEach(sect => {
        let height = sect.offsetHeight;
        let topp = sect.offsetTop - 100;
       if(window.scrollY  >= topp && window.scrollY  < height + topp  ){
        sect.classList.add('animate2');
        
       }
    })    
};
// Cache commonly used elements
const contentOf1 = document.querySelector('.content-of-1');
const contentOf2 = document.querySelector('.content-of-2');
const aboutList1 = document.querySelectorAll('.about-list1');
const aboutList2 = document.querySelectorAll('.about-list2');
const goals = document.getElementById('goals');
const qualities = document.getElementById('qualities');
const aboutImage = document.querySelector('.about-img');

// Utility function to add a class to all elements in a NodeList
function addClassToAll(nodeList, className) {
    nodeList.forEach(element => {
        element.classList.add(className);
    });
}

// Optimized to use the utility function
function showIt1() {
    let height = div2.offsetHeight;
    let topp = div2.offsetTop - 100;
    if (window.scrollY >= topp && window.scrollY < height + topp) {
        addClassToAll(aboutList1, 'get-in');
    }
}

function showIt2() {
    addClassToAll(aboutList2, 'get-in');
}

// Adjusting the 'onclick' functions for 'goals' and 'qualities' for clarity and reuse
goals.onclick = function() {
    adjustContentHeight('8%', '92%', 'switch', 'switch2');
    showIt2();
};

qualities.onclick = function() {
    adjustContentHeight('92%', '8%', 'switch2', 'switch');
};

// Function to adjust content heights and toggle image classes
function adjustContentHeight(height1, height2, addClass, removeClass) {
    contentOf1.style.height = height1;
    contentOf2.style.height = height2;
    aboutImage.classList.add(addClass);
    aboutImage.classList.remove(removeClass);
}

// Additional considerations:
// - Consider throttling `showIt1` execution if it's attached to a 'scroll' event for performance.

// Cache commonly used elements
const sections = {
    home: document.querySelectorAll('.home'),
    about: document.querySelectorAll('.about'),
    services: document.querySelectorAll('.services'),
    contacts: document.querySelectorAll('.contacts'),
    review: document.querySelectorAll('.review')
};

// Function to handle smooth scrolling to specific sections
function scrollToSection(offset) {
    window.scroll({
        top: offset,
        behavior: "smooth"
    });
}

// Adjust offsets for different screen sizes
function getOffsetForSection(section) {
    // Define default offsets for a standard screen
    const offsets = {
        home: 0,
        about: 700,
        services: 2100,
        contacts: 2660,
        review: 3180
    };

    // Adjust offsets for phone screens (max-width: 480px)
    if (window.matchMedia("(max-width: 480px)").matches) {
        // Example adjustments, customize these based on your actual layout
        Object.assign(offsets, {
            about: 800,
            services: 3500,
            contacts: 5050,
            review: 6500
        });
    }

    return offsets[section];
}

// Function to attach event listeners to each section
function attachEventListeners() {
    Object.keys(sections).forEach(section => {
        sections[section].forEach(item => {
            item.addEventListener('click', () => scrollToSection(getOffsetForSection(section)));
        });
    });
}

// Initialize the event listeners
attachEventListeners();


// Assuming sun and moon are classes for multiple elements, correct the selector
let sun = document.querySelectorAll('.sun');
let moon = document.querySelectorAll('.moon');
let icns = document.querySelectorAll('i'); // Assuming this selects all icons correctly

// Function to apply light theme
function lightOn() {
    localStorage.setItem('theme', 'light');
    document.body.classList.add('lighton');
    icns.forEach(icn => icn.style.color = "rgba(2, 2, 2, 1)");
}

// Function to apply dark theme
function darkOn() {
    localStorage.setItem('theme', 'dark');
    document.body.classList.remove('lighton');   
    icns.forEach(icn => icn.style.color = "#ffffff");
}

// Attach event listeners to sun and moon icons
moon.forEach(m => m.addEventListener('click', lightOn));
sun.forEach(s => s.addEventListener('click', darkOn));

// Initial theme setup
function initializeTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
        lightOn();
    } else {
        darkOn();
    }
}

initializeTheme();

//comment creation 
let create = document.getElementById('create');
let submit = document.getElementById('submit');
let cmnholder = document.querySelector('.cmnholder');
let inputHolder = document.querySelectorAll('.input-holder');
let div6 = document.querySelector('.div6');

create.addEventListener('click', function() {
    inputHolder.forEach(inputHolder => inputHolder.style.display = 'flex');
    div6.style.height = '105vh';
});

submit.addEventListener('click', function() {
    const img = document.createElement('img');
    img.setAttribute('src', 'data/profile.png');

    const h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode(forname.value));

    const p = document.createElement('p');
    p.style.width = '320px';
    p.appendChild(document.createTextNode(forcomment.value));
    p.classList.add('comm');

    const stars = document.createElement('div');
    stars.classList.add('stars');
    for (let i = 0; i < 5; i++) {
        const input = document.createElement('span');
        input.classList.add('fas', 'fa-star');
        stars.appendChild(input);
    }

    const pictureof = document.createElement('div');
    pictureof.classList.add('pictureof');
    pictureof.appendChild(img);

    const nameof = document.createElement('div');
    nameof.classList.add('nameof');
    nameof.appendChild(h3);

    const client = document.createElement('div');
    client.classList.add('client');
    client.appendChild(pictureof);
    client.appendChild(nameof);

    const headcomment = document.createElement('div');
    headcomment.classList.add('headcomment');
    headcomment.appendChild(client);
    headcomment.appendChild(stars);

    const comment = document.createElement('div');
    comment.classList.add('comment');
    comment.appendChild(headcomment);
    comment.appendChild(p);

    cmnholder.appendChild(comment);
});

// Cache DOM elements
let head = document.getElementById('head');
let companyLogo = document.getElementById('companyLogo');
let btn1 = document.getElementById('btn1');
let title = document.querySelector('.title');
let ul = document.getElementById('ul');
let menu = document.getElementById('menu');

// Debounce function to limit the number of scroll event calls
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Handle scroll event
function handleScroll() {
  let value = localStorage.getItem('value');
  let isDark = value === 'dark';
  let isLight = value === 'light';
  let isSmallScreen = screen.availWidth < 850;
  let isScrolledDown = scrollY > 300;

  // Common style changes
  head.style.height = isScrolledDown ? '70px' : '140px';
  companyLogo.style.width = isScrolledDown ? '40px' : '50px';
  menu.style.top = isScrolledDown ? '70px' : '140px';
  title.style.fontSize = isScrolledDown ? '25px' : '28px';
  ul.style.fontSize = '17px'; // This remains constant, no need for condition

  // Style changes based on theme
    head.style.background = isScrolledDown ? 'var(--bgclr1)' : 'var(--bgclr2)';
    head.style.boxShadow = isScrolledDown ? '0.00px 1.00px 28px 0px rgba(0, 0, 0, 0.12)' : '0.00px 0px 0px 0px rgba(0, 0, 0, 0)';

  // Button display logic
  btn1.style.display = (isScrolledDown && !isSmallScreen) ? 'block' : 'none';

  // Call other functions
  animation1();
  animation2();
  showIt1();
}

// Attach debounced scroll event
window.onscroll = debounce(handleScroll, 10);

  //sign in / sign up
  let exitbtn1 = document.getElementById('exitbtn1');
  let signinHolder = document.querySelector('.signin-holder');
  let signInInputs = document.querySelector('.sign-in-inputs');
  let signUpInputs = document.querySelector('.sign-up-inputs');
  let signup = document.getElementById('signup');

  btn1.onclick = function(){
        signinHolder.style.top = '0';
        exitbtn1.style.display = 'block';
        btn1.style.display = 'none';
  }
  btn11.onclick = function(){
    signinHolder.style.top = '0';
    exitbtn1.style.display = 'block';
}
    exitbtn1.onclick = function(){
        signinHolder.style.top = '-1140px';
        exitbtn1.style.display = 'none';
        btn1.style.display = 'none';
        signInInputs.style.display = 'grid';
        signUpInputs.style.display = 'none';
  }
  signup.onclick = function(){
    signInInputs.style.display = 'none';
    signUpInputs.style.display = 'grid';
}

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        // Initial check to apply styles as needed
        applyLabelStyle(input);

        // Event listeners for real-time updates
        input.addEventListener('input', () => applyLabelStyle(input));
    });

    function applyLabelStyle(input) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
            if (input.value = '') {
                label.classList.add('label-has-content');
            } else {
                label.classList.remove('label-has-content');
            }
        }
    }
});

    
