document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. SERVICES DATA (Exact Master Images)
    // ==========================================
    const servicesData = [
        {
            title: "Strategy and Insight",
            desc: "We interrogate what others assume. Then we build the brief behind the brief.",
            bullets: [
                "Brand strategy & positioning", 
                "Messaging & tone of voice", 
                "Audience & competitor research", 
                "Workshops & creative sprints"
            ],
            masterImage: "assets/Strategy.png" 
        },
        {
            title: "Brand & visual identity",
            desc: "We build systems, not just logos. So you own the category, not just the conversation.",
            bullets: [
                "Brand identity & visual language", 
                "Guidelines & naming", 
                "Illustration & iconography", 
                "Brand architecture & systems"
            ],
            masterImage: "assets/Brand.png"
        },
        {
            title: "Product & digital experience",
            desc: "We design for humans and metrics. So users stay, engage, and come back.",
            bullets: [
                "UI/UX & website design", 
                "Design systems & prototyping", 
                "User research & testing", 
                "Motion graphics & micro-interactions"
            ],
            masterImage: "assets/Product.png"
        },
        {
            title: "Creative & campaign production",
            desc: "We turn attention into action. Then we prove it worked.",
            bullets: [
                "Campaign creative & social content", 
                "Presentations & pitch decks", 
                "Marketing collateral & ad creative",
                "Experiential & spatial design"
            ],
            masterImage: "assets/Creative.png"
        }
    ];

    const container = document.getElementById('dynamic-services-container');
    
    if (container) {
        container.innerHTML = ''; 

        servicesData.forEach((item) => {
            const bulletHTML = item.bullets.map(bullet => `<li>${bullet}</li>`).join('');
            
            let imagesHTML = '';
            
            if (item.masterImage) {
                imagesHTML = `
                    <div class="strategy-layout-grid">
                        <img src="${item.masterImage}" alt="${item.title}" class="strategy-master-img">
                    </div>
                `;
            } else {
                imagesHTML = `<img src="https://dummyimage.com/600x400/222222/FF4200&text=${item.title.replace(/ /g, '+')}" alt="${item.title}" class="figma-placeholder-img">`;
            }

            const serviceHTML = `
                <div class="service-block">
                    <div class="service-content-wrapper">
                        <div class="services-header-wrapper">
                            <span class="sub-heading">WHAT CAN WE DO FOR YOU</span>
                            <h1 class="main-heading">${item.title}</h1>
                        </div>
                        
                        <div class="services-two-column">
                            <div class="left-col">
                                ${imagesHTML}
                            </div>
                            
                            <div class="right-col">
                                <p class="desc-text">${item.desc}</p>
                                <ul class="service-list-figma">
                                    ${bulletHTML}
                                </ul>
                                <button class="contact-btn">CONTACT</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += serviceHTML;
        });

        // Horizontal Scroll for Services
        container.addEventListener('wheel', (evt) => {
            if (evt.deltaY !== 0) {
                evt.preventDefault();
                container.scrollLeft += evt.deltaY;
            }
        });
    }

    // ==========================================
    // 2. MAIN CONTACT FORM (upthrust-form)
    // ==========================================
    const form = document.getElementById('upthrust-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            const emailInput = document.getElementById('email').value;
            const submitBtn = form.querySelector('button');
            if (!emailInput) { alert('Please enter a valid email.'); return; }
            submitBtn.innerText = 'Submitting...';
            submitBtn.disabled = true;
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: emailInput }),
                });
                if (response.ok) {
                    form.innerHTML = '<h3 style="color: #4CAF50;">✅ Success! We will be in touch.</h3>';
                    
                    // GTM Data Layer Event Push for Main Form
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ event: 'form_submit' });
                } else { throw new Error('API failed'); }
            } catch (error) {
                alert('Oops! Something went wrong.');
                submitBtn.innerText = 'Submit';
                submitBtn.disabled = false;
            }
        });
    }

    // ==========================================
   // ==========================================
    // 3. FOOTER NEWSLETTER FORM (footer-form) + GTM
    // ==========================================
    const footerForm = document.getElementById('footer-form');
    
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const footerEmailInput = document.getElementById('footer-email');
            if (footerEmailInput && footerEmailInput.value) {
                console.log("Footer Email submitted:", footerEmailInput.value);
                alert('Thank you for subscribing to Upthrust Design!');
                
                // GTM Data Layer Event Push
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: 'form_submit' });
                
                footerForm.reset();
            }
        });
    }

    // ==========================================
    // 4. 3D PIPE HORIZONTAL SCROLL SYNC
    // ==========================================
    const servicesContainer = document.getElementById('dynamic-services-container');
    const pipeImage = document.getElementById('pipe-image');

    if (servicesContainer && pipeImage) {
        servicesContainer.addEventListener('scroll', () => {
            const scrollLeft = servicesContainer.scrollLeft;
            // Syntax error completely fixed here with proper multiplication sign (*)
            pipeImage.style.transform = `translate(-${scrollLeft * 0.4}px, -50%)`;
        });
    }

});