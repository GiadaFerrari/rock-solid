let url = './json/modalContent.json'

$('[rel="more-services"]').click((e) => {
    let id = e.target.getAttribute('id')
    fetchContent(id);
    animateModal(1, 1)
    scrollTo($('.modal'))


})

$('[rel="modal-close"]').click(() => {
    animateModal(0, -1)
    emptyModal()
})


function animateModal(opacity, index) {
    $('.modal').css('z-index', index)
    $('.modal').animate({
        'opacity': opacity
    }, 200)
}

function fetchContent(id) {

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
    let modal = document.querySelector('.modal');
    let ul = modal.querySelector('ul');
    let imageContainer = modal.querySelector('.images')
    modal.querySelector('h2').textContent = content.work;
    modal.querySelector('p').textContent = content.desc;
    content.specialties.forEach((specialty) => {
        $(ul).append(`
 <li>${specialty}</li>
`)
    })
    for (let img in content.images) {
        let image = content.images[img];
        $(imageContainer).append(`
 <div class="imgContainer">
                        <img src="${image.src}" alt="${image.alt}"></div>`)

    }

}

function emptyModal() {
    let modal = document.querySelector('.modal');
    let ul = modal.querySelector('ul');
    let imageContainer = modal.querySelector('.images')

    $(ul).html("");
    $(imageContainer).html("");
    modal.querySelector('h2').textContent = "";
    modal.querySelector('p').textContent = "";


}
