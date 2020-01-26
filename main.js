// FULLPAGE SCROLL

new fullpage('#fullpage', {
    //options here
    scrollingSpeed: 1000,
	autoScrolling: true,
    scrollHorizontally: true,
    easing: 'easeInOutCubic',
});


// 

function doSomething() {
    
    anime.timeline({loop: false}).add({ targets: '#illustration2',
        width: ['0', '100%'], duration: 1000, easing: "easeInOutExpo", delay: 0,
        //delay: (el, i) => 50 * i
    });


    var textWrapper = document.querySelector('.project-title2 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ targets: '.project-title2 .letter',
        translateY: ["1.1em", 0], opacity: [1, 1], duration: 1000, easing: "easeOutExpo", delay: 500, 
        //delay: (el, i) => 50 * i
    });
/*
    var textWrapper = document.querySelector('.project-subtitle2 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false}).add({ targets: '.project-title2 .letter',
        translateY: ["1.1em", 0], opacity: [1, 1], duration: 1000, easing: "easeOutExpo", delay: 500, 
        //delay: (el, i) => 50 * i
    });*/

   
}



//inView('#s1').on('enter', doSomething);
inView('#s2').on('enter', doSomething);
//inView('#s3').on('enter', doSomething);