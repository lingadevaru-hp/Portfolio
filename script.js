// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Terminal typing effect
class TerminalTyping {
    constructor(element, text, delay = 100) {
        this.element = element;
        this.text = text;
        this.delay = delay;
        this.index = 0;
        this.type();
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.delay);
        }
    }
}

// Cursor blinking effect
const cursor = document.querySelector('.cursor');
if (cursor) {
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Form submission with email
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = this.querySelector('button');
    const emailInput = this.querySelector('input[type="email"]');
    button.innerHTML = 'Sending...';
    button.disabled = true;
    
    // Add your email sending logic here
    // For now, just showing an alert
    setTimeout(() => {
        alert(`Thank you for your message! We will contact you at ${emailInput.value}`);
        this.reset();
        button.innerHTML = 'Send Message';
        button.disabled = false;
    }, 1500);
});

// Dark/Light theme toggle - Fixed version
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const root = document.documentElement;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-theme', savedTheme === 'light');
    updateThemeIcon(savedTheme === 'light');

    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateThemeIcon(isLight);
    });

    function updateThemeIcon(isLight) {
        const icon = themeToggle.querySelector('i');
        icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    }
});

// Skills animation
document.querySelectorAll('.skill-category').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const terminalOutput = document.querySelector('.terminal-content .output:first-of-type');
    if (terminalOutput) {
        terminalOutput.textContent = 'lingadevaru';
    }
    
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        new TerminalTyping(typewriterElement, 'Computer Science Student');
    }
});