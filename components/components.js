// Содержимое компонентов в виде строковых констант
const headerHTML = `
<div class="navbar">
    <div class="navbar-inner">
        <div class="brand-logo"><span class="brand-letter">K</span><span class="brand-letter">L</span><span class="brand-letter">F</span></div>
        <div class="nav-links">
            <a href="index.html" id="homeLink">Home</a>
            <a href="about.html" id="aboutLink">About Us</a>
            <a href="services.html" id="servicesLink">Services</a>
            <a href="contact.html" id="contactLink">Contact Us</a>
        </div>
    </div>
</div>
`;

const footerHTML = `
<footer class="footer">
    &copy; 2013-<span id="currentYear"></span> Kyselova Kyiv Law Firm. All rights reserved.
</footer>
`;

document.addEventListener('DOMContentLoaded', function() {
    // Загружаем шапку
    const headerElement = document.getElementById('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (currentPage === '' || currentPage === 'index.html') {
            document.getElementById('homeLink').classList.add('active');
        } else {
            const currentLinkId = currentPage.replace('.html', 'Link');
            const currentLink = document.getElementById(currentLinkId);
            if (currentLink) {
                currentLink.classList.add('active');
            }
        }
    }

    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;

        const currentYearElement = document.getElementById('currentYear');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }
    }

    const contentContainer = document.querySelector('.container');
    if (contentContainer) {
        setTimeout(function() {
            contentContainer.classList.add('fade-in');
        }, 50);
    }

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').indexOf('#') !== 0) { // не якорные ссылки
                e.preventDefault();

                const container = document.querySelector('.container');
                container.style.opacity = 0;
                container.style.transition = 'opacity 0.3s ease';

                setTimeout(function() {
                    window.location = link.href;
                }, 300);
            }
        });
    });
});
