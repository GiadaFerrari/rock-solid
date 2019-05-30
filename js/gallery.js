let url = './json/gallery.json'

$(window).on('load', () => {
    $(".before_after").twentytwenty();
})


$('[rel="gallery-link"]').click((e) => {
    let id = e.target.getAttribute('id')
    if (!id) {
        id = e.target.parentElement.getAttribute('id')
    }
    console.log(e.target)
    console.log(id)
    fetchContent(id);
    animateModal(-10)
    scrollTo($('[rel="gallery"]'))
})


$('[rel="modal-close"]').click(() => {
    animateModal(-1100)
    emptyModal()
})


function animateModal(position, index) {
    $('.gallery').animate({
        'top': position
    }, 1500)
}

function fetchContent(id) {
    console.log(id)

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
    let imageContainer = modal.querySelector('.images')
    modal.querySelector('h1').textContent = content.work;
    modal.querySelector('p').textContent = content.desc;
    modal.querySelector('[rel="bfr"]').setAttribute('src', content.main.after)
    content.desc;
    modal.querySelector('[rel="aft"]').setAttribute('src', content.main.before)


    for (let img in content.images) {
        let image = content.images[img];
        $(imageContainer).append(`
 <div class="imgContainer">
                        <img src="${image.src}" alt="${image.alt}"></div>`)

    }

}

function emptyModal() {
    let modal = document.querySelector('[rel="gallery"]');
    let imageContainer = document.querySelector('.images')

    $(imageContainer).html("");
    modal.querySelector('h1').textContent = "";
    modal.querySelector('p').textContent = "";


}
