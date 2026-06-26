// Add a subtle hover effect to bento items to make them track mouse movement
const bentoItems = document.querySelectorAll('.bento-item');

bentoItems.forEach(item => {
    item.addEventListener('mousemove', e => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        item.style.setProperty('--mouse-x', `${x}px`);
        item.style.setProperty('--mouse-y', `${y}px`);
        
        // Slight tilt effect
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;
        
        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Add dynamic glow to border on hover using CSS variables
document.head.insertAdjacentHTML('beforeend', `
<style>
.bento-item::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border-radius: inherit;
    padding: 2px;
    background: radial-gradient(
        800px circle at var(--mouse-x, 0) var(--mouse-y, 0), 
        rgba(255, 255, 255, 0.1),
        transparent 40%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
}

.bento-item:hover::before {
    opacity: 1;
}
</style>
`);

// Simple form submission prevention for demo
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = 'Sent Successfully!';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = '';
        e.target.reset();
    }, 3000);
});
