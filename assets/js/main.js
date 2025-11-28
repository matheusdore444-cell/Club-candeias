
const CONFIG = { whatsapp: "5571999160747", msg: "Olá! Vi o site e quero saber mais sobre o Clube Candeias." };

document.addEventListener("DOMContentLoaded", () => {
    // Loader
    setTimeout(() => {
        const l = document.getElementById('loader');
        if(l) { l.style.opacity='0'; setTimeout(() => l.remove(), 500); }
    }, 600);

    // AOS Init
    if(typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true, offset: 60 });

    // WhatsApp Links
    document.querySelectorAll('.wa-trigger').forEach(btn => {
        btn.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.msg)}`;
        btn.target = "_blank";
    });

    // Mobile Menu
    const hb = document.querySelector('.hamburger');
    const mm = document.querySelector('.mobile-menu');
    const ol = document.querySelector('.overlay');
    const cl = document.querySelector('.close-menu');

    function toggle() {
        mm.classList.toggle('active');
        ol.classList.toggle('active');
    }

    if(hb) hb.addEventListener('click', toggle);
    if(cl) cl.addEventListener('click', toggle);
    if(ol) ol.addEventListener('click', toggle);

    // LGPD Banner
    const cb = document.getElementById('cookie-banner');
    const ac = document.getElementById('accept-cookies');
    if(!localStorage.getItem('cookiesAccepted')) { setTimeout(()=>cb.classList.add('show'), 2000); }
    if(ac) ac.addEventListener('click', ()=>{ localStorage.setItem('cookiesAccepted','true'); cb.classList.remove('show'); });

    // Live Search (Unidades)
    const searchInput = document.getElementById('unitSearch');
    if(searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filter = this.value.toLowerCase();
            const cards = document.querySelectorAll('.unit-card.item');
            let hasResult = false;
            cards.forEach(card => {
                const name = card.getAttribute('data-name');
                const city = card.getAttribute('data-city');
                if(name.includes(filter) || city.includes(filter)) {
                    card.style.display = "flex"; hasResult = true;
                } else { card.style.display = "none"; }
            });
            document.getElementById('noResults').style.display = hasResult ? 'none' : 'block';
        });
    }
});
