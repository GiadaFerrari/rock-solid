url = './json/gallery.json'

$(window).on('load', () => {
    $(".before_after").twentytwenty();
    fetchContent('bedroom');
})


$('[rel="gallery-link"]').click((e) => {
    let id = e.target.getAttribute('id')
    if (!id) {
        id = e.target.parentElement.getAttribute('id')
    }
    console.log(e.target)
    console.log(id)
    fetchContent(id);
    animateModal(-10, 1)
    scrollTo($('[rel="gallery"]'))
})


$('[rel="modal-close"]').click(() => {
    animateModal(-1100, 0)
    emptyModal()
})


function animateModal(position, opacity) {
    $('.gallery').css('opacity', opacity)
    $('.gallery').css('z-index', opacity)

    $('.gallery').animate({
        'top': position,

    }, 1500)
}

function fetchContent(id) {
    console.log(id)
    emptyModal()
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let errorMessage = `${response.status} (${response.statusText})`,
                    error = new Error(errorMessage);
                throw (error);
            }
        })
        .then(response => response.json())
        .then(data => {
            let content = getContent(data, id)
            fillInModal(content)
        })


}



function fillInModal(content) {
    let modal = document.querySelector('[rel="gallery"]');
    let imageContainer = modal.querySelectorAll('.images')
    modal.querySelector('h1').textContent = content.work;
    modal.querySelector('p').textContent = content.desc;
    modal.querySelector('[rel="bfr"]').setAttribute('src', content.main.after)
    content.desc;
    modal.querySelector('[rel="aft"]').setAttribute('src', content.main.before)


    for (let img in content.images) {
        let image = content.images[img];
        imageContainer.forEach((imgC) => {

            $(imgC).append(`
 <div class="imgContainer">
                        <img src="${image.src}" alt="${image.alt}"></div>`)
        })


    }

}

function emptyModal() {
    let modal = document.querySelector('[rel="gallery"]');
    let imageContainer = document.querySelectorAll('.images')
    imageContainer.forEach(imgC => {
        $(imgC).html("");
    })

    modal.querySelector('h1').textContent = "";
    modal.querySelector('p').textContent = "";


}
