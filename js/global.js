burger = $('[rel="burger"]')

$(burger).click(() => {
    let height = getHeight($('[rel="menu"]'))
    if (height === 0) {
        animateMenu(180, 10)
    } else {
        animateMenu(0, 0)
    }
    burger.attr('src', toggleIcon(height))

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
    let src;
    if (height === 0) {
        src = "./img/close.svg"
    } else {
        src = "./img/burger.svg"
    }
    return src
}


function scrollTo(elem) {
    element = $(document).find(elem);
    var offset = $(element).offset();
    offset.top -= 100;
    // console.log(offset)
    $('html,body').animate({
        scrollTop: offset.top,
    });
}

function getContent(data, id) {
    let index = data.services.findIndex(x => x.id == id);
    console.log(index)
    console.log(id)
    let content = data.services[index]
    console.log(content)
    return content;
}
