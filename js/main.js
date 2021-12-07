function faqScrollBtn() {
    const faqBtn = document.querySelector('.header__menu-faq');
    const faqSection = document.querySelector('.faq');
    faqBtn.addEventListener('click', () => {
        faqSection.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    })
}

faqScrollBtn();

// Redner Service Items
function serviceItemsCreate() {
    const serviceItemsBlock = document.querySelector('.service__items');
    // Service Items Collection
    const serviceItems = [{
            serviceIcon: `img/1.svg`,
            serviceTitle: `Marketing & SEO Agency`,
            serviceText: `Esteem spirit temper too say adieus who direct esteem.`,
        },
        {
            serviceIcon: `img/2.svg`,
            serviceTitle: `Startup Agency`,
            serviceText: `Esteem spirit temper too say adieus who direct esteem.`,
        },
        {
            serviceIcon: `img/3.svg`,
            serviceTitle: `Corporate Business`,
            serviceText: `Esteem spirit temper too say adieus who direct esteem.`,
        },
        {
            serviceIcon: `img/4.svg`,
            serviceTitle: `Finance Solution`,
            serviceText: `Esteem spirit temper too say adieus who direct esteem.`,
        },
        {
            serviceIcon: `img/5.svg`,
            serviceTitle: `Food & Restaurant`,
            serviceText: `Esteem spirit temper too say adieus who direct esteem.`,
        },
        {
            serviceIcon: `img/6.svg`,
            serviceTitle: `Travel Agency`,
            serviceText: `Esteem spirit temper too say adieus who direct esteem.`,
        },
    ];

    const serviceItemsTemplate = ({
        serviceIcon,
        serviceTitle,
        serviceText,
    }) => {
        return `
            <div class="service__item">
                <div class="service__item-icon">
                    <img src="${serviceIcon}" alt="">
                </div>
                <h3 class="service__item-title">
                    ${serviceTitle}
                </h3>
                <p class="service__item-text">
                    ${serviceText}
                </p>
            </div>`;
    }

    let serviceItemsTemplateString = '';
    serviceItems.forEach(items => {
        serviceItemsTemplateString += serviceItemsTemplate(items)
    })

    serviceItemsBlock.innerHTML = serviceItemsTemplateString;
}

serviceItemsCreate();
// Render Sevice Items End


// Faq Accaridon Render
function accardionCreate() {
    const faqBtn = document.querySelectorAll('.faq__accardion-btn');
    const faqPanelClass = 'faq__accardion-panel-active';
    const faqBtnActive = 'faq__accardion-btn-active';

    for (let value of faqBtn) {
        value.addEventListener('click', () => {
            value.classList.toggle(faqBtnActive);
            let faqPanel = value.nextElementSibling;

            if (faqPanel.classList.contains(faqPanelClass)) {
                faqPanel.classList.remove(faqPanelClass);
            } else {
                faqPanel.classList.add(faqPanelClass);
            }

        });
    }
}

accardionCreate();
// Faq Accardion Render End


// Testimonials Render
function testimonialsCreate() {
    const testimonialsBlock = document.querySelector('.testimonials__slider-wrapper');

    // Testimonials Collection
    const testimonialsItems = [{
            testimonialsText: 'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.',
            testimonialsImg: 'img/human-1.png',
            testimonialsName: 'Fiona Gallager',
        },
        {
            testimonialsText: 'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.',
            testimonialsImg: 'img/human-1.png',
            testimonialsName: 'Fiona Gallager',
        },
        {
            testimonialsText: 'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.',
            testimonialsImg: 'img/human-1.png',
            testimonialsName: 'Fiona Gallager',
        },
    ];

    const testimonialsTemplate = ({
        testimonialsTitle,
        testimonialsImg,
        testimonialsName
    }) => {
        return `
            <div class="testimonials__slider-item swiper-slide">
                <h3 class="testimonials__text">
                    Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor
                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  
                </h3>
                <div class="testimonials__img">
                    <img src="img/human-1.png" alt="">
                </div>
                <p class="testimonials__name">Fiona Gallager</p>
            </div>
            `;
    }

    let testimonialsTemplateString = '';
    testimonialsItems.forEach(items => {
        testimonialsTemplateString += testimonialsTemplate(items)
    })

    testimonialsBlock.innerHTML = testimonialsTemplateString;


    var swiper = new Swiper('.testimonials__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            clickable: true,
        },
    });
}

testimonialsCreate();
// Testimonials End