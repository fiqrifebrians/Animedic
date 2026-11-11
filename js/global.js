// Component Loader
document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <nav class="navbar" id="main-nav">
            <div class="logo" style="font-weight: 700; color: var(--primary); font-size: 1.5rem;">Animedic</div>
            <div class="nav-links">
                <a href="/index.html">Home</a>
                <a href="/pages/consultation.html">Consult</a>
                <a href="/pages/pharmacy.html">Pharmacy</a>
                <button class="btn-primary" id="nav-auth-btn" onclick="location.href='/pages/auth.html'">Login</button>
            </div>
        </nav>
    `;
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if(navPlaceholder) navPlaceholder.innerHTML = navHTML;

    // Check Mock Auth State
    if(sessionStorage.getItem('animedic_token')) {
        const authBtn = document.getElementById('nav-auth-btn');
        if(authBtn) {
            authBtn.textContent = 'Profile';
            authBtn.onclick = () => alert('Profile Dropdown');
        }
    }

    // Sticky Navbar logic
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if(nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    });
});

// Toast Utility
function showToast(message) {
    const container = document.getElementById('toast-container') || document.body;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}