function serviceItemsCreate() {
    const serviceItemsBlock = document.querySelector('.service__items');
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