// FULLPAGE SCROLL

new fullpage('#fullpage', {
    //options here
    css3: true,
    scrollingSpeed: 1000,
	autoScrolling: true,
    scrollHorizontally: true,
    easing: 'easeInOutCubic',
    touchSensitivity: 1,
    continuousVertical: true,
});

// Permet de règler le bug de la section 1 sur firefox
inView.offset(1);

function animateSection1() {
    
    console.log("1");
    let sectionNumber = 1;
    let illustration = `#illustration${sectionNumber}`;
    let title = `#title${sectionNumber}`;
    let subtitle = `#subtitle${sectionNumber}`
    let easing = "easeOutExpo";

    anime.timeline({loop: false}).add({ 
        targets: illustration,
        scale: [0, 1],
        duration: 2000,
        opacity: [0, 1],
        easing: easing
    });

    var textWrapper = document.querySelector(`${title} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${title} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000,
        opacity: [0, 1],
        easing: easing,
        delay: 1000,
        //delay: (el, i) => 50 * i
    });

    var textWrapper = document.querySelector(`${subtitle} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${subtitle} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000, 
        easing: easing,
        opacity: [0, 1],
        delay: 1200
        //delay: (el, i) => 50 * i
    });
}


function animateSection2() {

    console.log("2");
    let sectionNumber = 2;
    let illustration = `#illustration${sectionNumber}`;
    let title = `#title${sectionNumber}`;
    let subtitle = `#subtitle${sectionNumber}`
    let easing = "easeOutExpo";

    anime.timeline({loop: false}).add({ 
        targets: illustration,
        scale: [0, 1],
        duration: 2000, 
        opacity: [0, 1],
        easing: easing
    });

    var textWrapper = document.querySelector(`${title} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${title} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000, 
        easing: easing,
        delay: 1000,
        opacity: [0, 1],
        //delay: (el, i) => 50 * i
    });

    var textWrapper = document.querySelector(`${subtitle} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${subtitle} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000, 
        easing: easing,
        opacity: [0, 1],
        delay: 1200
        //delay: (el, i) => 50 * i
    });
    
}

function animateSection3() {

    console.log("3");
    let sectionNumber = 3;
    let illustration = `#illustration${sectionNumber}`;
    let title = `#title${sectionNumber}`;
    let subtitle = `#subtitle${sectionNumber}`
    let easing = "easeOutExpo";

    anime.timeline({loop: false}).add({ 
        targets: illustration,
        scale: [0, 1],
        duration: 2000, 
        opacity: [0, 1],
        easing: easing
    });

    var textWrapper = document.querySelector(`${title} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${title} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000, 
        opacity: [0, 1],
        easing: easing,
        delay: 1000
    });

    var textWrapper = document.querySelector(`${subtitle} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${subtitle} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000, 
        opacity: [0, 1],
        easing: easing,
        delay: 1200
        //delay: (el, i) => 50 * i
    });
}

inView('#s1').on('enter', animateSection1);
inView('#s2').on('enter', animateSection2);
inView('#s3').on('enter', animateSection3);