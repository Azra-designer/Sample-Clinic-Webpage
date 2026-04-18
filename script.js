
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); });
        }, { threshold: 0.08 });
        document.querySelectorAll('.reveal').forEach(r => obs.observe(r));

        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });
        function closeMenu() {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        }
        document.addEventListener('click', e => {
            if(!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) closeMenu();
        });
