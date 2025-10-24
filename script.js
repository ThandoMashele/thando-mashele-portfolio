// Thando Mashele Portfolio - Interactive Features
console.log("Thando Mashele Portfolio loaded successfully!");

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Button animation
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Project item hover effects
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Update copyright year automatically
    const currentYear = new Date().getFullYear();
    console.log(`Portfolio © ${currentYear} Thando Mashele`);
});