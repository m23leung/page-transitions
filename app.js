const tlLeave = gsap.timeline({
    default: { duration: 0.75, ease: 'Power2.easeOut' }
});

const tlEnter = gsap.timeline({
    default: { duration: 0.75, ease: 'Power2.easeOut' }
});

// Make the functions for the leave and enter animations
const leaveAnimation = (current, done) => {
    const product = current.querySelector('.image-container');
    const text = current.querySelector('.showcase-text');
    const circles = current.querySelectorAll('.circle');
    const arrow = current.querySelector('.showcase-arrow');

    return (
        tlLeave.fromTo(arrow, { opacity: 1, y: 0 }, { opacity: 0, y: 50 }),
        tlLeave.fromTo(product, { opacity: 1, y: 0 }, { opacity: 0, y: 100 }, "<"),
        tlLeave.fromTo(text, { opacity: 1, y: 0 }, { opacity: 0, y: 100, onComplete: done }, "<"),
        tlLeave.fromTo(circles, { opacity: 1, y: 0 }, { opacity: 0, y: -200, stagger: 0.15, ease: 'back.out(1.7)', duration: 1, }, "<")
    );
};

const enterAnimation = (current, done) => {
    const product = current.querySelector('.image-container');
    const text = current.querySelector('.showcase-text');
    const circles = current.querySelectorAll('.circle');
    const arrow = current.querySelector('.showcase-arrow');

    return (
        tlLeave.fromTo(arrow, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }),
        tlLeave.fromTo(product, { opacity: 0, y: -100 }, { opacity: 0, y: 1 }, "<"),
        tlLeave.fromTo(text, { opacity: 0, y: 100 }, { opacity: 1, y: 0, onComplete: done }, "<"),
        tlLeave.fromTo(circles, { opacity: 0, y: -200 }, { opacity: 1, y: 0, stagger: 0.15, ease: 'back.out(1.7)', duration: 1, }, "<")
    );
};

// Run animations
barba.init({
    preventRunning: true,
    transitions: [
        // showcase transitions
        {
            name: 'default',
            leave(data) {
                const done = this.async();
                let current = data.current.container;
                leaveAnimation(current, done);
            },
            enter(data) {
                const done = this.async();
                let next = data.next.container;
                enterAnimation(next, done);
            }
        }
    ]
})
