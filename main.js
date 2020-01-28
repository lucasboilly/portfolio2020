// FULLPAGE SCROLL

new fullpage('#fullpage', {
    //options here
    scrollingSpeed: 800,
	autoScrolling: true,
    scrollHorizontally: true,
    easing: 'easeInOutCubic',
});


// 

/*

inView('#s1').on('enter', i = 1);
if i = 1 {
    fuction animate section
}
*/

console.log('ok');


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
        easing: easing
    });

    var textWrapper = document.querySelector(`${title} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${title} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000, 
        easing: easing,
        delay: 1000
    });

    var textWrapper = document.querySelector(`${subtitle} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${subtitle} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000, 
        easing: easing,
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
        easing: easing
    });

    var textWrapper = document.querySelector(`${title} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${title} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000, 
        easing: easing,
        delay: 1000
    });

    var textWrapper = document.querySelector(`${subtitle} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${subtitle} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000, 
        easing: easing,
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
        easing: easing
    });

    var textWrapper = document.querySelector(`${title} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${title} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000, 
        easing: easing,
        delay: 1000
    });

    var textWrapper = document.querySelector(`${subtitle} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ 
        targets: `${subtitle} .letter`,
        translateY: ["1.1em", 0],
        duration: 1000, 
        easing: easing,
        delay: 1200
        //delay: (el, i) => 50 * i
    });
    
}






inView('#s1').on('enter', animateSection1);
inView('#s2').on('enter', animateSection2);
inView('#s3').on('enter', animateSection3);

