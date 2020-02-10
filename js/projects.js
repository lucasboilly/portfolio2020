inView.offset(1);

var textWrapper = document.querySelector('.title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false}).add({ 
    targets: '.title .letter',
    translateY: ["1.1em", 0],
    duration: 1000, 
    easing: "easeOutExpo",
    delay: 1000,
    //delay: (el, i) => 50 * i
});

var textWrapper = document.querySelector('.subtitle .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false}).add({ 
    targets: '.subtitle .letter',
    translateY: ["1.1em", 0],
    duration: 1000, 
    easing: "easeOutExpo",
    delay: 1200
    //delay: (el, i) => 50 * i
});

function animate() {
    console.log("ok");
    anime.timeline({loop: false}).add({ 
        targets: `#article1 p`,
        translateY: ["1.1em", 0],
        opacity: [0, 1],
        duration: 1000, 
        easing: "easeOutExpo",
        delay: 2000
        //delay: (el, i) => 50 * i
    });
}

inView('#article1').once('enter', animate);