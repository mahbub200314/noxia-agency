document.getElementById('bar-button').addEventListener('click',()=>{
 let ulList = document.getElementById('ul-list');
 let contctUs = document.getElementById('contact-us');
 ulList.classList.add('add')
 ulList.classList.remove('remove')
 contctUs.classList.add('add')
})


document.getElementById('cross').addEventListener('click',()=>{
    let ulList = document.getElementById('ul-list');
    ulList.classList.add('remove');
    ulList.classList.remove('add')
})

document.getElementById('cross2').addEventListener('click',()=>{
    let contctUs = document.getElementById('contact-us');
    contctUs.classList.add('remove');
    contctUs.classList.remove('add')

})

function navbg(){
    let nav = document.getElementById('nav');
    let scrollvalue = window.scrollY;

    if(scrollvalue >= 70){
        nav.classList.add('navbg')
    }
    else{
        nav.classList.remove('navbg')
    }
}

window.addEventListener('scroll', navbg);



//// click drop down show .....................

document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        // ...........m.......Check if window width is less than 1111px
        if (window.innerWidth < 1111) {
            //..... Prevent the click event from propagating to the document
            event.stopPropagation();

            //...... Get all dropdown items
            let allDropdownItems = document.querySelectorAll('.dropdown-item');

            //...... Check if the clicked dropdown's items are already visible
            let dropdownItems = dropdown.querySelectorAll('.dropdown-item');
            let isVisible = Array.from(dropdownItems).some(item => item.style.display === 'block');

            if (isVisible) {
                // ......If they are visible, hide all dropdown items
                allDropdownItems.forEach(item => {
                    item.style.display = 'none';
                });
            } else {
                // If not visible, hide all dropdown items first and then show the clicked dropdown's items
                allDropdownItems.forEach(item => {
                    item.style.display = 'none';
                });
                dropdownItems.forEach(item => {
                    item.style.display = 'block';
                });
            }
        }
    });
});

// Close all dropdowns when clicking anywhere outside
document.addEventListener('click', () => {
    if (window.innerWidth < 1111) {
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.style.display = 'none';
        });
    }
});





///skill meter........................





 function skill(){
    let skillBar = document.getElementById('skill-bar');
    let scrollvalue = window.scrollY;
    console.log(scrollvalue);
    
   if( scrollvalue > 1400){
     skillBar.style.display ='block';
     
   }
   else{
    skillBar.style.display ='none';
    
   }
 }
   
 window.addEventListener('scroll', skill);







 //.....count bar...............................


 let count = 0;
 let intervals;
 

 // Function to start the counting interval
function startCounter() {
    intervals = setInterval(counter1, 50); // Start counter with 50ms interval
}
 function counter1() {
    count++;
    document.getElementById('num1').innerHTML = count + 'k'; // Display count with 'k'
    if (count === 45) {
        clearInterval(intervals); // Stop the counting when it reaches 45
    }
}

// Function to start the counting interval


//.......m....... Set up the Intersection Observer
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            startCounter(); //.......... Start counter when 'num1' is visible in the viewport
            observer1.unobserve(entry.target); //........ Stop observing after starting the counter
        }
    });
});

// Observe the target element (#num1)
const target1 = document.getElementById('num1');
observer1.observe(target1);
 
//....................................................................................................................................................
//....................................................................................................................................................
//....................................................................................................................................................




let count2 = 0;
let interval2;


function countingStart(){
        interval2 = setInterval(counter2, 50)
}

function counter2(){
   count2++;
    document.getElementById('num2').innerHTML = count2 + 'k';
    if( count2==35){
         clearInterval(interval2);
    }
}


const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        if (entry2.isIntersecting) {
            countingStart(); //............... Start counter when 'num2' is visible in the viewport
            observer2.unobserve(entry2.target); //... Stop observing after starting the counter
        }
    });
});
// Observe the target element (#num2)
const target2 = document.getElementById('num2');
observer2.observe(target2);

////////////////////////////....................................
//....................................................................................................................................................
//....................................................................................................................................................

 

 let count3 = 0;

 let interval3 = null;

 function startcounter(){
    if(interval3)return;
     interval3 = setInterval(counter, 0.1);

 }
 
 function counter() {
     count3 += 100;
     document.getElementById('num3').innerHTML = count3 ;
     if (count3 >= 5163) {
         clearInterval(interval3);
         document.getElementById('num3').innerHTML = 5163;
     }
 }

 //....m......... Start the counter when the element is visible......................................

 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            startcounter(); // Start the counter when the element is visible
            observer.unobserve(entry.target); // Stop observing after it starts
        }
    });
});

//........ Observe the target element
const target = document.getElementById('num3');
observer.observe(target);












//......slder............


document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
  
    let currentIndex = 0;
    let isAnimating = false;
  
    // .........m.......Show the current slider with animation
    function showSlider(index) {
      if (isAnimating) return; // Prevent spamming during animation
      isAnimating = true;
  
      sliders.forEach((slider, i) => {
        slider.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
        slider.style.opacity = i === index ? "1" : "0";
        slider.style.transform = i === index ? "translateX(0)" : i < index ? "translateX(-100%)" : "translateX(100%)";
      });
  
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
  
     
      setTimeout(() => (isAnimating = false), 500); // .........m....Allow new animations after the current one finishes
    }
  
    // Next button functionality
    next.addEventListener("click", () => {
      if (isAnimating) return;
      currentIndex = (currentIndex + 1) % sliders.length;
      showSlider(currentIndex);
    });
  
    // Previous button functionality
    prev.addEventListener("click", () => {
      if (isAnimating) return;
      currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
      showSlider(currentIndex);
    });
  
    // Dot click functionality
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        if (isAnimating || currentIndex === i) return;
        currentIndex = i;
        showSlider(currentIndex);
      });
    });
  
    // Initialize the slider
    sliders.forEach((slider, i) => {
      slider.style.position = "absolute";
      slider.style.top = "0";
      slider.style.left = "0";
      slider.style.width = "80%";
      slider.style.transform = i === 0 ? "translateX(0)" : "translateX(100%)";
      slider.style.opacity = i === 0 ? "1" : "0";
      slider.style.padding ='0% 5%'
    });
    showSlider(currentIndex);
  });
  






  // .....................m..........infinite slider for brand logo.......................


  document.addEventListener("DOMContentLoaded", () => {
    const brandContainer = document.querySelector(".brand");
    const slides = document.querySelectorAll(".brand img");
  
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(brandContainer).gap); // Calculate slide width including gap
  
    //....m...... Clone first and last slides for seamless loop
    const firstSlideClone = slides[0].cloneNode(true);
    const lastSlideClone = slides[slides.length - 1].cloneNode(true);
  
    brandContainer.appendChild(firstSlideClone);
    brandContainer.insertBefore(lastSlideClone, slides[0]);
  
    //.....m......... Adjust wrapper position to start at the first original slide
    brandContainer.style.transform = `translateX(-${slideWidth}px)`;
  
    //............ Function to move the slides
    function moveSlides() {
      currentIndex++;
      brandContainer.style.transition = "transform 0.5s ease-in-out";
      brandContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  
      // ..m..........Reset position when reaching the cloned slides
      setTimeout(() => {
        if (currentIndex === slides.length) {
          brandContainer.style.transition = "none";
          currentIndex = 0;
          brandContainer.style.transform = `translateX(-${slideWidth}px)`;
        }
      }, 500); //..m......... Duration of the slide transition
    }
  
    // .........m......Auto slide every 2 seconds
    setInterval(moveSlides, 2000);
  });
  