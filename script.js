// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(44, 62, 80, 0.98)';
    } else {
        navbar.style.background = 'rgba(44, 62, 80, 0.95)';
    }
});

// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation
    burger.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress');

const animateProgressBars = () => {
    progressBars.forEach(progress => {
        const value = progress.style.width;
        progress.style.width = '0';
        setTimeout(() => {
            progress.style.width = value;
        }, 100);
    });
}

// Intersection Observer for Progress Bars
const aboutSection = document.querySelector('.about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the form data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');
    
    // Reset form
    contactForm.reset();
});

// Service Cards Hover Effect
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Portfolio Items Hover Effect
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    const overlay = item.querySelector('.portfolio-overlay');
    
    item.addEventListener('mouseenter', () => {
        overlay.style.bottom = '0';
    });
    
    item.addEventListener('mouseleave', () => {
        overlay.style.bottom = '-100%';
    });
});

// Add Animation on Scroll
const sections = document.querySelectorAll('section');

const revealSection = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-reveal');
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    revealSection.observe(section);
});

// Trading Stats Counter Animation
const stats = document.querySelectorAll('.stat h3');

const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let count = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        const updateCount = () => {
            if (count < target) {
                count += increment;
                stat.textContent = Math.round(count) + (stat.textContent.includes('+') ? '+' : '%');
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target + (stat.textContent.includes('+') ? '+' : '%');
            }
        };

        updateCount();
    });
};

// Trigger stats animation when hero section is visible
const heroSection = document.querySelector('.hero');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(heroSection);

// Slider functionality
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

leftArrow.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

rightArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Auto slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Remove search items
const removeButtons = document.querySelectorAll('.remove-search');
removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const searchItem = button.closest('.search-item');
        searchItem.style.opacity = '0';
        setTimeout(() => {
            searchItem.remove();
        }, 300);
    });
});

// Artwork hover effect
const artworkItems = document.querySelectorAll('.artwork-item');
artworkItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Tag hover effect
const tags = document.querySelectorAll('.tag');
tags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateX(10px)';
        tag.style.transition = 'transform 0.3s ease';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateX(0)';
    });
});

// Mobile menu toggle
const menuButton = document.createElement('button');
menuButton.classList.add('menu-toggle');
menuButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.nav-right').prepend(menuButton);

const navCenter = document.querySelector('.nav-center');

menuButton.addEventListener('click', () => {
    navCenter.classList.toggle('show');
    if (navCenter.classList.contains('show')) {
        navCenter.style.display = 'flex';
        navCenter.style.position = 'absolute';
        navCenter.style.top = '100%';
        navCenter.style.left = '0';
        navCenter.style.width = '100%';
        navCenter.style.background = 'white';
        navCenter.style.flexDirection = 'column';
        navCenter.style.padding = '1rem';
        navCenter.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navCenter.style.display = 'none';
    }
});

// View More button effect
const viewMoreBtn = document.querySelector('.view-more-btn');
viewMoreBtn.addEventListener('mouseenter', () => {
    viewMoreBtn.style.backgroundColor = var(--secondary-color);
    viewMoreBtn.style.transition = 'background-color 0.3s ease';
});

viewMoreBtn.addEventListener('mouseleave', () => {
    viewMoreBtn.style.backgroundColor = var(--white);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    
    if (!img.complete) {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    }
});

// Initialize intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.artwork-item, .tag, .search-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

// Add animation class
document.styleSheets[0].insertRule(`
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
`, 0);

document.styleSheets[0].insertRule(`
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`, 0);

// Efek hover untuk gambar hero
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    heroImage.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = heroImage.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        const rotateX = (y - 0.5) * 20;
        const rotateY = (x - 0.5) * 20;
        
        heroImage.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    heroImage.addEventListener('mouseleave', () => {
        heroImage.style.transform = 'perspective(1000px) rotateY(-15deg)';
    });
}

// Fungsi untuk animasi statistik
function animateNumber(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 1500;
        const step = duration / 50;
        
    function update() {
            current += increment;
            if (current < target) {
            element.textContent = Math.floor(current) + '+';
            setTimeout(update, step);
            } else {
            element.textContent = target + '+';
            }
        }
        
    update();
}

// Fungsi untuk menghapus item pencarian
function setupSearchItemRemoval() {
document.querySelectorAll('.remove-search').forEach(button => {
    button.addEventListener('click', function() {
        const searchItem = this.closest('.search-item');
        searchItem.style.opacity = '0';
        searchItem.style.transform = 'translateX(20px)';
        setTimeout(() => {
            searchItem.remove();
        }, 300);
    });
});
}

// Inisialisasi saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Setup observer untuk animasi statistik
    const statsElement = document.querySelector('.stats');
    if (statsElement) {
        const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
                    document.querySelectorAll('.number').forEach(numberElement => {
                        const target = parseInt(numberElement.textContent);
                        animateNumber(numberElement, target);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsElement);
    }

    // Setup penghapusan item pencarian
    setupSearchItemRemoval();
});

// Toggle menu mobile
const toggleMenu = () => {
    const navCenter = document.querySelector('.nav-center');
    const navRight = document.querySelector('.nav-right');
    
    if (window.innerWidth <= 768) {
        navCenter.style.display = navCenter.style.display === 'flex' ? 'none' : 'flex';
        navRight.style.display = navRight.style.display === 'flex' ? 'none' : 'flex';
    }
};

// Event listener untuk menu mobile
const profileIcon = document.querySelector('.profile-icon');
if (profileIcon) {
    profileIcon.addEventListener('click', toggleMenu);
} 