const faqs = document.querySelectorAll('.faq_wrapper')

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faqs.forEach((faq) => {
            faq.classList.remove('faq_active')
        })
        faq.classList.toggle('faq_active')
    })
})

const ben_cards = document.querySelectorAll('.demo_details_card')

ben_cards.forEach((item) => {
    item.addEventListener('click', () => {
        ben_cards.forEach((item) => {
            item.classList.remove('demo_details_card_active')
        })
        item.classList.add('demo_details_card_active')
    })
})
