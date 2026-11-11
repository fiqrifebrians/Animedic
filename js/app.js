// Intersection Observer for Live Metrics (Index)
const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                let count = 0;
                const updateCount = () => {
                    const inc = target / 100;
                    if (count < target) {
                        count += inc;
                        entry.target.innerText = Math.ceil(count).toLocaleString();
                        setTimeout(updateCount, 15);
                    } else {
                        entry.target.innerText = target.toLocaleString();
                    }
                };
                updateCount();
                observer.unobserve(entry.target);
            }
        });
    });
    counters.forEach(counter => observer.observe(counter));
}

// Auth Toggles & Validation
const toggleAuthBtns = document.querySelectorAll('.toggle-auth');
if (toggleAuthBtns.length > 0) {
    toggleAuthBtns.forEach(btn => btn.addEventListener('click', () => {
        document.querySelector('.login-panel').classList.toggle('active');
        document.querySelector('.signup-panel').classList.toggle('active');
    }));
    
    const pwInput = document.getElementById('signup-password');
    if(pwInput) {
        pwInput.addEventListener('input', (e) => {
            const bar = document.querySelector('.strength-bar');
            const val = e.target.value;
            bar.style.width = val.length > 8 ? '100%' : (val.length * 10) + '%';
            bar.style.backgroundColor = val.length > 8 ? '#10B981' : 'var(--primary)';
        });
    }

    document.getElementById('login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        sessionStorage.setItem('animedic_token', 'mock-jwt-123');
        window.location.href = '/index.html';
    });
}

// Consultation: Draggable PIP
const pip = document.getElementById('local-video');
if (pip) {
    let isDragging = false, startX, startY, initialX, initialY;
    pip.addEventListener('mousedown', e => {
        isDragging = true;
        startX = e.clientX; startY = e.clientY;
        initialX = pip.offsetLeft; initialY = pip.offsetTop;
    });
    window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        pip.style.left = `${initialX + e.clientX - startX}px`;
        pip.style.top = `${initialY + e.clientY - startY}px`;
    });
    window.addEventListener('mouseup', () => isDragging = false);
    
    // Chat append
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
        if(e.key === 'Enter' && e.target.value) {
            const chatBox = document.getElementById('chat-messages');
            chatBox.innerHTML += `<div><strong>You:</strong> ${e.target.value}</div>`;
            e.target.value = '';
        }
    });
}

// Grooming Calculator
const grmTotal = document.getElementById('grm-total');
if (grmTotal) {
    const calcPrice = () => {
        const base = 45;
        let mult = parseFloat(document.getElementById('grm-pet').value) * 
                   parseFloat(document.getElementById('grm-size').value) * 
                   parseFloat(document.getElementById('grm-hair').value);
        let addon = 0;
        document.querySelectorAll('.grm-addon:checked').forEach(cb => addon += parseFloat(cb.value));
        grmTotal.innerText = ((base * mult) + addon).toFixed(2);
    };
    document.querySelectorAll('select, .grm-addon').forEach(el => el.addEventListener('change', calcPrice));
}

// Hotel Booking Validation
const hotelForm = document.getElementById('hotel-booking-form');
if (hotelForm) {
    hotelForm.addEventListener('submit', e => {
        e.preventDefault();
        const vaxBox = document.getElementById('vaccine-verified');
        if (!vaxBox.checked) {
            vaxBox.parentElement.classList.add('shake');
            setTimeout(() => vaxBox.parentElement.classList.remove('shake'), 400);
            showToast("You must verify vaccine passport.");
        } else {
            showToast("Booking Confirmed!");
        }
    });
}