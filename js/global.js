let burger = $('[rel="burger"]')

$(document).click(burger, () => {
    let height = getHeight($('[rel="menu"]'))
    if (height === 0) {
        animateMenu(180, 10)
    } else {
        animateMenu(0, 0)
    }
    toggleIcon(height)

})

function animateMenu(height, padding) {
    $('[rel="menu"]').animate({
        'height': height,
        'padding-top': padding,
        'padding-bottom': padding

    })
}

function getHeight(elem) {
    let height;
    height = $('[rel="menu"]').outerHeight()
    console.log(height)
    return height
}

function toggleIcon(height) {
    if (height === 0) {
        burger.attr('src', "./img/logo_tools.png")
    } else {
        burger.attr('src', "./img/logo_mountains.png")
    }
}
