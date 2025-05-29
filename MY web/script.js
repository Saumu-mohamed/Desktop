// Smooth Scroll
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Particle Animation
const particlesContainer = document.getElementById('particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 4 + 2;
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(45deg, #00ffcc, #ff00ff);
        border-radius: 50%;
        opacity: ${Math.random() * 0.5 + 0.2};
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        animation: float ${Math.random() * 4 + 2}s infinite,
                  drift ${Math.random() * 10 + 5}s linear infinite;
    `;
    
    particlesContainer.appendChild(particle);
    
    setTimeout(() => particle.remove(), 10000);
}

// Additional drift animation in CSS (add to styles.css if needed)
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes drift {
        0% { transform: translateX(0); }
        100% { transform: translateX(${Math.random() * 100 - 50}px); }
    }
`, styleSheet.cssRules.length);

// Create particles
setInterval(createParticle, 100);

// Form Submission (demo)
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    e.target.reset();
});

// Floating effect for cards
document.querySelectorAll('.card').forEach(card => {
    card.style.animation = 'float 4s infinite';
});

// Typewriter effect for hero (optional)
const heroText = document.querySelector('.hero h1');
const text = heroText.textContent;
heroText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

setTimeout(typeWriter, 500);