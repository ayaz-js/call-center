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

// Render Partner Logo
function sliderCreate() {
    const sliderBlock = document.querySelector('.our-partners__slider-wrapper');

    // Partner Logo Collection
    const sliderItems = [{
            sliderImg: 'img/logo-1.png'
        },
        {
            sliderImg: 'img/logo-2.png'
        },
        {
            sliderImg: 'img/logo-3.png'
        },
        {
            sliderImg: 'img/logo-4.png'
        },
        {
            sliderImg: 'img/logo-5.png'
        },
        {
            sliderImg: 'img/logo-6.png'
        },
    ];

    const sliderTemplate = ({
        sliderImg
    }) => {
        return `
            <div class="our-partners__img swiper-slide">
                <img src="${sliderImg}" alt="">
            </div>
        `;
    }

    let sliderItemsTemplateString = '';
    sliderItems.forEach(items => {
        sliderItemsTemplateString += sliderTemplate(items)
    })

    sliderBlock.innerHTML = sliderItemsTemplateString;


    var swiper = new Swiper('.our-partners__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: true,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            425: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });
}

sliderCreate();
// Render Partner Logo End